import { useState, useEffect, useCallback } from "react";
import "./2048Clone.css"; // see CSS below

const SIZE = 4;
const initialGrid = () => {
  const grid = Array(SIZE)
    .fill(null)
    .map(() => Array(SIZE).fill(null));
  addRandom(grid);
  addRandom(grid);
  return grid;
};

// ✅ Swipe support for mobile (add this inside Game)
useEffect(() => {
  let touchStartX = 0;
  let touchStartY = 0;

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 30) {
      if (absDx > absDy) {
        handleMove(dx > 0 ? "right" : "left");
      } else {
        handleMove(dy > 0 ? "down" : "up");
      }
    }
  };

  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchend", handleTouchEnd, { passive: true });

  return () => {
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchend", handleTouchEnd);
  };
}, [handleMove]);

const getEmptyCells = (grid) =>
  grid
    .flatMap((row, r) => row.map((v, c) => (v == null ? [r, c] : null)))
    .filter(Boolean);

const addRandom = (grid) => {
  const empty = getEmptyCells(grid);
  if (empty.length === 0) return;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  grid[r][c] = Math.random() < 0.9 ? 2 : 4;
};

const clone = (grid) => grid.map((row) => row.slice());

const slideAndMergeRow = (row) => {
  const nonNull = row.filter((v) => v != null);
  const merged = [];
  let scoreGain = 0;
  for (let i = 0; i < nonNull.length; i++) {
    if (i < nonNull.length - 1 && nonNull[i] === nonNull[i + 1]) {
      merged.push(nonNull[i] * 2);
      scoreGain += nonNull[i] * 2;
      i++;
    } else {
      merged.push(nonNull[i]);
    }
  }
  while (merged.length < SIZE) merged.push(null);
  return { newRow: merged, scoreGain };
};

const moveGrid = (grid, direction) => {
  let moved = false,
    scoreGain = 0;
  const g = clone(grid);
  for (let i = 0; i < SIZE; i++) {
    let row = g[i].slice();
    if (direction === "up" || direction === "down") {
      row = g.map((r) => r[i]);
    }
    if (direction === "right" || direction === "down") row.reverse();

    const { newRow, scoreGain: gain } = slideAndMergeRow(row);
    scoreGain += gain;
    let final =
      direction === "right" || direction === "down" ? newRow.reverse() : newRow;

    for (let j = 0; j < SIZE; j++) {
      const r = direction === "up" || direction === "down" ? j : i;
      const c = direction === "up" || direction === "down" ? i : j;
      if (g[r][c] !== final[j]) {
        moved = true;
      }
      g[r][c] = final[j];
    }
  }
  return moved ? { grid: g, scoreGain } : null;
};

const isGameOver = (grid) => {
  if (getEmptyCells(grid).length > 0) return false;
  const directions = ["up", "down", "left", "right"];
  return directions.every((dir) => !moveGrid(grid, dir));
};
const hasWon = (grid) => grid.some((row) => row.some((v) => v === 2048));

const TILE_SIZE = 93;
const TILE_GAP = 5;

const Tile = ({ value, row, col }) => {
  return (
    <div
      className={`tile tile-${value}`}
      style={{
        transform: `translate(${col * (TILE_SIZE + TILE_GAP)}px, ${
          row * (TILE_SIZE + TILE_GAP)
        }px)`,
      }}
    >
      {value}
    </div>
  );
};

const Game = ({ isDark }) => {
  const textColor = isDark ? "#ffffff" : "#000000";
  const [grid, setGrid] = useState(initialGrid);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const [over, setOver] = useState(false);

  const handleMove = useCallback(
    (dir) => {
      if (over || won) return;
      const result = moveGrid(grid, dir);
      if (result) {
        const newGrid = result.grid;
        addRandom(newGrid);
        setGrid(newGrid);
        setScore((prev) => prev + result.scoreGain);
      }
    },
    [grid, over, won]
  );

  const keyHandler = useCallback(
    (e) => {
      if (e.key === "ArrowUp") handleMove("up");
      if (e.key === "ArrowDown") handleMove("down");
      if (e.key === "ArrowLeft") handleMove("left");
      if (e.key === "ArrowRight") handleMove("right");
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [keyHandler]);

  useEffect(() => {
    if (hasWon(grid)) setWon(true);
    if (isGameOver(grid)) setOver(true);
  }, [grid]);

  const restart = () => {
    setGrid(initialGrid());
    setScore(0);
    setWon(false);
    setOver(false);
  };

  return (
    <div
      className="game-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 32,
      }}
    >
      <div>
        <div className="header">
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div className="glass-button" style={{ color: textColor }}>
              Score : {score}
            </div>
            <div className="glass-button" style={{ color: textColor }}>
              Best Score : {score}
            </div>
            <button
              className="glass-button"
              style={{ color: textColor }}
              onClick={restart}
            >
              New
            </button>
          </div>
        </div>

        <div className="board" style={{ position: "relative", marginTop: 24 }}>
          {grid.map((row, r) =>
            row.map(
              (v, c) =>
                v != null && (
                  <Tile key={`${r}-${c}-${v}`} value={v} row={r} col={c} />
                )
            )
          )}
          {(won || over) && (
            <div className="overlay">
              <div className="glass-button-dark" style={{ color: textColor }}>
                {won ? "You Win!" : "Game Over"}
                <button
                  className="glass-button-dark"
                  style={{ color: textColor, marginLeft: 15 }}
                  onClick={restart}
                  title="Try Again"
                >
                  ↻
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;

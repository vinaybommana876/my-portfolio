import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "../assets/project.png";
import project2 from "../assets/project1.png";
import project3 from "../assets/project2.png";

const images = [project1, project2, project3];

const ImageStack = () => {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(
    window.innerWidth <= 768 ? 300 : 450
  );

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth <= 768 ? 300 : 450);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex justify-content-center my-4">
      <div
        onClick={handleClick}
        className="position-relative"
        style={{
          width: `${cardWidth}px`,
          height: "350px",
          cursor: "pointer",
          perspective: "1000px",
        }}
      >
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Project ${index + 1}`}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.09)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              zIndex: 5,
            }}
          />
        </AnimatePresence>

        {images.map((img, i) =>
          i !== index ? (
            <img
              key={i}
              src={img}
              alt={`Stack ${i}`}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
                top: `${10 * (i + 1)}px`,
                left: `${10 * (i + 1)}px`,
                zIndex: i,
                opacity: 1,
                transform: `rotate(${i * 3.5}deg)`,
                filter: "grayscale(100%) blur(1px)",
              }}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ImageStack;

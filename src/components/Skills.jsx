import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Game from "../special-comps/2048Clone";
import SkillGrid from "../special-comps/SkillGrid";

export default function Skills({ theme }) {
  const isDark = theme === "dark";
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  return (
    <>
      <div id = "skills"
        className="py-5 min-vh-100 d-flex align-items-center"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #000000ff 0%, #310c54ff 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #8057d7ff 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Image Preview */}
            <div
              className="col-md-6 text-center z-index-100 mb-4 mb-md-0 z-index-100"
              style={{ position: "relative" }}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-3"
              >
                <h1 className="fw-bold gradient-brand-text display-4 z-index-100">
                  Skills
                </h1>
              </motion.div>
             
                <SkillGrid isDark={isDark}/>
             
            </div>

            {/* Text Content */}
            <div className="col-md-6 text-center text-md-start mb-md-0 z-index-100">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-3"
              >
                <h1 className="fw-bold gradient-brand-text display-4 z-index-100">
                  2048 Game
                </h1>
              </motion.div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Game isDark={isDark} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

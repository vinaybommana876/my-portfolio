import React from "react";
import { motion } from "framer-motion";
import vinayImage from "../assets/vinay.jpeg";
import "../App.css";
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium (used in your style)
import { StepForward  } from "lucide-react";

export default function Hero({ theme }) {
  const isDark = theme === "dark";

  return (
    <div id="home"
      className="py-5 min-vh-100 d-flex align-items-center"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #000000ff 0%, #310c54ff 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #8057d7ff 100%)",
      }}
    >
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="fw-bold gradient-brand-text display-4 display-md-3 display-lg-1 z-index-100"
            >
              Bommana Vinay
            </motion.h1>

            <motion.h4
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-3 z-index-100"
              style={{ color: isDark ? "#cfcfcf" : "#333333" }}
            >
              I'm a Software Engineer
            </motion.h4>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="z-index-100 flex items-center gap-2"
              style={{
                fontStyle: "italic",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: isDark ? "#cccccc" : "#555555",
                marginBottom: "0.3rem",
              }}
            >
              <StepForward  size={16} />
              LTI Mindtree | Hyderabad | Software Engineer
            </motion.p>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="z-index-100"
              style={{
                fontStyle: "italic",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.7rem",
                color: isDark ? "#cccccc" : "#555555",
                marginBottom: "1rem",
              }}
            >
              12th Feb 2025 - Present | 0.6 Yrs
            </motion.p>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="z-index-100 flex items-center gap-2"
              style={{
                fontStyle: "italic",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: isDark ? "#cccccc" : "#555555",
                marginBottom: "0.3rem",
              }}
            >
              <StepForward  size={16} />
              Intexm Media Private Limited | Visakhapatnam | Software Developer
            </motion.p>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="z-index-100"
              style={{
                fontStyle: "italic",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.7rem",
                color: isDark ? "#cccccc" : "#555555",
                marginBottom: "1rem",
                mariginLeft: "5px",
              }}
            >
              22nd Dec 2023 - 07th Feb 2025 | 1.3 Yrs
            </motion.p>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="z-index-100"
              style={{ color: isDark ? "#cccccc" : "#555555" }}
            >
              Passionate about crafting scalable web and enterprise solutions
              using modern web frameworks and mainframe technologies.
            </motion.p>
            <div className="mt-4 z-index-100 d-flex gap-3 justify-content-center justify-content-md-start">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bommana-vinay-3a253a251/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  color: isDark ? "#0a66c2" : "#0a66c2",
                  fontSize: "2rem",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vinaybommana876"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: isDark ? "#fff" : "#333", fontSize: "2rem" }}
              >
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vinay_.pranay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  color: isDark ? "#e1306c" : "#e1306c",
                  fontSize: "2rem",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.848s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.415 2.175 8.796 2.163 12 2.163zm0 3.838a6 6 0 1 0 0 12.001A6 6 0 0 0 12 6.001zm0 9.797a3.797 3.797 0 1 1 0-7.594 3.797 3.797 0 0 1 0 7.594zm6.406-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="mailto:bommanavinay876@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
                style={{
                  color: isDark ? "#d14836" : "#d14836",
                  fontSize: "2rem",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.065L.062 4.5v15a1.5 1.5 0 0 0 1.5 1.5h20.875a1.5 1.5 0 0 0 1.5-1.5v-15L12 13.065zm11.25-9.812V3a1.5 1.5 0 0 0-1.5-1.5H2.562A1.5 1.5 0 0 0 1.062 3v.253l11.002 8.235 11.186-8.235z" />
                </svg>
              </a>
              {/* Phone */}
              <a
                href="tel:+916303877616"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Phone"
                style={{
                  color: isDark ? "#34a853" : "#34a853",
                  fontSize: "2rem",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1c-9.39 0-17-7.61-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center z-index-100">
            <div
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
                  filter: "blur(25px)",
                  zIndex: 0,
                }}
              ></div>

              <motion.img
                src={vinayImage}
                alt="Bommana Vinay"
                className="img-fluid rounded-circle shadow"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  maxWidth: "300px",
                  width: "80%",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

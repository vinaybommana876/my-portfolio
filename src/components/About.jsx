import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume_prev from "../assets/resume_prev.png";
import resume_pdf from "../assets/Resume12102025.pdf";
import "../App.css";

export default function About({ theme }) {
  const isDark = theme === "dark";
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  return (
    <>
      <div id="about"
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
              className="col-md-6 text-center z-index-100 mb-4 mb-md-0"
              style={{ position: "relative" }}
            >
              {/* Vertical Text - CODE WITH ME */}
              <div
                style={{
                  position: "absolute",
                  left: "-100px", // Adjust this as needed
                  top: "50%",
                  transform: "translateY(-50%) rotate(-90deg)",
                  fontSize: "2.7rem",
                  fontWeight: "bold",
                  letterSpacing: "0.2rem",
                  color: isDark ? "#ffffff" : "#000000",
                  opacity: 0.25,
                  zIndex: 0,
                  whiteSpace: "nowrap",
                }}
              >
                CODE WITH ME
              </div>

              {/* Resume Heading */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-3"
              >
                <h1
                  className="fw-bold gradient-brand-text display-4 mb-5 z-index-100"
                  style={{ fontSize: "2rem" }}
                >
                  My Resume
                </h1>
              </motion.div>

              {/* Resume Image with Effects */}
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    boxShadow: isDark
                      ? "0 30px 60px rgba(255, 255, 255, 0.15)"
                      : "0 30px 60px rgba(0, 0, 0, 0.3)",
                    filter: "blur(25px)",
                    zIndex: 0,
                  }}
                ></div>
                <a
                  href={resume_prev}
                  download={resume_pdf}
                  onClick={(e) => {
                    const confirmDownload = window.confirm(
                      "Do you want to download the resume?"
                    );
                    if (!confirmDownload) {
                      e.preventDefault();
                    }
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <motion.img
                    src={resume_prev}
                    alt="Bommana Vinay"
                    className="img-fluid"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.2,
                      rotateX: 5,
                      rotateY: 5,
                      boxShadow: isDark
                        ? "0 20px 40px rgba(255, 255, 255, 0.6)"
                        : "0 20px 40px rgba(0, 0, 0, 0.6)",
                    }}
                    whileTap={{
                      scale: 0.98,
                      rotateX: 0,
                      rotateY: 0,
                    }}
                    style={{
                      maxWidth: "350px",
                      width: "80%",
                      position: "relative",
                      zIndex: 1,
                      cursor: "pointer",
                      boxShadow: isDark
                        ? "0 10px 20px rgba(255, 255, 255, 0.15)"
                        : "0 10px 20px rgba(0, 0, 0, 0.2)",
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  />
                </a>

                {/* Buttons */}
                <div className="button-group-glass mt-5">
                  <a
                    href={resume_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button"
                    style={{ color: isDark ? "#ffffff" : "#000000" }}
                  >
                    🔍 View
                  </a>
                  <a
                    href={resume_pdf}
                    download={resume_pdf}
                    onClick={(e) => {
                      const confirmDownload = window.confirm(
                        "Do you want to download the resume?"
                      );
                      if (!confirmDownload) {
                        e.preventDefault();
                      }
                    }}
                    className="glass-button"
                    style={{ color: isDark ? "#ffffff" : "#000000" }}
                  >
                    ⬇️ Download
                  </a>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 z-index-100">
              <div className="container py-5">
                {/* Top: About Intro */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-3"
                >
                  <h1 className="fw-bold gradient-brand-text display-4 z-index-100">
                    About Me
                  </h1>
                  <p
                    className="mt-3"
                    style={{
                      color: isDark ? "#cccccc" : "#555555",
                      fontStyle: "italic",
                      maxWidth: "700px",
                      margin: "0 auto",
                    }}
                  >
                    I'm Bommana Vinay, a passionate software engineer with a
                    solid foundation in web and enterprise technologies. I have
                    experience with MERN stack, PHP, Flutter, and server
                    management, bringing a versatile skill set to every project
                    I work on.
                  </p>
                </motion.div>

                {/* Middle: Design & Development Cards */}
                <div className="row g-4">
                  {/* Design Card */}
                  <motion.div
                    className="col-md-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div
                      className="p-3 rounded-4 shadow-lg h-100"
                      style={{
                        backdropFilter: "blur(10px)",
                        backgroundColor: isDark
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(255, 255, 255, 0.34)",
                        boxShadow: isDark
                          ? "0 20px 40px rgba(255, 255, 255, 0.1)"
                          : "0 20px 40px rgba(0, 0, 0, 0.1)",
                        border: isDark
                          ? "1px solid rgba(255, 255, 255, 0.2)"
                          : "1px solid rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      <h5 className="fw-bold mb-3">🎨 Design</h5>
                      <ul className="mb-0">
                        <li>UI/UX experience with Bootstrap & Tailwind</li>
                        <li>Tools: Figma, HTML/CSS, Canva</li>
                        <li>
                          Passionate about creating intuitive and engaging user
                          interfaces
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Development Card */}
                  <motion.div
                    className="col-md-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <div
                      className="p-3 rounded-4 shadow-lg h-100"
                      style={{
                        backdropFilter: "blur(10px)",
                        backgroundColor: isDark
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(255, 255, 255, 0.34)",
                        boxShadow: isDark
                          ? "0 20px 40px rgba(255, 255, 255, 0.1)"
                          : "0 20px 40px rgba(0, 0, 0, 0.1)",
                        border: isDark
                          ? "1px solid rgba(255, 255, 255, 0.2)"
                          : "1px solid rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      <h5 className="fw-bold mb-3">💻 Development</h5>
                      <ul className="mb-0">
                        <li>
                          Full Stack Developer: PHP (CodeIgniter 3 & 4),
                          Node.js, React, MySQL, MongoDB, Express.js, Firebase
                          Services
                        </li>
                        <li>
                          Mainframe Technologies: COBOL, JCL, DB2, CICS, VSAM
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom: Maintenance Section */}
                <motion.div
                  className="mt-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div
                    className="p-3 rounded-4 shadow-lg text-center"
                    style={{
                      backdropFilter: "blur(10px)",
                      backgroundColor: isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(255, 255, 255, 0.34)",
                      boxShadow: isDark
                        ? "0 20px 40px rgba(255, 255, 255, 0.1)"
                        : "0 20px 40px rgba(0, 0, 0, 0.1)",
                      border: isDark
                        ? "1px solid rgba(255, 255, 255, 0.2)"
                        : "1px solid rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <h5 className="fw-bold mb-3">
                      🛠️ Maintenance & Optimization
                    </h5>
                    <p
                      className="mb-0"
                      style={{ color: isDark ? "#cccccc" : "#555555" }}
                    >
                      Worked with DigitalOcean servers and large-scale data (50+
                      crore records). Gained experience in backend optimization,
                      Shell/Python scripting, server monitoring, and
                      freelancing—built a booking website: <a href="https://partyperfkt.com" target="_blank" rel="noopener noreferrer">partyperfkt.com</a>.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            onClick={() => setShowPopup(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              backdropFilter: "blur(5px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                transformStyle: "preserve-3d",
                perspective: "1000px",
                maxWidth: "90%",
                maxHeight: "90%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={resume_prev}
                alt="Resume"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

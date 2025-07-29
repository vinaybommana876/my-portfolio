import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import project from "../assets/project.png"; // Replace with your actual project image
import ImageStack from "../special-comps/ImageStack";

export default function Projects({ theme }) {
  const isDark = theme === "dark";
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  return (
    <>
      <div
        id="projects"
        className="py-5 min-vh-50 d-flex align-items-center"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #000000ff 0%, #310c54ff 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #8057d7ff 100%)",
        }}
      >
        <div className="container">
          <div
            className="row align-items-center"
            style={{ position: "relative" }}
          >
            <div
              className="col-md-12 text-center z-index-100 mb-4 mb-md-0"
              style={{ position: "relative" }}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-5"
              >
                <h1 className="fw-bold gradient-brand-text display-4 z-index-100">
                  Projects
                </h1>
              </motion.div>
            </div>
          </div>



          {/* === Featured Project Section === */}
          <div className="row align-items-center gy-4 z-index-100">
            {/* Left Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold gradient-brand-text fs-2 mb-4">
                Booking Website
                <span style={{ fontSize: "1rem", marginLeft: "0.5rem", fontWeight: 400 }}>
                  (Freelance Project)
                </span>
              </h2>

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
                  transform: "scale(1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  className="p-4 rounded"
                  style={{
                    // background: isDark
                    //   ? "linear-gradient(135deg, #2f1953, #3f1d69)"
                    //   : "linear-gradient(135deg, #d6c6ff, #ece3ff)",
                    color: isDark ? "#e0d8f8" : "#2e1e4e",
                  }}
                >
                  <p className="mb-0 z-index-100 mx-2 my-3">
                    A web app for managing and booking slots with full backend
                    integration. Users can book their preferred time slots
                    through a simple interface, with confirmations and
                    notifications sent via WhatsApp, email, and SMS. Built using
                    CodeIgniter 3 (PHP) and hosted on our custom server, the
                    platform includes PhonePe payment integration, ensuring
                    secure and seamless transactions. An admin console allows
                    for full control over bookings, slot availability, and user
                    management, making the system efficient for both users and
                    administrators, you may refer to <a href="https://partyperfkt.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-purple">PartyPerfkt</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6">
                <ImageStack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

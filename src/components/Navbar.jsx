import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Home, User, Code, Folder, Phone } from "react-feather";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../App.css";
import Image from "../assets/vinay.jpeg";

export default function CustomNavbar({ onToggleTheme, theme }) {
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  return (
    <Navbar
      expand="lg"
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
        borderBottom: "1px solid rgba(7, 6, 6, 0.18)",
        minHeight: "80px",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center me-3">
          <img
            src={Image}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <span
            style={{
              fontWeight: "bold",
              color: theme === "dark" ? "white" : "black",
            }}
          >
            My Portfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto d-flex align-items-center"
            style={{ gap: "2rem" }}
          >
            <Nav.Link
              href="#home"
              className="d-flex align-items-center nav-icon-link"
              style={{
                fontWeight: 500,
                fontSize: "1.1rem",
                position: "relative",
              }}
            >
              <Home size={22} color={theme === "dark" ? "white" : "black"} />
              <span className="nav-tooltip">Home</span>
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="d-flex align-items-center nav-icon-link"
              style={{
                fontWeight: 500,
                fontSize: "1.1rem",
                position: "relative",
              }}
            >
              <User size={22} color={theme === "dark" ? "white" : "black"} />
              <span className="nav-tooltip">About</span>
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="d-flex align-items-center nav-icon-link"
              style={{
                fontWeight: 500,
                fontSize: "1.1rem",
                position: "relative",
              }}
            >
              <Code size={22} color={theme === "dark" ? "white" : "black"} />
              <span className="nav-tooltip">Skills</span>
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className="d-flex align-items-center nav-icon-link"
              style={{
                fontWeight: 500,
                fontSize: "1.1rem",
                position: "relative",
              }}
            >
              <Folder size={22} color={theme === "dark" ? "white" : "black"} />
              <span className="nav-tooltip">Projects</span>
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="d-flex align-items-center nav-icon-link"
              style={{
                fontWeight: 500,
                fontSize: "1.1rem",
                position: "relative",
              }}
            >
              <Phone size={22} color={theme === "dark" ? "white" : "black"} />
              <span className="nav-tooltip">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Theme toggle button OUTSIDE the nav contents */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="d-flex align-items-center ms-3"
        >
          <Button
            variant="link"
            onClick={onToggleTheme}
            className="p-0 m-0 border-0 shadow-none bg-transparent"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "background 0.3s ease",
              position: "relative",
            }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun size={20} color="orange" />
              ) : (
                <Moon size={20} color="black" />
              )}
            </motion.div>
            <span
              className="nav-tooltip"
              style={{ right: "-10px", left: "auto" }}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </Button>
        </motion.div>
      </Container>
      {/* Tooltip styles */}
      <style>{`
                .nav-icon-link .nav-tooltip,
                .btn .nav-tooltip {
                    visibility: hidden;
                    opacity: 0;
                    background: #222;
                    color: #fff;
                    text-align: center;
                    border-radius: 4px;
                    padding: 3px 10px;
                    position: absolute;
                    z-index: 10;
                    bottom: -35px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0.9rem;
                    pointer-events: none;
                    transition: opacity 0.2s;
                    white-space: nowrap;
                }
                .nav-icon-link:hover .nav-tooltip,
                .btn:hover .nav-tooltip {
                    visibility: visible;
                    opacity: 1;
                }
            `}</style>
    </Navbar>
  );
}

"use client";
import React from "react";
import "./css/header.css";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  NavLink,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarCollapse,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" style={{ background: "#0a0b4d", color: "white" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/S_logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            
            className="custom-toggler-icon"
            aria-controls="basic-navbar-nav"
          />
          <NavbarCollapse style={{ color: "white" }} id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink >
              <Link to="/" style={{ color: "white",textDecoration:"none",  }} >
                Home
              </Link>
              </NavLink>
             <NavLink >
             <Link to="/about" style={{ color: "white",textDecoration:"none", }}> About</Link>
              </NavLink>
              <NavLink>
              <Link style={{ color: "white",textDecoration:"none", }} >
                Portfolio
              </Link>
              </NavLink>
              <NavLink>
              <Link to="/contact" style={{ color: "white",textDecoration:"none",  }} href="#link">
                Contact
              </Link>
              </NavLink>
            </Nav>
            <Navbar.Text>
              <a href="https://www.facebook.com/swathi.challapalli.3">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faSquareFacebook}
                />
              </a>
              <a href="https://www.linkedin.com/in/swathi-ind/">
                <FontAwesomeIcon
                  style={{ color: "white", marginLeft: "16px" }}
                  icon={faLinkedin}
                />
              </a>
              <FontAwesomeIcon
                style={{ color: "white", marginLeft: "16px" }}
                icon={faInstagram}
              />

              <FontAwesomeIcon
                style={{ color: "white", marginLeft: "16px" }}
                icon={faTwitter}
              />
            </Navbar.Text>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;

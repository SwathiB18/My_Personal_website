"use client";
import React from "react";
import "./css/header.css";
import Link from 'next/link'
 
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
    <div>
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
        
            <Link href="/" style={{textDecoration:'none',color:"white",padding:5}}>  Home 
             </Link>
              
                
        
             <Link href="/about" style={{textDecoration:'none',color:"white",padding:5}}>  About 
             </Link>
        
              
             
              <Link href="/" style={{textDecoration:'none',color:"white",padding:5}}>  Portfolio
             </Link>
            
             
           
              <Link href="/contact" style={{textDecoration:'none',color:"white",padding:5}}>  Contact
             </Link>
            
            
            </Nav>
            <Navbar.Text>
              <Link href="https://www.facebook.com/swathi.challapalli.3">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faSquareFacebook}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/swathi-ind/">
                <FontAwesomeIcon
                  style={{ color: "white", marginLeft: "16px" }}
                  icon={faLinkedin}
                />
              </Link>
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
    </div>
  );
};
export default Header;

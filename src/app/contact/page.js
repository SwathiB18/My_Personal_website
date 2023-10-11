"use client"
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import "../css/component2.css";

import '../css/contact.css'
import Header from "../Header";
import LastComponent from "../LastComponent";
import GetInTouch from "../GetinTouch";
const ImagePreload = ({ src }) => <link rel="preload" as="image" href={src} />;
const ContactPage=()=>{
    
    return(
        <>
        <Header/>
        <Container fluid="true" style={{ background: "#0a0b4d", padding: 40 }}>
        <Row>
          <Col>
            <p className="breadcrumb">Contact</p>
            
          </Col>
          </Row></Container>
      <Container >
        <div className='map-responsive'></div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.814781288818!2d78.50473847422941!3d17.516352899079028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bc50e900f31%3A0x90db5d46bdc8aff8!2sRama%20krishna%20Bommaraju!5e0!3m2!1sen!2sin!4v1696934647822!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</Container>
<GetInTouch/>
<LastComponent/>
        </>
    )
}
export default ContactPage;
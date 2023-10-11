"use client"
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, Image,Form,InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/component2.css";

import './css/contact.css'
import Header from "./Header";
import LastComponent from "./LastComponent";
import { faEnvelope, faHouse,faMobile } from "@fortawesome/free-solid-svg-icons";

const GetInTouch=()=>{
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return(
        <>
       
        <Container fluid="true" style={{  padding: 40 }}>
        <Row>
          <Col>
           <p>Get in Touch</p>
           <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
     
         
         <textarea
           required
          
           type="text"
           placeholder="Enter Message"
          
         />
         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      
        <Form.Group style={{marginTop:25}} as={Col} md="4" controlId="validationCustom01">
         
          <Form.Control
            required
            type="text"
            placeholder="Enter Your name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" style={{marginTop:25}} controlId="formGroupEmail">
        
        <Form.Control type="email" placeholder="Enter email" />
    
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" style={{marginTop:25}} controlId="validationCustomUsername">
        
            <Form.Control
              type="text"
              placeholder="Enter Subject"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          
        </Form.Group>
      </Row>
      <Button type="submit" className="btn6">Send Message</Button>
    </Form>
          </Col>
          <Col>
          <Container>
          <Row style={{display:'block',boxSizing:'border-box',fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left'}}>
        <Col><FontAwesomeIcon icon={faHouse}/><span style={{
    fontSize: 16,
    padding:10,

    color: "#2a2a2a"}}>Hyderabd,India</span></Col>
          <Col style={{
    fontSize: 16,
    padding:10,

    color: "#2a2a2a"}}>Old alwal,500010</Col></Row>
          <Row style={{display:'block',boxSizing:'border-box',fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left'}}>
         <Col> <FontAwesomeIcon icon={faMobile} /><span style={{
    fontSize: 16,
    padding:10,

    color: "#2a2a2a"}}>+91 8187038020</span></Col>
         <Col style={{
    fontSize: 16,
    padding:10,

    color: "#2a2a2a"}}>Mon to Fri 9am to 6 am</Col>
         
         </Row>
         <Row style={{display:'block',boxSizing:'border-box',fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left'}}>
         <Col><FontAwesomeIcon icon={faEnvelope}/><span style={{
        fontSize: 16,
        padding:10,
    
        color: "#2a2a2a"}}>swathibommaraju27@gmail.com</span></Col>
         <Col style={{
    fontSize: 16,
    padding:10,

    color: "#2a2a2a"}}>Send me query anytime</Col>
         </Row>
         </Container>
          </Col>
          </Row></Container>
     
       
        </>
    )
}
export default GetInTouch;
"use client"
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Component2 from "../component2";
import AboutMe from "../Aboutme";
import LastComponent from "../LastComponent";
import {Row,Col,Container} from 'react-bootstrap';
import '../css/AboutPage.css'
const About=()=>{
    const ImagePreload = ({ src }) => (
        <link rel="preload" as="image" href={src} />
      );
    
    return(<>
        <Header/>
        <Component2/> 
        <AboutMe/>
<Container style={{marginTop:90,}}>
    <Row>
        <Col><p className="phil">MY PHILOSOPHY</p>
<p className="phil1">Always work harder and create awesome products</p>
<p className="phil2">Good lights it very to above. Days image to sea. Over there seasons and spirit beast in. Greater bearing creepeth very behold fourth night morning seed moved.</p>

<p  className="phil2">Good lights it very to above. Days image to sea. Over there seasons and spirit beast in. Greater bearing creepeth very behold fourth night morning seed moved.</p>

<p  className="phil2">Good lights it very to above. Days image to sea. Over there seasons and spirit beast in. Greater bearing creepeth very behold fourth night morning seed moved.</p></Col>
        <Col>
        <img src="/philosophy.png" style={{height:400,width:500,marginBottom:50}} />
        </Col>
    </Row>
</Container>
<LastComponent/>

        </>
       
    )
}
export default About;
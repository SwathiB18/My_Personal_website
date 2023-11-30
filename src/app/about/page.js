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
<p className="phil2">Welcome! I'm Swathi, a dedicated UI/React developer with a passion for crafting exceptional user experiences and pushing the boundaries of web development.</p>

<p  className="phil2">My journey into the world of UI/React development began 5 years ago when I discovered the power of blending creativity with technology. Ever since then, I've been immersed in the art of transforming ideas into intuitive, responsive, and visually engaging interfaces.</p>

<p  className="phil2">With a robust foundation in HTML, CSS, JavaScript, and React, I specialize in breathing life into digital experiences. I have honed my skills in crafting pixel-perfect designs, leveraging the latest trends and best practices to create applications that not only look stunning but also function seamlessly across devices.</p></Col>
   <p className="phil2">My journey isn’t solely about writing code; it's also about sharing knowledge and nurturing the next generation of developers. As a tutor, I find immense joy in mentoring aspiring talents, not just teaching programming languages, but instilling problem-solving skills and a mindset of innovation.</p> 
    <p className="phil2">Whether you're seeking a reliable developer to breathe life into your project or looking to enhance your skills through personalized tutoring sessions, I'm here to collaborate. Let's connect and embark on a journey to create something remarkable together.

Thank you for visiting my page. I look forward to connecting with you!</p>
    
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
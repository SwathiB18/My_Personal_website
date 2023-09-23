"use client";
import React from "react";
import "./css/Aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      <Container fluid="true" style={{ background: "#0a0b4d", padding: 40 }}>
        <Row>
          <Col>
            <p className="para1">ABOUT ME</p>
            <p className="para2">
              I am a UI/Front end developer and a UpSC apirant.
            </p>
            <p className="para3">
              02<sub className="sub1">Years of Experience</sub>
            </p>
          </Col>
          <Col>
            <p className="para1">EXPERIENCES</p>
            <Row>
              <Col>
                <h5 className="para4">Graduate Trainee</h5>
                <h5 className="para5">
                  At Novisync From Feb 2019 to March 2020
                </h5>
                <h5 className="para4">SQA Engineer</h5>
                <h5 className="para5">
                  At tearafast Networks from Dec 2022 to Feb 2023
                </h5>
              </Col>
              <Col>
                <h5 className="para4">Junior developer</h5>
                <h5 className="para5">
                  At Pohu Labs From Nov 2021 to Feb 2022
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AboutMe;

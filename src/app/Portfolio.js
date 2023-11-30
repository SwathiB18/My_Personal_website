"use client";
import React from "react";
import "./css/portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faLaptop,
  faPersonChalkboard,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
const Portfolio = () => {
  const ImagePreload = ({ src }) => (
    <link rel="preload" as="image" href={src} />
  );

  return (
    <>
      <div>
        <p className="port1">My portfolio</p>
        <h2 className="paraport">
          Take a look around some of my awesome works
        </h2>
      </div>
      <Container style={{ marginTop: "40px" }}>
        <ImagePreload src="/portpic1.jpg" />
        <ImagePreload src="/portpic2.jpg" />
        <ImagePreload src="/portpic4.jpg" />
        <ImagePreload src="/portpic3.jpg" />
        <ImagePreload src="/portpic5.jpg" />
        <Row>
          <Col>
            <img src="/portpic1.jpg" className="portPic1" />
            <img src="/portpic3.jpg" className="portPic3" />
          </Col>
          <Col>
            <img src="/portpic4.jpg" className="portPic4" />
            <img src="/portpic5.jpg" className="portPic5" />
          </Col>
        </Row>
      </Container>
      <div>
        <p className="port2">My portfolio</p>
        <h2 className="paraport2">
          Take a look around some of my awesome works
        </h2>
      </div>
      <Container style={{ marginTop: "80px" }}>
        <CardGroup style={{ padding: 20 }}>
          <Card>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="portIcon"
              size="sm"
            />
            <Card.Body>
              <Card.Title>UI Developer</Card.Title>
              <Card.Text>
              Welcome to my corner of the web! I'm passionate about crafting
          intuitive user interfaces and delving into the world of React.
          With expertise in HTML, CSS, JavaScript, and React, I'm dedicated
          to creating immersive web experiences that resonate with users.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-danger">Learn More</small>
            </Card.Footer>
          </Card>
          <Card>
            <FontAwesomeIcon icon={faReact} className="portIcon" />
            <Card.Body>
              <Card.Title>React js developer</Card.Title>
              <Card.Text>
              Welcome to my corner of the web! I'm passionate about crafting
          intuitive user interfaces and delving into the world of React.
          With expertise in HTML, CSS, JavaScript, and React, I'm dedicated
          to creating immersive web experiences that resonate with users.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-danger">Learn More</small>
            </Card.Footer>
          </Card>
          <Card>
            <FontAwesomeIcon icon={faPersonChalkboard} className="portIcon" />
            <Card.Body>
              <Card.Title>Tutor</Card.Title>
              <Card.Text>
              Beyond coding, I'm committed to sharing my knowledge and empowering
          aspiring developers through tutoring sessions. I believe in not just
          teaching programming languages but nurturing problem-solving skills
          and a mindset of innovation.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-danger">Learn More</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};
export default Portfolio;

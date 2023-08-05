import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Image,
  Navbar,
} from "react-bootstrap";
import "./css/lastcomponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const ImagePreload = ({ src }) => <link rel="preload" as="image" href={src} />;

const LastComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <Container fluid="true" style={{ background: "#0a0b4d", padding: 40 }}>
        <Row>
          <Col>
            <p className="para1">DiScuss your Project now</p>
            <h4 className="text-white">swathibommaraju27@gmail.com</h4>
            <p className="text-white paralast1">
              <span>About</span>
              <span style={{ marginLeft: 5 }}>Work</span>
              <span style={{ marginLeft: 5 }}>Contact</span>
            </p>
          </Col>
          <Col>
            <Button size="lg" className="btn3 ">
              Download CV
            </Button>
            <div className="socialmedia">
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
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: 120, textAlign: "center" }}>
          <p className="text-white" style={{}}>
            Copyright ©2023 All rights reserved
          </p>
        </div>
      </Container>
    </>
  );
};

export default LastComponent;

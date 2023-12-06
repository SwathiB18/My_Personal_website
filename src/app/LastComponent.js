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
import Link from "next/link";
const ImagePreload = ({ src }) => <link rel="preload" as="image" href={src} />;

const LastComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const backgroundImageUrl = '/bg3.jpg'; 
  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    
    padding: 40// Set the height as per your requirement
    // You can add more styles here if needed
  };
  return (
    <div>
      <Container fluid="true" style={{background:'#0a0b4d',padding:40}} >
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
            <Link
              href=" https://1drv.ms/w/s!Av_kMhlgtWNFgQppn5e2p53zSKBv?e=25IDUh"
              target="_blank"
            >
              <Button size="lg" className="btn3 ">
                Download CV
              </Button>
            </Link>

            <div className="socialmedia">
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
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: 120, textAlign: "center" }}>
          <p className="text-white" style={{}}>
            Copyright ©2023 All rights reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LastComponent;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import "./css/component2.css";
const ImagePreload = ({ src }) => <link rel="preload" as="image" href={src} />;

const Component2 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <ImagePreload src="/Swa.jpeg" />
      <Card className="text-white" style={{ margin: "-5px" }}>
        {isClient && (
          <Card.Img
            src="/bg2.jpg"
            alt="Card image"
            style={{ borderRadius: "0px", margin: "0px" }}
          />
        )}
        <Card.ImgOverlay>
          <Row>
            <Col>
              <Card.Text className="cardText1">
                Hi there, This is Swathi
              </Card.Text>
              <h1 className="cardText2">Front-end developer</h1>
              <Button size="lg" className="btn2">
                Contact Me
              </Button>
            </Col>
            <Col>
              <Image
                src="/Swa.jpeg"
                roundedCircle
                className="column1"
              />
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Component2;

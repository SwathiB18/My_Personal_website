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
    <>
      <ImagePreload src="/bg2.jpg" />
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
                src="https://scontent.fnag1-2.fna.fbcdn.net/v/t1.6435-9/76706748_148580756497476_4013168075028299776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=SSrhDlTrShkAX-ulPqc&_nc_ht=scontent.fnag1-2.fna&oh=00_AfBjvwapwXBxTyZlmeWVZYfzdWDepwL_RYkSVUDX8KH38Q&oe=64F5A2AC"
                roundedCircle
                className="column1"
              />
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Component2;

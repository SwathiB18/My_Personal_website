import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExampleCarouselImage from "./ExampleCarousel";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Image,
} from "react-bootstrap";
import "./css/carousel1.css";
const ImagePreload = ({ src }) => <link rel="preload" as="image" href={src} />;

const CarouselComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel slide="true" activeIndex={index} onSelect={handleSelect}>
       
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <Row>
              <Col>
                <p className="carouselPara1">Word from my clients</p>{" "}
                <h3>Exceeded Expectations!</h3>
                <p>
                  “Kudos to Swathi for providing innovative solutions to our interface design challenges. Their ability to translate our ideas into a user-friendly interface was exceptional. Highly recommended!"
                </p>
                <div>
                  <Image
                    src="/pic1.jpg"
                    roundedCircle
                    style={{ height: "50px", width: "50px", padding: 2 }}
                  />
                  <span>Radha Krishna</span>
                </div>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <Row>
              <Col>
                <p className="carouselPara1">Word from my clients</p>{" "}
                <h3>Responsive and Reliable</h3>
                <p>
                  “We greatly appreciate Swathi's responsiveness and reliability. Their dedication to delivering high-quality work within deadlines made our collaboration seamless. Looking forward to future projects together!"
                </p>
                <div>
                  <Image
                    src="/pic1.jpg"
                    roundedCircle
                    style={{ height: "50px", width: "50px", padding: 2 }}
                  />
                  <span>Radha Krishna </span>
                </div>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item> <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <Row>
              <Col>
                <p className="carouselPara1">Word from my clients</p>{" "}
                <h3>Exceptional Mentorship</h3>
                <p>
                  “Not only is Swathi a top-notch developer, but they are also an exceptional tutor. Their ability to explain complex concepts in a clear and understandable manner has been invaluable. Thank you for your guidance!"
                </p>
                <div>
                  <Image
                    src="/pic1.jpg"
                    roundedCircle
                    style={{ height: "50px", width: "50px", padding: 2 }}
                  />
                  <span>Radha Krishna</span>
                </div>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    </div>
  );
};

export default CarouselComponent;

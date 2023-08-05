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
    <>
      <Carousel slide="true" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <Row>
              <Col>
                <p className="carouselPara1">Word from my clients</p>{" "}
                <h3>Great</h3>
                <p>
                  “There winged grass midst moving earth seed herb fifth you
                  multiply you divide cattle stars first cattle was had spirit
                  you're thing, night darkness. Which itself stars
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
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <Row>
              <Col>
                <p className="carouselPara1">Word from my clients</p>{" "}
                <h3>Great</h3>
                <p>
                  “There winged grass midst moving earth seed herb fifth you
                  multiply you divide cattle stars first cattle was had spirit
                  you're thing, night darkness. Which itself stars
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
                <h3>Great</h3>
                <p>
                  “There winged grass midst moving earth seed herb fifth you
                  multiply you divide cattle stars first cattle was had spirit
                  you're thing, night darkness. Which itself stars
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
        </Carousel.Item>
      </Carousel>
      {/* </Row>
      </Container> */}
    </>
  );
};

export default CarouselComponent;

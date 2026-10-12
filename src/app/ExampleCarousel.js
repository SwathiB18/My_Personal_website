// components/ExampleCarouselImage.js

import React from "react";

const ExampleCarouselImage = ({ text }) => {
  return (
    <>
      <img
        className="d-block w-100"
        src="/bluebg.jpeg"
        alt="${text} slide"
        style={{ height: "300px" }}
      />
    </>
  );
};

export default ExampleCarouselImage;

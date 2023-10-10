"use client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Componet2 from "./component2";
import Header from "./Header";
import AboutMe from "./Aboutme";
import Portfolio from "./Portfolio";
import CarouselComponent from "./CarouselComponent";
import LastComponent from "./LastComponent";
const Home = () => {
  return (
    <main>
      <Header />
      <Componet2></Componet2>
      <AboutMe></AboutMe>
      <Portfolio />
      <CarouselComponent></CarouselComponent>
      <LastComponent />
    </main>
  );
};
export default Home;

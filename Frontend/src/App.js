import { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Header/MainHeader";
import Hero from "./Components/Hero/Hero";
import MainBody from "./Components/MainBody/MainBody";
// import Composition from "./Components/Header/Composition";
// import Slider from "./Components/Hero/Slider";
// import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Hero />
      <MainBody />
      <Footer />
    </Fragment>
  );
}

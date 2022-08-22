import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader";
import Hero from "./components/Hero/Hero";
import MainBody from "./components/MainBody/MainBody";
import Login from "./pages/Login";
// import Composition from "./Components/Header/Composition";
// import Slider from "./Components/Hero/Slider";
// import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      {/* <MainHeader></MainHeader>
      <Hero />
      <MainBody />
      <Footer /> */}
      <Login />
    </Fragment>
  );
}

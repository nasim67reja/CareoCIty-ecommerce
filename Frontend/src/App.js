import { Fragment } from "react";

import Login from "./pages/Login";
// import Composition from "./Components/Header/Composition";
// import Slider from "./Components/Hero/Slider";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Fragment>
      {/* <MainHeader></MainHeader>
      <Hero />
      <MainBody />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Fragment>
  );
}

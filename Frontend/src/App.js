import { Fragment } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

import MainHeader from "./Components/Header/MainHeader";
export default function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <div className="mb-12 outline outline-4 outline-offset-2 outline-outline">
        hello world
      </div>
    </Fragment>
  );
}

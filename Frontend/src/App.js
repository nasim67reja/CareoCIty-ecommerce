import { Fragment } from "react";

import Login from "./pages/Login";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import MainBody from "./components/MainBody/MainBody";

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<MainBody />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </Fragment>
  );
}

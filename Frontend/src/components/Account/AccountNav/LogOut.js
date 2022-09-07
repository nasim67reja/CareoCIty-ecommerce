import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const LogOut = async () => {
    try {
      await axios.get("http://127.0.0.1:8000/api/v1/users/logout");

      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error) {
      console.log(`error: `, error);
    }
  };
  const logoutHandler = () => {
    LogOut();
  };

  return (
    <>
      <button
        className="absolute bottom-4 left-2 rounded-md bg-white py-2 px-4"
        onClick={logoutHandler}
      >
        <span className="mr-3">
          <ion-icon name="log-out-outline"></ion-icon>
        </span>
        <span>Log Out</span>
      </button>
    </>
  );
};

export default LogOut;

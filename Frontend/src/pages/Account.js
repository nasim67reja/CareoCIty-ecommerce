import React from "react";
import { Outlet } from "react-router-dom";
import AccountHead from "../components/Account/AccountNav/AccountHead";
import AccountNav from "../components/Account/AccountNav/AccountNav";

const Account = () => {
  return (
    <div className="mx-auto  w-screen max-w-pf  p-4">
      <div className="mt-8 flex gap-20">
        <div className="relative flex flex-col gap-4 ">
          <AccountHead />
          <AccountNav />
          <button className="absolute bottom-4 left-2 rounded-md bg-white py-2 px-4">
            <span className="mr-3">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span>Log Out</span>
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Account;

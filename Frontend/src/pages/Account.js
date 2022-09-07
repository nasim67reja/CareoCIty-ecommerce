import React from "react";
import { Outlet } from "react-router-dom";
import AccountHead from "../components/Account/AccountNav/AccountHead";
import AccountNav from "../components/Account/AccountNav/AccountNav";
import LogOut from "../components/Account/AccountNav/LogOut";

const Account = () => {
  return (
    <div className="mx-auto  w-screen max-w-pf  p-4">
      <div className="mt-8 flex gap-20">
        <div className="relative flex flex-col gap-4 ">
          <AccountHead />
          <AccountNav />
          <LogOut />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Account;

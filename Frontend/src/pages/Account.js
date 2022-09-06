import React from "react";
import { Outlet } from "react-router-dom";
import AccountHead from "../components/Account/AccountNav/AccountHead";
import AccountNav from "../components/Account/AccountNav/AccountNav";

const Account = () => {
  return (
    <div className="mx-auto h-screen w-screen max-w-pf px-4">
      <div className="mt-8 flex gap-12">
        <div className="flex flex-col gap-4">
          <AccountHead />
          <AccountNav />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Account;

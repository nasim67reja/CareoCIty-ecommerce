import React from "react";
import AccountHead from "../components/Account/AccountNav/AccountHead";
import AccountNav from "../components/Account/AccountNav/AccountNav";

const Account = () => {
  return (
    <div className="h-screen w-screen">
      <AccountHead />
      <AccountNav />
    </div>
  );
};

export default Account;

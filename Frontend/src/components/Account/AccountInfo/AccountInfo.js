import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";

const AccountInfo = () => {
  const params = useParams();
  let content = <p>{params.accountId}</p>;

  if (params.accountId === "profile") content = <Profile />;

  return <>{content}</>;
};

export default AccountInfo;

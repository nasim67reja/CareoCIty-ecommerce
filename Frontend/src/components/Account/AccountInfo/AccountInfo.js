import React from "react";
import { useParams } from "react-router-dom";

const AccountInfo = () => {
  const params = useParams();
  console.log(params);
  return <div>Profile</div>;
};

export default AccountInfo;

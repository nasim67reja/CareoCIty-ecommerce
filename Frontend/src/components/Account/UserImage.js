import React from "react";
import { useSelector } from "react-redux";

const UserImage = ({ imgHeight }) => {
  const loggedInUser = useSelector((state) => state.user);

  return (
    <>
      {loggedInUser.user?.data.data.photo ? (
        <img
          crossOrigin="anonymous"
          src={loggedInUser.user.data.data.photo}
          alt="userPhoto"
          className={`${imgHeight} h rounded-full`}
        />
      ) : (
        <span>
          <ion-icon name="person-circle-outline" size="large"></ion-icon>
        </span>
      )}
    </>
  );
};

export default UserImage;

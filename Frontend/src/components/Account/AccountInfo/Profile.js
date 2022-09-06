import React from "react";
import { useSelector } from "react-redux";
import UserImage from "../UserImage";

const Header = ({ title, button }) => {
  return (
    <div className="mb-4 flex gap-12 border-b border-customBorder pb-4">
      <h3 className="text-xl">{title}</h3>
      <button className="cursor-pointer text-blue-500">{button}</button>
    </div>
  );
};

const Profile = () => {
  const loggedInUser = useSelector((state) => state.user);

  return (
    <div className="grow rounded-sm border-t-2 border-orange-500 bg-white p-8 shadow-sm">
      <div className="mb-8 border-b border-customBorder ">
        <Header title="Personal Information" button="Change Information" />
        <div className="my-4 ">
          <h4 className="mb-2 opacity-80">Name</h4>
          <div className="max-w-[15rem] border border-loginBorder bg-backg py-3 px-3 opacity-90">
            {loggedInUser?.user?.data.data.name}
          </div>
        </div>
      </div>

      <div className="mb-8 border-b border-customBorder pb-4">
        <Header title="Profile Picture" button="Change Profile Picture" />
        <div>
          <h4 className="mb-2 opacity-80">Your Profile Photo</h4>
          <UserImage imgHeight="h-36" />
        </div>
      </div>

      <div className="mb-8 border-b border-customBorder pb-4">
        <Header title="Password" button="Change Password" />
        <div className="max-w-[15rem] border border-loginBorder bg-backg py-3 px-3 opacity-70">
          ***************
        </div>
      </div>

      <button className="cursor-pointer text-blue-500">
        Delete Your Account
      </button>
    </div>
  );
};

export default Profile;

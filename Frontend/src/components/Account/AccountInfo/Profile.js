import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserImage from "../UserImage";

const PersonalInfo = () => {
  const loggedInUser = useSelector((state) => state.user);

  const [personalInfoShow, setPersonalInfoShow] = useState(false);
  const [enteredName, setEnteredName] = useState("");

  const updateName = async () => {
    try {
      const { data } = await axios.patch(
        "http://127.0.0.1:8000/api/v1/users/updateMe",
        {
          name: enteredName,
        }
      );
      if (data.status === "success") {
        setTimeout(() => {
          document.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(`error: `, error);
      // setError(error.response.data.message);
    }
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    updateName();
  };

  return (
    <div className="mb-8 border-b border-customBorder ">
      <div className="mb-4 flex gap-12 border-b border-customBorder pb-4">
        <h3 className="text-xl">Personal Information</h3>
        {!personalInfoShow && (
          <button
            className="cursor-pointer text-blue-500"
            onClick={() => setPersonalInfoShow(true)}
          >
            Change Information
          </button>
        )}
      </div>

      {!personalInfoShow && (
        <div className="my-4 ">
          <h4 className="mb-2 opacity-80">Name</h4>
          <div className="max-w-[15rem] border border-loginBorder bg-backg py-3 px-3 opacity-90">
            {loggedInUser?.user?.data.data.name}
          </div>
        </div>
      )}

      {personalInfoShow && (
        <form className=" p-3" onSubmit={formSubmissionHandler}>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="max-w-[15rem] bg-backg px-4 py-2 focus:outline-none"
              placeholder={loggedInUser?.user?.data.data.name}
              type="text"
              id="name"
              name="name"
              onChange={(e) => setEnteredName(e.target.value)}
              value={enteredName}
            />
          </div>
          <button className="rounded-sm bg-secondary py-1 px-4 text-white">
            save
          </button>
        </form>
      )}
    </div>
  );
};

const ProfilePic = () => {
  const [profilePicshown, setProfilePicShown] = useState(false);

  return (
    <div className="mb-8 border-b border-customBorder pb-4">
      <div className="mb-4 flex gap-12 border-b border-customBorder pb-4">
        <h3 className="text-xl">Profile Picture</h3>
        {!profilePicshown && (
          <button
            className="cursor-pointer text-blue-500"
            onClick={() => setProfilePicShown(true)}
          >
            Change Profile Picture
          </button>
        )}
      </div>
      <div>
        <h4 className="mb-2 opacity-80">Your Profile Photo</h4>
        <UserImage imgHeight="h-36" />
      </div>
    </div>
  );
};

const MyPass = () => {
  const [passShown, setPassShown] = useState(false);

  return (
    <div className="mb-8 border-b border-customBorder pb-4">
      <div className="mb-4 flex gap-12 border-b border-customBorder pb-4">
        <h3 className="text-xl">Password</h3>
        {!passShown && (
          <button
            className="cursor-pointer text-blue-500"
            onClick={() => setPassShown(true)}
          >
            Change Password
          </button>
        )}
      </div>

      <div className="max-w-[15rem] border border-loginBorder bg-backg py-3 px-3 opacity-70">
        ***************
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="grow rounded-sm border-t-2 border-orange-500 bg-white p-8 shadow-sm">
      <PersonalInfo />
      <ProfilePic />
      <MyPass />

      <button className="cursor-pointer text-blue-500">
        Delete Your Account
      </button>
    </div>
  );
};

export default Profile;

import React from "react";
import { useSelector } from "react-redux";

const AccountHead = () => {
  const loggedInUser = useSelector((state) => state.user);

  return (
    <>
      {loggedInUser.user && (
        <div>
          <div className="flex max-w-[12rem] items-center justify-center gap-4  rounded-sm bg-white p-4 shadow-lg">
            <div>
              {loggedInUser.user.data.data.photo ? (
                <img
                  crossOrigin="anonymous"
                  src={loggedInUser.user.data.data.photo}
                  alt="userPhoto"
                  className="h-[3rem] rounded-full"
                />
              ) : (
                <span>
                  <ion-icon
                    name="person-circle-outline"
                    size="large"
                  ></ion-icon>
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span
                className="text-sm
              "
              >
                Hello,
              </span>
              <span>{loggedInUser.user.data.data.name}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountHead;

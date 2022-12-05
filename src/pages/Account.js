import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AccountHead from "../components/Account/AccountNav/AccountHead";
import AccountNav from "../components/Account/AccountNav/AccountNav";
import Loading from "../components/Reuse/Loading";

const Account = () => {
  const user = useSelector((state) => state.user.user);
  let loading = false;
  if (user === null) loading = true;

  let isLoggedIn = true;
  if (user === undefined) isLoggedIn = false;

  const navigate = useNavigate();
  return (
    <>
      {loading && (
        <div className="flex h-screen items-center justify-center gap-1">
          <Loading height="20" width="20" />
          <div className="text-gray-500">Loading ...</div>
        </div>
      )}
      {!loading && isLoggedIn && (
        <div className="mx-auto  max-w-[100rem]  px-4 py-12">
          <div className="mx-2 mt-8 grid grid-cols-1  justify-start gap-20 md:mx-0 md:grid-cols-[18%_70%]">
            <div className="relative  hidden flex-col gap-6 md:flex">
              <AccountHead />
              <AccountNav />
              {user.data.data.role === "admin" && (
                <div
                  className="flex
              flex-auto items-end justify-center  pb-4"
                >
                  <div className="w-full cursor-pointer rounded-sm bg-white py-3 text-center text-gray-500 shadow-lg">
                    <a
                      href="https://nasim67reja.github.io/react-admin-dashboard/#/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      switch to Dashboard ➡
                    </a>
                  </div>
                </div>
              )}
            </div>
            <Outlet />
          </div>
        </div>
      )}

      {!isLoggedIn && (
        <>
          <div className="flex h-screen items-center justify-center text-xl">
            you are not logged in 😢. Please logged in to access this route
          </div>
          {setTimeout(() => {
            navigate("/login");
          }, 4000)}
        </>
      )}
    </>
  );
};

export default Account;

import React from "react";

const LoginForm = () => {
  return (
    <form className="custom-form flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" className="p-2" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="p-2 " />
      </div>
      <button type="submit" className="custom-btn-bg  mt-4 py-2">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;

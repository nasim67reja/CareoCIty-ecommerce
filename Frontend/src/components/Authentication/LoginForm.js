import { useState } from "react";
import useInput from "../../hook/UseInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bars } from "react-loader-spinner";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [successful, setSuccessful] = useState("");

  const navigate = useNavigate();

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
    setIsTouched,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const logIn = async () => {
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/login",
        {
          email: enteredEmail,
          password: enteredPassword,
        }
      );

      setIsloading(false);
      setSuccessful("Log in successfully");

      setTimeout(() => {
        navigate("/");
        document.location.reload();
        setSuccessful("");
      }, 1000);
    } catch (error) {
      // console.log(`error: `, error);
      setIsloading(false);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);

    if (!enteredPasswordIsValid || !enteredEmailIsValid) {
      return;
    }

    setIsloading(true);
    logIn();
  };

  return (
    <form
      onSubmit={formSubmissionHandler}
      className="custom-form flex flex-col gap-4"
    >
      <div className={` flex flex-col`}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          autoFocus
          type="email"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          className={`mt-2 rounded-lg border border-loginBorder p-2 ${
            isLoading ? "opacity-70" : ""
          }`}
        />
        {emailInputHasError && (
          <p className="mt-2 text-sm text-red-600">Please provide your email</p>
        )}
      </div>
      <div className={`flex flex-col`}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
          className={`mt-2 rounded-lg border border-loginBorder p-2 ${
            isLoading ? "opacity-70" : ""
          }`}
        />
        {passwordInputHasError && (
          <p className="mt-2 text-sm text-red-600">
            Please provide your password
          </p>
        )}
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className={`mt-4  w-full  justify-center rounded-lg border border-loginBorder  py-2 ${
            isLoading
              ? "flex cursor-not-allowed bg-[#ccc]"
              : "bg-gradient-to-b from-gradientFrom to-gradientTo "
          }`}
        >
          {isLoading ? (
            <Bars
              height="24"
              width="80"
              // color="#4fa94d"
              color="#21dd1e"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Log in"
          )}
        </button>
      </div>

      {error && (
        <p className=" absolute top-0 left-0 flex w-full justify-center gap-2 bg-red-500 px-3 py-2 text-lg text-white">
          <span className="translate-y-[2px]">
            <ion-icon name="warning-outline"></ion-icon>
          </span>
          <span>{error}</span>
        </p>
      )}
      {successful && (
        <p className=" absolute top-0 left-0 flex w-full justify-center gap-2 bg-green-500 px-3 py-2 text-lg text-white">
          <span className="translate-y-[2px]">✔</span>
          <span>{successful}</span>
        </p>
      )}
    </form>
  );
};

export default LoginForm;

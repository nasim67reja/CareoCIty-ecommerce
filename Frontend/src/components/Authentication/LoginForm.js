import { useState } from "react";
import useInput from "../../hook/UseInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [error, setError] = useState("");
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

  const axiosPostCall = async () => {
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/login",
        {
          email: enteredEmail,
          password: enteredPassword,
        }
      );
      if (data.status === "success") {
        setTimeout(() => {
          navigate("/");
          // window.location.assign("/");
        }, 1500);
      }
    } catch (error) {
      // console.log(`error: `, error);
      setError(error.response.data.message);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);

    if (!enteredPasswordIsValid || !enteredEmailIsValid) {
      return;
    }

    axiosPostCall();

    resetPasswordInput();
    resetEmailInput();
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
          className="mt-2 rounded-lg border border-loginBorder p-2"
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
          className="mt-2 rounded-lg border border-loginBorder p-2"
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
          className="mt-4 w-full rounded-lg border border-loginBorder bg-gradient-to-b from-gradientFrom to-gradientTo py-2"
        >
          Log in
        </button>
      </div>

      {error && (
        <p className="flex w-fit gap-2 bg-red-50 px-3 text-lg text-red-600">
          <span>
            <ion-icon name="warning-outline"></ion-icon>
          </span>
          <span>{error}</span>
        </p>
      )}
    </form>
  );
};

export default LoginForm;

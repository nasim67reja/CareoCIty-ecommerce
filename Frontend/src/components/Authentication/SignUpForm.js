import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hook/useForm";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    value: enteredName,
    valueInputHasError: nameInputHasError,
    setValueInputHasError: setNameInputHasError,
    enteredValueIsValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    valueInputHasError: emailInputHasError,
    setValueInputHasError: setEmailInputHasError,
    enteredValueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
  } = useForm((value) => value.includes("@"));

  const {
    value: enteredPassword,
    valueInputHasError: passwordInputHasError,
    setValueInputHasError: setPasswordInputHasError,
    enteredValueIsValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
    reset: resetPasswordInput,
  } = useForm((value) => value.length > 5);
  const {
    value: enteredPasswordConfirm,
    valueInputHasError: password2InputHasError,
    setValueInputHasError: setPassword2InputHasError,
    enteredValueIsValid: enteredPassword2IsValid,
    valueChangeHandler: password2ChangeHandler,
    reset: resetPassword2Input,
  } = useForm((value) => value.length > 5);

  const signUpPostCall = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
            passwordConfirm: enteredPasswordConfirm,
          }),
        }
      );

      const data = await response.json();
      setError(data.message);

      if (data.status === "success") {
        setTimeout(() => {
          navigate("/");
          document.location.reload();
          // window.location.assign("/");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      setError("Something wrong !");
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) setNameInputHasError(true);
    if (!enteredEmailIsValid) setEmailInputHasError(true);
    if (!enteredPasswordIsValid) setPasswordInputHasError(true);
    if (!enteredPassword2IsValid) setPassword2InputHasError(true);

    if (
      !enteredPasswordIsValid ||
      !enteredEmailIsValid ||
      !enteredNameIsValid ||
      !enteredPassword2IsValid
    )
      return;
    signUpPostCall();

    resetEmailInput("");
    resetPasswordInput("");
    resetNameInput("");
    resetPassword2Input("");
  };

  return (
    <form
      onSubmit={formSubmissionHandler}
      className="custom-form flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="text">Your name</label>
        <input
          autoFocus
          type="text"
          id="text"
          name="name"
          onChange={nameChangeHandler}
          value={enteredName}
          className="mt-2 rounded-lg border border-loginBorder p-2"
        />
        {nameInputHasError && (
          <p className="mt-2 text-sm text-red-600">Please provide your email</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          className="mt-2 rounded-lg border border-loginBorder p-2"
        />
        {emailInputHasError && (
          <p className="mt-2 text-sm text-red-600">Please provide your email</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={passwordChangeHandler}
          value={enteredPassword}
          className="mt-2 rounded-lg border border-loginBorder p-2"
        />
        {passwordInputHasError && (
          <p className="mt-2 text-sm text-red-600">
            Please provide your password
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password2">Re-enter password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          onChange={password2ChangeHandler}
          value={enteredPasswordConfirm}
          className="mt-2 rounded-lg border border-loginBorder p-2"
        />
        {password2InputHasError && (
          <p className="mt-2 text-sm text-red-600">
            Please provide your Confirm password
          </p>
        )}
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="mt-4 w-full rounded-lg border border-loginBorder bg-gradient-to-b from-gradientFrom to-gradientTo py-2"
        >
          Sign Up
        </button>
      </div>

      {error && (
        <p className="flex w-fit gap-2 bg-red-50 px-3 text-sm text-red-600">
          <span>
            <ion-icon name="warning-outline"></ion-icon>
          </span>
          <span>{error}</span>
        </p>
      )}
    </form>
  );
};

export default SignUpForm;

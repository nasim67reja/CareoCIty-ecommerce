import { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Authentication/LoginForm";
import "./login.css";

const Login = () => {
  return (
    <Fragment>
      <div className="w-full bg-white py-5 pt-10 shadow-md">
        <div className="mx-auto max-w-[28rem] ">
          <h2 className="mb-6 text-center text-3xl font-medium text-secondary">
            CareoCity
          </h2>
          <div className="mb-8 border border-[#ddd] p-8">
            <h3 className="mb-6 text-2xl font-normal">Log in</h3>
            <LoginForm></LoginForm>
            <div className="mt-8 px-4 text-xs">
              By continuing, you agree to Careocity's
              <a href="#sd" className="mx-1 text-blue-600">
                Conditions of Use
              </a>
              and Privacy Notice.
            </div>
            <div>
              <a
                href="#o"
                className="mt-4 block text-center text-sm text-blue-600"
              >
                forgot your password ?
              </a>
            </div>
          </div>
          <div className="a-divider a-divider-break">
            <h5>New to Careocity?</h5>
          </div>
          <Link
            to="/signup"
            className="mt-8 block w-full rounded-md border border-loginBorder bg-[#e7e9ec96] py-2 text-center transition-all hover:bg-[#e7e9ec]"
          >
            Create your Careocity account
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

import { Link } from "react-router-dom";

import SignUpForm from "../components/Authentication/SignUpForm";
const Signup = () => {
  return (
    <>
      <div>
        <div className="mx-auto mt-5 max-w-[28rem] ">
          <h2 className="mb-6 text-center text-3xl font-medium text-secondary">
            CareoCity
          </h2>
          <div className="mb-8 border border-[#ddd] p-8">
            <h3 className="mb-6 text-2xl font-normal">Create Account</h3>
            <SignUpForm />
            <div className="my-8 px-4 text-xs">
              By continuing, you agree to Careocity's
              <a href="#sd" className="mx-1 text-blue-600">
                Conditions of Use
              </a>
              and Privacy Notice.
            </div>
            <div>
              already have an account?
              <Link to="/login" className="ml-1 text-blue-600">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

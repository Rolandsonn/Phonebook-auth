import SignUp from "components/SignUp";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="wrapper">
        <h1>register</h1>
        <SignUp />
        <p>
          already have an account <Link to="/login">Sign in</Link>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;

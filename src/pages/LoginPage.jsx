import Login from "components/Login";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="wrapper">
        <h1 className="title-login">Login</h1>
        <Login />
        <p>
          or{" "}
          <Link className="link-register" to="/register">
            register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;

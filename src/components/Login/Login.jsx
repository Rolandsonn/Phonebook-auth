import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(email);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => alert("Invalid User"));
  };

  return (
    <>
      <Form title="sign in" handleClick={handleLogin} />
    </>
  );
};

export default Login;

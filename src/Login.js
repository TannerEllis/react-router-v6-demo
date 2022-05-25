import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div className="login-body">
      <div className="login-container">
        <button
          className="login-button"
          onClick={() => {
            navigate("/home");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

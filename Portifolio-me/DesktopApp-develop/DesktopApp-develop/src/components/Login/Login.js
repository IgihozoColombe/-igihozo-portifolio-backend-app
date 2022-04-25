import React, { useState } from "react";
import "../../assets/css/Login.css";
import logo from "../../assets/img/icons/logo.svg";
import email from "../../assets/img/icons/email.svg";
import hide from "../../assets/img/icons/hide.svg";
import { Eye } from "react-bootstrap-icons";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div
      className="py-4"
      style={{ position: "relative", width: "100%", height: "90vh" }}
    >
      <div
        className="my-4 mx-auto"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          width: "450px",
          padding: "50px",
        }}
      >
        <img className="logo" src={logo} alt={logo} />
        <h3 className="mt-4">SIGN IN</h3>
        <p className="mb-4" style={{ color: "#828282", fontSize: "16px" }}>
          Sign in to continue to your account
        </p>

        <form>
          <div
            className="d-flex justify-content-between align-items-center mt-3"
            style={{ borderBottom: "2px solid #b9b9b9" }}
          >
            <input
              type="text"
              placeholder="web@oluadepefarm.com"
              className="py-1"
            />
            <img src={email} className="pr-3" alt={email} />
          </div>
          <div
            className="d-flex justify-content-between align-items-center mt-3"
            style={{ borderBottom: "2px solid #b9b9b9" }}
          >
            <input
              type="password"
              placeholder="Password"
              className="w-100 py-1"
            />
            <span
              className="pr-3"
              onClick={() => setViewPassword(!viewPassword)}
            >
              {viewPassword ? <Eye /> : <img src={hide} alt={hide} />}
            </span>
          </div>

          <button
            className="mt-4 d-block"
            style={{
              backgroundColor: "#5C8C24",
              color: "#fff",
              outline: "none",
              border: "none",
              borderRadius: "5px",
              width: "100%",
              padding: "5px",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
      <footer
        style={{
          backgroundColor: "#434E69",
          color: "#fff",
          fontSize: "14px",
          padding: "15px 60px",
          paddingBottom: "0",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <p>Copyright &copy; 2021 Oluadepe Farms. All rights researved.</p>
      </footer>
    </div>
  );
};

export default Login;

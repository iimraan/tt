import React, { useState } from "react";
import "./Login.css";

import cloud from "../assets/cloud.png";
import coin from "../assets/coin.png";
import dots from "../assets/dots.png";
import rocket from "../assets/rocket.png";
import spring from "../assets/spring.png";
import stars from "../assets/stars.png";
import white_outline from "../assets/white-outline.png";

const Login = () => {
  const [action, setAction] = useState("Sign In");
  return (
    <div className="form-container">
      <div
        className={`col col-1 ${
          action === "Sign Up" ? "shift-right" : "shift-left"
        }`}
      >
        <div className="image-layer">
          <img
            src={white_outline}
            alt="outline"
            className="form-img-main"
          ></img>
          <img src={dots} alt="outline" className="form-img dots"></img>
          <img src={coin} alt="outline" className="form-img coin"></img>
          <img src={spring} alt="outline" className="form-img spring"></img>
          <img src={rocket} alt="outline" className="form-img rocket"></img>
          <img src={cloud} alt="outline" className="form-img cloud"></img>
          <img src={stars} alt="outline" className="form-img stars"></img>
        </div>
      </div>
      <div className={`col col-2`}>
        {action === "Sign Up" && (
          <div className="login-form">
            <div className="btn-box">
              <div
                className={
                  action === "Sign In" ? "btn btn-1" : "btn btn-1 color"
                }
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign In
              </div>
              <div
                className={
                  action === "Sign Up" ? "btn btn-2" : "btn btn-2 color"
                }
                onClick={() => {
                  setAction("Sign In");
                }}
              >
                Sign Up
              </div>
            </div>
            <div className="form-title">
              <span>Sign In</span>
            </div>
            <div className="social-login">
              <i className="bx bxl-google"></i>
              <i className="bx bxl-facebook"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-github"></i>
            </div>
            <div className="form-inputs">
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Username"
                  required
                />
                <i className="bx bx-user icon"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  required
                />
                <i className="bx bx-lock-alt icon"></i>
              </div>
              <div className="forgot-pass">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="input-box">
                <button className="input-submit">
                  <span>Log In</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {action === "Sign In" && (
          <div className="register-form">
            <div className="btn-box">
              <div
                className={
                  action === "Sign In" ? "btn btn-1" : "btn btn-1 color"
                }
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign In
              </div>
              <div
                className={
                  action === "Sign Up" ? "btn btn-2" : "btn btn-2 color"
                }
                onClick={() => {
                  setAction("Sign In");
                }}
              >
                Sign Up
              </div>
            </div>
            <div className="form-title">
              <span>Create Account</span>
            </div>
            <div className="social-login">
              <i className="bx bxl-google"></i>
              <i className="bx bxl-facebook"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-github"></i>
            </div>
            <div className="form-inputs">
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Username"
                  required
                />
                <i className="bx bx-user icon"></i>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email"
                  required
                />
                <i className="bx bx-user icon"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  required
                />
                <i className="bx bx-lock-alt icon"></i>
              </div>
              <div className="input-box">
                <button className="input-submit">
                  <span>Sign Up</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

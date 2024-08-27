import React from "react";
import Arrow from "./../assests/Arrow.png";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const goToStudentDashboard = () => {
    navigate("/dashboard")
  }
  return (
    <>
      <Navbar />
      <div className="Hero container">
        <div className="Hero-text">
          <div>
            <h1>
              Tell me and I forget, teach me and I may remember, involve me and
              I learn{" "}
            </h1>
            {/* <p>In every successful student, there is a mentor  who believed in them. Together,  */}
            {/* they forge a path where knowledge, guidance, and inspiration intersect  */}
            {/* to create a future filled with possibilities.</p> */}
            <button className="btn">
              Explore-more <img src={Arrow} alt="" />
            </button>
          </div>

          <div className="wrapper">
            <form action="">
              <p className="form-login"></p>
              <div className="input-box">
                <input required="" placeholder="Username" type="text" />
              </div>
              <div className="input-box">
                <input required="" placeholder="Password" type="password" />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot Password</a>
              </div>
              <button onClick={goToStudentDashboard} className="btn" type="submit">
                Login
              </button>
              <div className="register-link">
                <p>
                  Dont have an account?  <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

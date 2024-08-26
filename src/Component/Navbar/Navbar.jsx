import React from "react";
import "./Navbar.css";
import logo from "../../assests/logo (1).png";
// import { Link } from "react-scroll";
import { NavLink ,Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container dark-nav">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <Link to="/" smooth={true} offset={0} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="SIGN UP" smooth={true} offset={0} duration={500}>
            SIGN UP
          </Link>
        </li>
        <Link to={"/login"}>LOGIN</Link>
        {/* <li><Link to ='/login' smooth={true} offset={0} duration={500}></Link></li> */}
        <li>
          <Link to="/about" smooth={true} offset={-260} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router";
import imgLogo from "../../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="app">App</NavLink>
            </li>
            <li>
              <NavLink to="installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img src={imgLogo} alt="" className="w-10 h-10" />
          <Link to="/" className="text-2xl text-[#632EE3] font-semibold">
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-xl items-center">
          <li className="hover:text-[#9F62F2] hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-[#9F62F2] hover:underline">
            <NavLink to="/app">App</NavLink>
          </li>
          <li className="hover:text-[#9F62F2] hover:underline">
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/SumaiyaNishat"
          target="_blank"
          rel=""
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;

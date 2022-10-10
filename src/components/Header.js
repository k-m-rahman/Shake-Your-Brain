import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src={logo}
          className=" h-12 sm:h-12 mr-1  "
          alt="brain light logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <span className="text-3xl">S</span>hake Your Brain
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink
          className={({ isActive }) =>
            !isActive
              ? "bg-teal-200 p-2 rounded-lg"
              : "bg-teal-400 p-2 rounded-lg"
          }
          to="topics"
        >
          Topics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            !isActive
              ? "bg-teal-200 p-2 rounded-lg"
              : "bg-teal-400 p-2 rounded-lg"
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            !isActive
              ? "bg-teal-200 p-2 rounded-lg"
              : "bg-teal-400 p-2 rounded-lg"
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

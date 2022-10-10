import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="shadow-md ">
      <Navbar fluid={true} rounded={true}>
        <NavLink className={"flex"} to="/">
          <img
            src={logo}
            className=" h-12 sm:h-12 mr-1  "
            alt="brain light logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <span className="text-3xl">S</span>hake Your Brain
          </span>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-teal-200 p-2 rounded-lg hover:bg-teal-300 sm:hover:scale-110 mb-1"
                : "bg-teal-400 p-2 rounded-lg hover:scale-110 mb-1"
            }
            to="topics"
          >
            Topics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-teal-200 p-2 rounded-lg hover:bg-teal-300 sm:hover:scale-110 mb-1"
                : "bg-teal-400 p-2 rounded-lg hover:scale-110 mb-1"
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-teal-200 p-2 rounded-lg hover:bg-teal-300 sm:hover:scale-110 mb-1"
                : "bg-teal-400 p-2 rounded-lg hover:scale-110 mb-1"
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

//import React, { useState } from "react";

//import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
function NewNav() {
  /* const [nav, setnav] = useState(false);
  const changeBackround = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackround); */

  let textStyle = " text-sm font-bold ";

  let scrollNav =
    "w-full h -[100px] fixed flex justify-center items-center duration-100 ease-in-out z-[2]";
  return (
    <div className={scrollNav}>
      <div className="w-[80%] h-[100px] bg-black flex justify-between items-center  px-5 md:px-8">
        <div className="w-[100px] flex justify-center items-center  rounded-md shadow-xl">
          <NavLink to="/" className="logo">
            <img src={logo} alt="" className="object-cover overflow-hidden" />
          </NavLink>
        </div>
        <div className=" w-[50%] flex  justify-between items-center md:w-[15%]">
          <NavLink to="/" className={textStyle}>
            {({ isActive }) => (
              <li
                className={[
                  "text-sm  list-none cursor-pointer font-semibold hover:text-gray-100",
                  !isActive ? "text-gray-400" : "text-gray-100",
                ].join(" ")}
              >
                Home
              </li>
            )}
          </NavLink>
          <NavLink to={"/games"} className={textStyle}>
            {({ isActive }) => (
              <li
                className={[
                  "text-sm list-none cursor-pointer font-semibold hover:text-gray-100",
                  !isActive ? "text-gray-400" : "text-gray-100",
                ].join(" ")}
              >
                Games
              </li>
            )}
          </NavLink>

          {/*  <NavLink to={"/about"} className={textStyle}>
            {({ isActive }) => (
              <li
                className={[
                  "text-sm list-none font-semibold hover:text-gray-100",
                  !isActive ? "text-gray-400" : "text-gray-100",
                ].join(" ")}
              >
                About Us
              </li>
            )}
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default NewNav;

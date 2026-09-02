import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/index.js";
import {  menu, close } from "../assets";
import logo from "../assets/logo_k1.svg"
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kishore Kumar B&nbsp;
            <span className="sm:block hidden">|&nbsp;Front End Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((i) => (
            <li
              key={i.title}
              className={`${
                active === i.title ? "text-white" : "text-secondary"
              }hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(i.title)}
            >
              <a href={`#${i.id}`}>{i.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></img>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-2 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((i) => (
                <li
                  key={i.title}
                  className={`${
                    active === i.title ? "text-white" : "text-secondary"
                  }font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(i.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${i.id}`}>{i.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

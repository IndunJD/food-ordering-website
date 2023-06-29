/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="food" className="h-[64px]" />

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-raleway font-normal cursor-pointer text-[16] text-whiteish m-5`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button className="font-raleway uppercase sm:flex hidden bg-gradient-to-r from-primary to-secondary text-whiteish text-sm font-semibold py-2 px-6 rounded-lg cursor-pointer">
        Sign In
      </button>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[320px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-raleway font-normal cursor-pointer text-[16] text-whiteish m-5`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <button className="font-raleway uppercase flex flex-col bg-gradient-to-r from-primary to-secondary text-whiteish text-sm font-semibold py-2 px-6 rounded-lg cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

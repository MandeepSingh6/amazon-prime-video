import React, { useState } from "react";
import { SiPrimevideo } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

const Navbar = () => {
  const [dropdown, SetDropdown] = useState(false);
  function handleClick() {
    SetDropdown((prev) => !prev);
  }
  return (
    <div className="">
      <div className="w-screen h-12 text-white flex justify-between items-center relative">
        <ul className=" flex items-center justify-between gap-4 text-[.7rem] pl-4 ">
          <li className="">
            <SiPrimevideo size={90} className="translate-y-1.5" />
          </li>
          <div className="hidden md:flex items-center justify-between gap-4 text-[.7rem] pl-4">
            <li>Home</li>
            <li>Store</li>
            <li>Channels</li>
            <li>Categories</li>
            <li>My Stuff</li>
          </div>
        </ul>
        <ul className="flex gap-4 text-[.85rem] items-center pr-4 ">
          <li className="text-[.7rem] md:hidden">
            <p className="flex items-center justify-center">
              <span className="cursor-pointer" onClick={handleClick}>
                Browse
              </span>
              <span className="ml-2 cursor-pointer" onClick={handleClick}>
                {dropdown ? (
                  <BiUpArrow className="duration-300" />
                ) : (
                  <BiUpArrow className="rotate-180 duration-300" />
                )}
              </span>
            </p>

            {dropdown && (
              <ul className="text-xs flex flex-col absolute -bottom-1 left-0 translate-y-[100%] z-30 w-full bg-[#1b242f] ">
                <li className="border-b-[.1px] border-gray-500 p-2">Home</li>
                <li className="border-b-[.1px] border-gray-500 p-2">Store</li>
                <li className="border-b-[.1px] border-gray-500 p-2">
                  Channels
                </li>
                <li className="border-b-[.1px] border-gray-500 p-2">
                  Categories
                </li>
                <li className="p-2">My Stuff</li>
              </ul>
            )}
          </li>
          <li>
            <button className="bg-[#1399DE] text-[.7rem] hover:bg-[rgb(92,173,213)] p-[.3rem] rounded-sm duration-300">
              Try for free
            </button>
          </li>
          <li>
            <GoSearch className="" />
          </li>
          <li className="flex items-center justify-between">
            <BsGlobe className="" />
            <span className="pl-1">EN</span>
          </li>
          <li>
            <CgProfile className="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

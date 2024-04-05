import React from "react";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" h-14 shadow-md bg-white">
      <div className="h-full flex items-center px-4 container mx-auto justify-between">
        <div className="">
         <Link to={"/"}>
         <Logo w={100} h={70} />
         </Link>
        </div>
        <div className=" hidden lg:flex md:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search anything.."
            className=" w-full outline-none "
          />
          <div className="text-lg text-white min-w-[50px] h-8 bg-blue-400 flex items-center justify-center rounded-r-full">
            <FaSearch />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-3xl cursor-pointer">
            <FaUserCircle />
          </div>
          <div className="text-2xl relative">
            <span>
              <FaCartShopping />
            </span>
            <div className=" bg-blue-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className=" text-sm">0</p>
            </div>
          </div>
          <div>
            <button className="px-3 py-1 rounded-full text-white bg-blue-400 hover:bg-blue-700">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { FaGithub } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bg my-2 rounded-lg h-12 py-2 px-6  shadow-2xl">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link to={"/"}>
            <TbWorldSearch className="size-7 text-[#bfc0c0ff]" />
          </Link>
        </div>

        <ul className="flex text-white font-bold text-md space-x-2 sm:space-x-6">
          <Link to={"/"} className="hover:bg-[#416165] rounded text-[#D9DBF1]">
            <li className="m-1 mx-2 cursor-pointer ">Home</li>
          </Link>
          <Link
            to={"/about"}
            className="hover:bg-[#416165] rounded text-[#D9DBF1]"
          >
            <li className="m-1 mx-2 cursor-pointer">About</li>
          </Link>
          <Link
            to={"/contact"}
            className="hover:bg-[#416165] rounded text-[#D9DBF1]"
          >
            <li className=" m-1 mx-2 cursor-pointer">Contact</li>
          </Link>
        </ul>

        <div>
          <Link to={"https://github.com/Amit4218"} target="_blank">
            <FaGithub className="size-7 text-[#bfc0c0ff]" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

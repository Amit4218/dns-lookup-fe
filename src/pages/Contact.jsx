import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Contact() {
  return (
    <main className="grid h-[87vh]  place-items-center bg-gray-900 px-6  lg:px-8 rounded">
      <div className="text-center">
        <div className="mb-4 font-semibold tracking-tight text-balance text-white sm:text-5xl ">
          Contact Me!
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="mailto:amitbhagat621@gmail.com" target="_blank">
            <MdOutlineMailOutline size={"20"} color="#D9DBF1" />
          </a>
          <Link
            to={"mailto:amitbhagat621@gmail.com"}
            className="text-md font-medium text-pretty text-gray-400 "
            target="_blank"
          >
            amitbhagat621@gmail.com
          </Link>
        </div>
        <br />
        <div className="flex justify-center items-center gap-4 ">
          <div className="">
            <Link
              to="https://github.com/Amit4218"
              className="text-gray-700 hover:text-gray-600"
              target="_blank"
            >
              <FaGithub size={"25"} color="#D9DBF1" />
            </Link>
          </div>
          <div>{"|"}</div>
          <div className="">
            <Link
              to="https://www.linkedin.com/in/amit-bhagat-109a7a2b2/"
              className="text-gray-700 hover:text-gray-600 text-xl"
              target="_blank"
            >
              <IoLogoLinkedin size={"30"} color="#D9DBF1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;

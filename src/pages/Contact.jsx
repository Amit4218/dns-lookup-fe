import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="grid h-[88vh]  place-items-center bg-gray-900 px-6  lg:px-8 rounded">
      <div className="text-center">
        <h6 className="mb-4 text-xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Contact Me!
        </h6>
        <Link
          to={"mailto:amitbhagat621@gmail.com"}
          className="text-md font-medium text-pretty text-gray-400 "
        >
          Email: amitbhagat621@gmail.com
        </Link>
        <br />
        <div className="flex justify-center items-center gap-4 mt-3">
          <div className="">
            <Link
              to="https://github.com/Amit4218"
              className="text-gray-700 hover:text-gray-600"
            >
              Github
            </Link>
          </div>
          <div>{"|"}</div>
          <div className="">
            <Link
              to="https://www.linkedin.com/in/amit-bhagat-109a7a2b2/"
              className="text-gray-700 hover:text-gray-600"
            >
              Linked In
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/about"
            className="rounded-md bg-[#0B3948] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#416165] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            About me
          </Link>
          <Link
            to="/"
            className="rounded-md bg-[#0B3948] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#416165] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Contact;

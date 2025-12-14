import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="grid h-[87vh]  place-items-center bg-gray-900 px-6  lg:px-8 rounded">
      <div className="text-center">
        <h4 className=" text-3xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Hi !
        </h4>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          My name is Amit Bhagat.
        </p>
        <span className="text-gray-700 hover:text-gray-600">
          I am from India, and I'm currently in my 3rd year of college. I like
          building web-based projects like this.
        </span>
        <br />
        <span className="text-gray-700 hover:text-gray-600">
          If any of this interests you! You can
        </span>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/contact"
            className="rounded-md bg-[#0B3948] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#416165] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Contact Me here!
          </Link>
        </div>
      </div>
    </main>
  );
}

export default About;

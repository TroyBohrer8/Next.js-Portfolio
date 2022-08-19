import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-red-500">Troy Bohrer</h1>
          <h1 className="py-2 text-gray-700">Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a coding bootcamp graduate speicalizing in full stack web
            development. Currently, I'm focused on building MERN stack
            applications but I'm also familiar with Python, mySQL, and AWS.
          </p>
          {/* Socials */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="http://www.linkedin.com/in/troy-bohrer">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/TroyBohrer8">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/troy-bohrer">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

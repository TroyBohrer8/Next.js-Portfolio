import React from "react";
import Image from "next/image";
import Link from "next/link";
import randomPasswordImg from "../public/assets/projects/RandomPassword.png";

function project1() {
  return (
    // Container
    <div className="w-full">
      {/* Navbar Area */}
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        {/* Image Container */}
        <div className="absolute top-0 left-0 w-full h-full  bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={randomPasswordImg}
          alt="/"
        />
        {/* Text */}
        <div className="absolute top-[60%] max-w-[1240px] w-full translate-x-5 translate-y-5 text-white z-10 p-2 ">
          <h2>Random Password Generator</h2>
          <h3>Javascript</h3>
        </div>
      </div>
      {/* Overview Container */}
      <div className="max-w-[1240px] mx-auto p-2 md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>blah</p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        {/* Technologies Card */}
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl pt-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div>
              <p className="text-gray-600 py-2 items-center">React</p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default project1;

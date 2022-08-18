import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2>What I Know</h2>
        {/* Container */}
        <div className="grid pt-6 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Front End */}
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <h2 className="">Front End</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          {/* Back End */}
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <h2 className="">Back End</h2>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Next.js</li>
                <li>MongoDB</li>
                <li>Auth</li>
                <li>Server Side Rendering</li>
              </ul>
            </div>
          </div>
          {/* Other */}
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <h2 className="">Other</h2>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Visual Studio Code</li>
                <li>NPM</li>
                <li>Heroku</li>
                <li>API's</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-500">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            Hey there👋 thanks for visiting my portfolio! My name is Troy and
            I'm an aspiring software developer. I graduated from the Coding
            Bootcamp at Johns Hopkins University and have been learning software
            development for over a year now. Since graduating the bootcamp in
            November 2021, I've been practicing my new skills by building real
            world projects and expanding my knowledge on new technologies
            through Youtube and other free online resources(FreeCodeCamp,
            Harvard's CS50, etc.).
          </p>
          <p className="py-2 text-gray-600">
            I'm a great communicator and determined to learn. My goal is to
            break into tech and start my new career in software development
            working on real life problems. When I'm not learning how to code, I enjoy going to the gym 
            and hanging out with my girlfriend and our dog, Ozzy. We like going snowboarding, sushi dates, and 
            travelling to new places.
          </p>
        </div>
        <div>
          <Image
            src="/../public/assets/troybohrer.png"
            alt="Troy Bohrer profile picture"
            width="300"
            height="350"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

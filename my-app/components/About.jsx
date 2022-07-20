import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <h2>Who I am</h2>
          <p>// I am not your normal developer</p>
          <p>
            When I graduated high school in 2014, I didn't know what I wanted to
            do. I could've gone to college, but coming from a family with very
            little money, I chose to join the workforce to support myself. I
            worked as an Installer for a material handling company from
            2015-2020 travelling around the Mid-Atlantic area doing
            installations in various types of warehouses/distribution centers.
            That was until in 2019 when I was in a serious workplace accident
            and could no longer continue doing manual labor work.
          </p>
          <p>
            In May of 2021, I spontaniously enrolled in a The Coding Bootcamp at
            Johns Hopkins University. I quickly became drawn to the idea of
            creating my own websites and the technologies used to make them
            interactive. Now after graduating from the bootcamp, I've been
            broadening my knowledge by creating new projects and learning new
            skills.
          </p>
          <p>Check out some of my latest projects</p>
        </div>
        <div>
          <Image
            src="/../public/assets/troybohrer.png"
            alt="Troy Bohre profile picture"
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

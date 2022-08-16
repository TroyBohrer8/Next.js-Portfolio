import React from "react";
import ProjectItem from "../components/ProjectItem";
import randomPasswordImg from "../public/assets/projects/RandomPassword.png";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-gray-600">
          Projects
        </p>
        <h2>What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project One */}
          <ProjectItem
            title="Random Password Generator"
            backgroundImg={randomPasswordImg}
            projectUrl="https://troybohrer8.github.io/Random-Password-Generator/"
          />
          {/* Project Two */}
          <ProjectItem
            title="Random Password Generator"
            backgroundImg={randomPasswordImg}
            projectUrl=""
          />
          {/* Project Three */}
          <ProjectItem
            title="Random Password Generator"
            backgroundImg={randomPasswordImg}
            projectUrl=""
          />
          {/* Project Four */}
          <ProjectItem
            title="Random Password Generator"
            backgroundImg={randomPasswordImg}
            projectUrl=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

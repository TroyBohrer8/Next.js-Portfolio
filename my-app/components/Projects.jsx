import React from "react";
import ProjectCard from "./ProjectCard";
import randomPasswordImg from "../public/assets/projects/RandomPassword.png";
import spaceXCloneImg from "../public/assets/projects/spaceXClone.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-red-500">
          Projects
        </p>
        <h2>What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project One */}
          <ProjectCard
            title="Random Password Generator"
            backgroundImg={randomPasswordImg}
            tech="HTML, CSS, Javascript"
            projectUrl="/project1"
          />
          {/* Project Two */}
          <ProjectCard
            title="SpaceX Clone"
            backgroundImg={spaceXCloneImg}
            tech="HTML, CSS, Javascript"
            projectUrl="/project2"
          />
          {/* Project Three */}
          <ProjectCard
            title="Random Password Generator"
            backgroundImg={randomPasswordImg}
            projectUrl=""
          />
          {/* Project Four */}
          <ProjectCard
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

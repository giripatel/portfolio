import React from "react";
import ProjectModel from "./ProjectModel";

const Project = () => {
  return (
    <section id="project">
      <div className="text-white font-semibold text-2xl p-5 w-full flex justify-center">Projects</div>
      <div className=" w-full flex justify-center p-5">
        <div className="md:grid-cols-2 grid gap-5 lg:gap-8 gap-x-3 px-2">
          <ProjectModel />
          <ProjectModel />
          <ProjectModel />
          <ProjectModel />
        </div>
      </div>
    </section>
  );
};

export default Project;

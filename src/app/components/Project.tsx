import React from "react";
import ProjectModel from "./ProjectModel";
import { getProjects } from "../actions/projects";

const Project = () => {

  const projects = getProjects();

  return (
    <section id="project">
      <div className="text-white font-semibold text-2xl p-5 w-full flex justify-center"></div>
      <div className="w-full flex justify-center  text-white p-4 mt-3 font-bold text-2xl">
        <span className="text-yellow-500 pr-1">Projects</span> :
        <span className="text-red-400 pl-1">Endeavors</span>
      </div>
      <div className=" w-full flex justify-center p-5 mb-5">
        <div className="md:grid-cols-2 grid gap-y-6 lg:gap-8 px-2">

          {projects?.map((project, index) => <div key={index}> <ProjectModel project={project}/> </div>)}

        </div>
      </div>
    </section>
  );
};

export default Project;

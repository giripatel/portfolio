import React from "react";
import ProjectModel from "./ProjectModel";
import { getProjects } from "../actions/projects";

const Project = () => {

  const projects = getProjects();

  return (
    <section id="project">
      <div className="text-white font-semibold text-2xl p-5 w-full flex justify-center">Projects</div>
      <div className=" w-full flex justify-center p-5 mb-5">
        <div className="md:grid-cols-2 grid gap-8 lg:gap-8 px-2">

          {projects?.map(project => <ProjectModel project={project}/>)}

        </div>
      </div>
    </section>
  );
};

export default Project;

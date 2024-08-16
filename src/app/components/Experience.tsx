import React from "react";
import ExperienceModel from "./ExperienceModel";
import { getExperience } from "../actions/experience";

const Experience = () => {
  const experiences = getExperience();

  return (
    <section id="experience">
      <div className="w-full flex justify-center  text-white p-4 mt-3 font-bold text-2xl">
        <span className="text-yellow-500 pr-1">Work</span> :
        <span className="text-red-400 pl-1">Experience</span>
      </div>
      <div className="w-full flex justify-center mt-5">
        <div className="flex justify-center flex-col gap-y-16">
          {experiences?.map((exp: any) => (
            <ExperienceModel exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

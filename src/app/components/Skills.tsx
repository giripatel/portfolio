import React from "react";
import { getSkills } from "../actions/skills";
import SkillsModel from "./SkillsModel";

const Skills = () => {
  const skills = getSkills();

  return (
    <section id="skills">
      <div className="text-white text-2xl font-semibold w-full flex justify-center my-3 pb-3"><span>Skills </span> : <span> Ability</span></div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-y-5 font-semibold">
          <div className="flex gap-x-4 md:gap-x-6">
            {skills.languages.map((skill,index) => {
              
              return <div key={index}>
                <SkillsModel skill={skill} />
              </div>
            })}
          </div>
          <div className="flex gap-x-4">
            {skills.databases.map((skill,index) => {
              return <div key={index}>
              <SkillsModel skill={skill} />
            </div>
            })}
          </div>

          <div className="flex gap-x-3">
            {skills.devops.map((skill, index) => {
              return <div key={index}>
              <SkillsModel skill={skill} />
            </div>
            })}
          </div>
          <div className="flex gap-x-3">
            {skills.frameworks.map((skill,index) => {
              return <div key={index}>
              <SkillsModel skill={skill} />
            </div>
            })}
          </div>
          <div className="flex gap-x-3">
            {skills.messageBrokers.map((skill,index) => {
              return <div key={index}>
              <SkillsModel skill={skill} />
            </div>
            })}
          </div>
          <div>
            <SkillsModel skill={"& More"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

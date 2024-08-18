import React from "react";

const SkillsModel = ({ skill }: { skill: string }) => {
  return (
    <div>
      <div className="relative broder-[1px] border-orange-500">
        <div className="absolute -inset-0 rounded-lg bg-gradient-to-r border border-orange-500 from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"></div>
        <div className="relative flex h-10 w-fit px-6 border border-orange-500 items-center justify-center rounded-lg bg-slate-900 text-slate-300">
          {skill}
        </div>
      </div>
    </div>
  );
};

export default SkillsModel;

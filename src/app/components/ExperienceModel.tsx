import React from "react";

const ExperienceModel = ({exp}: {exp : any}) => {
  
  return (
    <>
    <div className="relative w-80 sm:w-[38rem] xl:w-[55rem] lg:h-fit group">
    <div
    className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-50 blur group-hover:opacity-75 transition duration-200 animate-tilt"
  ></div>
    <div className="rounded-lg  bg-zinc-900  shadow-2xl  backdrop-blur-sm px-3  border border-orange-600 font-mono">
        <div className="text-zinc-300 p-3">
          <div className="flex md:justify-end text-sm lg:text-base py-3">
            <p className="text-yellow-600 ">
              {exp.country} <span className="text-gray-300"> | </span><span className="">{exp.duration.from} - {exp.duration.to}</span>
            </p>
          </div>
          <p className="text-2xl font-semibold text-indigo-200">{exp.company}</p>
          <p className="text-xl font-semibold py-1 text-orange-400">{exp.role}</p>
          <div className="pt-1 text-md text-gray-300">
            <ul className={"list-disc list-inside"}>
              {exp.summary.map((s:any,index: any) => <li key={index}>{s}</li>)}
            </ul>
          </div>
          <div className="flex gap-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            <div className="w-96 md:w-[36rem] flex-wrap flex">
            {exp.tech.map((skill: any, index: any) => <div className="text-teal-500 text-nowrap grid-cols-1">{skill}{exp.tech.length -1 !== index? ", ": ""}</div>)}
          </div>
          </div>
        </div>
      </div>
  </div>
    </>
  );
};

export default ExperienceModel;

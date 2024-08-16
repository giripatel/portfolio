import React from "react";

const ExperienceModel = () => {
  return (
    <>
    <div className="relative w-80 sm:w-[38rem] xl:w-[55rem] lg:h-fit">
  <div
    className="absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"
  ></div>
  <div
    className="relative flex h-fit w-fit items-center justify-center rounded-lg bg-slate-900 text-slate-300"
  >
    <div className=" rounded-lg  bg-zinc-800 border-[#d9defc33] shadow-2xl  backdrop-blur-sm px-3 backdrop-brightness-105 z-30 bg-opacity-30 border font-mono">
        <div className="text-zinc-300 p-3">
          <div className="flex justify-end">
            <p className="text-yellow-600 ">
              India <span className="text-gray-300"> | </span><span className="">January 2023 - Present</span>
            </p>
          </div>
          <p className="text-2xl font-semibold text-indigo-200">ENH I Secure</p>
          <p className="text-xl font-semibold py-1 text-orange-400">Full Stack Developer</p>
          <div className="pt-1 text-md text-gray-300">
            <ul className={"list-disc list-inside"}>
              <li>
                Contributed to the end-to-end development of scalable web
                applications, resulting in a 30% increase in user engagement and
                a 20% reduction in server response time.
              </li>
              <li>
                Optimized backend processes, reducing database query times by
                40%, contributing to a more seamless user experience.
              </li>
              <li>
                Developed and integrated secure authentication protocols,
                improving data security and reducing unauthorized access
                incidents by 50%.
              </li>
              <li>
                Utilized monorepo architecture to streamline codebase
                management, reducing deployment times by 25% and enhancing team
                collaboration efficiency.
              </li>
            </ul>
          </div>
          <div className="flex gap-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>

            <p className="text-teal-500">React</p>
          </div>
        </div>
      </div>
      </div>

  </div>
    </>
  );
};

export default ExperienceModel;

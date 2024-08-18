import Link from "next/link";
import React from "react";

const ProjectModel = ({ project }: { project: any }) => {
  return (
    <div className="relative lg:w-[30rem] w-[21rem] h-64 col-span-1 rounded-md group">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500  to-orange-600 blur-md rounded-sm opacity-60 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative lg:w-[30rem] w-[21rem] h-64 col-span-1 bg-zinc-900 rounded-md border-[1px] border-red-300 font-mono pb-4">
        <div className="w-full flex justify-between p-1">
          <div className="text-gray-300 font-semibold p-2">Giridhar</div>
          <div className="rounded-full w-12  p-3 cursor-pointer ">
            <Link href={project.githubLink} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DC6B19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="text-white px-4 ">
          <div className="text-2xl font-semibold text-yellow-500">
            {project.title}
          </div>
          <div className="text-xl pt-2 text-violet-200">{project.tagLine}</div>
          <div className="mt-5 flex">
            <div className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="w-96 md:w-[36rem] flex-wrap flex">
              {project.tech.map((skill: any, index: any) => (
                <div
                  key={index}
                  className="text-emerald-300 text-nowrap grid-cols-1"
                >
                  {skill}
                  {project.tech.length - 1 !== index ? ", " : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModel;

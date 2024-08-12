import React from "react";
import { FlipWords } from "./ui/filp-words";

export function FlipWordsModel() {
  const words = ["Full Stack Developer", "Software Engineer", "DevOps Evangelist", "Software Developer"];

  return (
    // <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="relative mx-auto text-5xl font-bold ">
        <FlipWords className="absolute bg-gradient-to-tr from-[#e17731] to-[#ed5332] text-transparent bg-clip-text" words={words} />
      </div>
    // {/* </div> */}
  );
}

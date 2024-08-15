import React from "react";
import { getIntroduction } from "../actions/intorduction";
import SVG_1 from "../../../public/asset 17.svg"
import Image from "next/image";

const Intro = () => {
  const intro = getIntroduction();
  return (
    <div className="w-full min-h-screen">
      <div className="sm:w-full md:w-full flex justify-center">
        <div className="lg:w-[70%] xl:w-[49%] md:w-[33rem] sm:w-[28rem] md:text-lg sm:pt-5 w-fit ps-14 sm:p-0 md:ps-9 lg:pt-10 xl:pt-0  pe-4 text-gray-200 font-mono text-sm">
          {intro}{" "} 
          <span className="md:text-xl bg-gradient-to-tr from-[#e78341] to-[#d12e09] text-transparent bg-clip-text">
            {" "}
            Let’s build something extraordinary together.
          </span>
        </div>
      </div>  

      <div className="relative">
        <div className="relative bg-[#F87216] -top-36 md:-top-32 lg:-top-[5.5rem] xl:-top-20 w-[2px] h-48 md:h-52 lg:h-44 xl:h-40 left-8 z-10">
          <div className="absolute inset-0 bg-[#F87216] blur-sm "></div>
          <div className="bg-[#F87216] relative"></div>
        </div>
        <div className="relative bg-[#F87216] w-40 sm:w-72 md:w-[22rem] lg:w-[32.5rem] xl:w-[35rem] -top-36 md:-top-32 lg:-top-[5.5rem] xl:-top-20 h-[2px] left-8 z-10">
          <div className="absolute inset-0 bg-[#F87216] blur-sm "></div>
          <div className="bg-[#F87216] relative"></div>
        </div>
        <div className="absolute w-14 left-44 sm:left-[18.2rem] md:left-[22rem] lg:left-[32.8rem] xl:left-[35rem] md:top-12 lg:top-[3.7rem] xl:top-[3.2rem] top-5 z-20">
              <Image src={SVG_1} alt="quote" />
            </div>
        <div className="relative bg-[#F87216] w-[2px] h-32 left-[12.7rem] sm:left-[20rem] md:left-[23.7rem] lg:left-[34.5rem] xl:left-[36.9rem] -top-36 md:-top-32 lg:-top-[5.5rem] xl:-top-20 z-10">
          <div className="absolute inset-0 bg-[#F87216] blur-sm "></div>
          <div className="bg-[#F87216] relative"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

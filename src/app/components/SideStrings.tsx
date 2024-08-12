"use client";
import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SVG1 from "../../../public/asset 0.svg";
import SVG2 from "../../../public/asset 1.svg";
import Image from "next/image";

const SideStrings = () => {
  const width = useWindowDimensions();
  return (
    <div>
      <div className="absolute flex justify-between w-full top-48">
        {width > 750 ? (
          <div className="flex  w-full justify-between">
            <Image src={SVG1} alt="svg1" /> 
            <Image src={SVG2} alt="svg1" />
          </div>
        ) : (
            <Image className="absolute right-0" src={SVG2} alt="svg1" />
        )}
      </div>
    </div>
  );
};

export default SideStrings;

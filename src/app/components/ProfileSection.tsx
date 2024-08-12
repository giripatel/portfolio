"use client"

import Image from "next/image";
import React from "react";
import SVG_PIN from "../../../public/asset 5.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { FlipWords } from "./ui/filp-words";
import { FlipWordsModel } from "./FilpWordsModel";


const ProfileSection = () => {


  return (
    <section>
      <div className="flex w-full md:justify-center">
        <div className="flex ">
          <div className="flex relative sm:left-36 top-10 md:top-32">
            <div className="relative w-8 -top-4 left-4 sm:left-[2.4rem] z-10">
              <Image src={SVG_PIN} alt="ball" />
            </div>
            <div className="relative bg-[#F87216] w-[2px] min-h-screen">
              <div className="absolute inset-0 bg-[#F87216] blur-sm "></div>
              <div className="bg-[#F87216] h-full relative"></div>
            </div>
            {/* <div className="relative mx-6 bg-[#F87216] w-[2px] min-h-screen">
              <div className="absolute inset-0 bg-[#F87216] blur-sm "></div>
              <div className="bg-[#F87216] h-full relative"></div>
            </div> */}
          </div>
          {/* </div> */}
          <div className="w-full md:mx-24 md:pt-10 flex flex-col sm:flex-row z-20">
            <div className="pt-44 ps-6 md:ps-20 ">
              <p className="text-lg font-bold text-white">Hello,</p>
              <p className="text-5xl font-bold text-slate-50">Giridhar Nasam</p>
              <FlipWordsModel  />
              {/* <p className="text-4xl font-bold bg-gradient-to-tr from-[#f87216] to-[#ed5332] text-transparent bg-clip-text">Full Stack Developer </p> */}
            </div>
            {/* <div className="z-30 pe-8 w-96 rounded-sm bg-yellow-400">
              <img
                className="rounded-md"
                src="https://cloud.appwrite.io/v1/storage/buckets/66ba286300378c0dc13e/files/66ba288d0014f948c1e4/view?project=656f77824f9395e906e9&mode=admin"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

import Image from "next/image";
import React from "react";
import SVG_PIN from "../../../public/asset 5.svg";
const ProfileSection = () => {
  return (
    <section>
      <div className="flex">
        {/* <div className="flex"> */}
          <div className=" flex relative left-36 top-32">
            <div className="relative -top-4 left-[2.4rem] z-10">
              <Image src={SVG_PIN} alt="ball" />
            </div>
            <div className="relative mx-6 bg-[#F87216] w-[2px] min-h-screen">
              <div className="absolute inset-0 bg-[#F87216] blur-sm "></div>
              <div className="bg-[#F87216] h-full relative"></div>
            </div>
          </div>
        {/* </div> */}
        <div className=" w-full mx-24 pt-10 flex justify-between">
            <div className="pt-44 ps-20 ">
                <p className="text-lg font-bold text-white">Hello,</p>
                <p className="text-5xl font-bold text-slate-50">Giridhar Nasam</p>
                <p className="text-4xl font-bold bg-gradient-to-tr from-[#e17731] to-[#ed5332] text-transparent bg-clip-text">Full Stack Developer </p>
                {/* <p className="text-4xl font-bold bg-gradient-to-tr from-[#f87216] to-[#ed5332] text-transparent bg-clip-text">Full Stack Developer </p> */}
            </div>
          <div className="z-30 pe-8">
            <img src="http://via.placeholder.com/500x400" alt="" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ProfileSection;

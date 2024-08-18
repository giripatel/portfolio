"use client"
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Appbar = () => {
  
  const width = useWindowDimensions();
  
  return (
    <div className="bg-neutral-950 flex justify-center items-center gap-x-9 font-semibold w-full h-20">
      <div className="flex gap-x-9 w-96 rounded-xl p-5 justify-center">
        <Link href={"#"} className="text-slate-50 hover:cursor-pointer">/</Link>
        <Link href={"#experience"} className="text-slate-50 hover:cursor-pointer">work</Link>
        <Link href={"#project"} className="text-slate-50 hover:cursor-pointer">projects</Link>
      </div>
      <div className="absolute top-4 right-2 md:right-10">
      <Link href={"./Giridhar_Nasam_Resume.pdf"} target='_blank' rel={"noopener noreferrer"}>

      <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e78341] to-[#d12e09] shadow shadow-orange-600 rounded-full sm:rounded-lg" />
      <div className="sm:px-10 sm:py-2 p-2  bg-zinc-900 rounded-full sm:rounded-lg md:rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {width > 640 ? "Resume" : "CV"}
      </div>
    </button>
    </Link>
      </div>
    </div>
  );
};

export default Appbar;

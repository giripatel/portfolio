"use client"
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { motion } from "framer-motion";
const Appbar = () => {
  
  const width = useWindowDimensions() || 0;
  
  return (
    <div className="bg-neutral-950 flex justify-center items-center gap-x-9 font-semibold w-full h-20">
      <div className="flex gap-x-9 w-96 rounded-xl p-3 justify-center hover:bg-neutral-600 transition duration-500 hover:duration-300 hover:bg-opacity-20 hover:backdrop-blur-sm">
        <Link href={"#"} className="text-slate-50 hover:cursor-pointer font-semibold hover:text-[#e78341] transition duration-300 text-center ">/</Link>
        <Link href={"#experience"} className="text-slate-50 hover:cursor-pointer font-semibold hover:text-[#e78341] transition duration-300">work</Link>
        <Link href={"#project"} className="text-slate-50 hover:cursor-pointer font-semibold hover:text-[#e78341] transition duration-300">projects</Link>
      </div>
      <motion.div whileTap={{scale: 0.8}} className="absolute top-4 right-2 md:right-10">
      <Link href={"./Giridhar_Nasam_Resume.pdf"} target='_blank' rel={"noopener noreferrer"}>

      <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e78341] to-[#d12e09] shadow shadow-orange-600 rounded-full sm:rounded-lg" />
      <div className="sm:px-10 sm:py-2 p-2  bg-zinc-900 rounded-full sm:rounded-lg md:rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {width > 640 ? "Resume" : "CV"}
      </div>
    </button>
    </Link>
      </motion.div>
    </div>
  );
};

export default Appbar;

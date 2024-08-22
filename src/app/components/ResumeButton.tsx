"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";


const   ResumeButton = () => {
  const width = useWindowDimensions();
  const [url, setUrl] = useState("")

  useEffect(() => {
    fetch("/api/resume").then(res => res.json()).then(data => setUrl(data.url))
  },[])
  if (!width) {
    return (
      <div
        className="absolute top-4 right-2 md:right-10"
      >
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e78341] to-[#d12e09] shadow shadow-orange-600 rounded-full sm:rounded-lg" />
          <div className="sm:px-10 sm:py-2 p-2 w-10 h-10 md:w-10 bg-zinc-900 rounded-full sm:rounded-lg md:rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"></div>
        </button>
      </div>
    );
  }
  return (
    <div>
      <motion.div
        whileTap={{ scale: 0.8 }}
        className="absolute top-4 right-2 md:right-10"
      >
        <Link
          href={url}
          target="_blank"
          rel={"noopener noreferrer"}
        >
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

export default ResumeButton;

"use client";

import Image from "next/image";
import { useRef } from "react";
import SVG_PIN from "../../../public/asset 5.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { FlipWordsModel } from "./FilpWordsModel";
import { motion, useInView } from "framer-motion";

const ProfileSection = () => {
  const width = useWindowDimensions() || 0;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <div className="flex w-full">
        <div className="flex xl:mt-11">
          <div className="flex relative top-10 md:top-24">
            <div className="relative w-8 -top-4 left-4 sm:left-[1.1rem] z-10">
              <Image src={SVG_PIN} alt="ball" />
            </div>
            <div className="relative bg-[#F87216] w-[2px] h-80 md:h-[32rem] lg:h-[40rem ] xl:min-h-screen">
              <div className="absolute inset-0 bg-[#F87216] blur-sm "></div>
              <div className="bg-[#F87216] h-full relative"></div>
            </div>
          </div>
          <div className="w-full lg:w-[56rem] xl:w-[70rem] lg:justify-between xl:pt-0 md:pt-10 flex flex-col sm:flex-row z-20">
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="pt-20 md:pt-28 lg:pt-36 ps-6 md:ps-5"
            >
              <p className="text-lg font-bold text-white  lg:text-lg">Hello,</p>
              <pre className="text-white md:font-bold">My name is</pre>
              <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-50">
                Giridhar Nasam
              </p>
              <pre className="text-white lg:text-lg md:font-bold">
                And, I am a
              </pre>
              <div className="w-fit h-fit ">
                <FlipWordsModel />
              </div>
            </motion.div>
            {width > 640 ? (
              <motion.div
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="sm:w-[16rem] sm:mt-28 sm:ms-10 md:w-80 xl:w-96 z-10 xl:pe-0 sm:pe-8 rounded-sm"
              >
                <img
                  className="rounded-md"
                  src="https://cloud.appwrite.io/v1/storage/buckets/66ba286300378c0dc13e/files/66ba288d0014f948c1e4/view?project=656f77824f9395e906e9&mode=admin"
                  alt=""
                />
              </motion.div>
            ) : (
              ""
            )}

            {/* BACKGROUND ORANGE */}
            {/* <div className="bg-[#F87216] w-20 h-10 blur-xl opacity-80"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

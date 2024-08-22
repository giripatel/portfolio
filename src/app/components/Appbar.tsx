import Link from "next/link";
import ResumeButton from "./ResumeButton";

const Appbar = () => {
  
  
  return (
    <div className="bg-neutral-950 flex justify-center items-center gap-x-9 font-semibold w-full h-20">
      <div className="flex gap-x-9 w-96 rounded-xl p-3 justify-center hover:bg-neutral-600 transition duration-500 hover:duration-300 hover:bg-opacity-20 hover:backdrop-blur-sm">
        <Link href={"#"} className="text-slate-50 hover:cursor-pointer font-semibold hover:text-[#e78341] transition duration-300 text-center ">/</Link>
        <Link href={"#experience"} className="text-slate-50 hover:cursor-pointer font-semibold hover:text-[#e78341] transition duration-300">work</Link>
        <Link href={"#project"} className="text-slate-50 hover:cursor-pointer font-semibold hover:text-[#e78341] transition duration-300">projects</Link>
      </div>
      <ResumeButton />
    </div>
  );
};

export default Appbar;

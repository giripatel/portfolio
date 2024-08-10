import Image from "next/image";
import Appbar from "./components/Appbar";
import SVG1 from "../../public/asset 0.svg"
import SVG2 from "../../public/asset 1.svg"
import ProfileSection from "./components/ProfileSection";
export default function Home() {
  return (
    <main className="relative">
      <Appbar />
      <div className="absolute flex justify-between w-full top-48">
      <Image src={SVG1} alt="svg1"/>
      <Image  src={SVG2} alt="svg1"/>
      
      </div>
      {/* <div className="w-full px-16 min-h-screen pt-5 relative max-w-[1256px]"> */}
      <div className="">
        <ProfileSection />  
      </div>
    </main>
  );
}

{/* <div className="w-full flex min-h-screen">
        
<div className=" justify-center">
</div>
</div>
<div className="flex">
<div className="relative mx-6 bg-red-500 w-[2px] min-h-screen ">
<div className="absolute inset-0 bg-red-500 blur-sm "></div>
<div className="bg-red-500 h-full relative"></div>
</div>
<div className="relative mx-6 bg-yellow-500 w-[2px] min-h-screen">
  <div className="absolute inset-0 bg-yellow-500 blur-sm "></div>
  <div className="bg-yellow-500 h-full relative"></div>
</div>
</div>
<div className="w-[2px] relative"></div> */}
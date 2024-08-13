
import Image from "next/image";
import Appbar from "./components/Appbar";

import ProfileSection from "./components/ProfileSection";
import useWindowDimensions from "./hooks/useWindowDimensions";
import SideStrings from "./components/SideStrings";

export default function Home() {

  return (
    <main >
      <Appbar />
      <SideStrings />
      {/* <div className="w-full px-16 min-h-screen pt-5 relative max-w-[1256px]"> */}
      <div className="w-ful flex justify-center">
      <div className="max-w-[1200px] w-full justify-center">
        <ProfileSection />  
      </div>
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
import dynamic from "next/dynamic";
import Appbar from "./components/Appbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
const ProfileSection = dynamic(() => import("./components/ProfileSection")); 
const SideStrings = dynamic(() => import("./components/SideStrings")); 


export default function Home() {
  return (
    <main>
      <Appbar />
      <SideStrings />
      <div className="w-ful flex justify-center">
        <div className="max-w-[1200px]">
          <ProfileSection />
          <Intro />
          <Skills />
          <Experience />
          <Project />
        </div>
      </div>
      <Footer />
    </main>
  );
}


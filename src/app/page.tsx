import dynamic from "next/dynamic";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ProfileSection from "./components/ProfileSection";
import AppbarSkeleton from "./components/AppbarSkeleton";

const Appbar = dynamic(() => import("./components/Appbar"),{ssr: false, loading: () => <AppbarSkeleton />})
const SideStrings = dynamic(() =>import("./components/SideStrings"),{ssr: false}); 


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


import Appbar from "./components/Appbar";
import ProfileSection from "./components/ProfileSection";
import SideStrings from "./components/SideStrings";
import Intro from "./components/Intro";
import ExperienceModel from "./components/ExperienceModel";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


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


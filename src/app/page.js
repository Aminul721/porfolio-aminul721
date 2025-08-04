import Image from "next/image";
import HomeSideMenu from "@/components/HomeSideMenu";
import About from "@/components/About";
import Skill from "@/components/Skill";
import ContactUs from "@/components/ContactUs";
import Projects from "@/components/Projects";
import StickyHeader from "@/components/StickyHeader";
export default function Home() {
  return (
    <>
    <StickyHeader/>
      <main>
        <HomeSideMenu/>
        <About/>
        <Skill/>
        <Projects/>
        <ContactUs/>
      </main>
      <footer className="bg-blue-950 py-6 mt-10 lg:mt-20">
        <div className="container mx-auto">
          <p className="text-md text-center">&copy; {new Date().getFullYear()} Aminul Islam. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

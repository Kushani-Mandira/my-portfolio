import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background stays fixed */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        {/* Added IDs to sections */}
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Project /></section>
        <section id="certificates"><Certificates /></section>
        <section id="tech"><Technologies /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;

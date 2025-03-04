import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";

import AnimatedTimeline from "./components/AnimatedTimeline";
import { ShineBorder } from "./components/ShineBorder";

import MockupContainer from "./components/MockupContainer";
import BackToTopButton from "./components/BackToTopbutton";
import TechStack from "./components/TeachStack";
function App() {
  return (
    <div>
      <Header />

      <ShineBorder>
        <Hero />
        
        <div className="container mx-auto ">
          <MockupContainer/>
          <BackToTopButton />
        </div>

        <div className="container mx-auto px-4">
          <AnimatedTimeline />
        </div>

        <div className="flex w-full flex-col">
          <TechStack />
        </div>

        <Footer />
        
      </ShineBorder>
    </div>
  );
}

export default App;

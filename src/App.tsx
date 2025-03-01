import "./App.css";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import Header from "./components/Header";
import Hero from "./components/Hero";

import PhoneMockUp2 from "./components/PhoneMockUp2";
import { ShineBorder } from "./components/ShineBorder";
import Tourist from "./components/Tourist";
import MockupContainer from "./components/MockupContainer";
import BackToTopButton from "./components/BackToTopbutton";

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
          <PhoneMockUp2 />
        </div>

        <div className="flex w-full flex-col">
          <Tourist />
          <div className="divider"></div>
          <Guide />
        </div>

        <Footer />
        
      </ShineBorder>
    </div>
  );
}

export default App;

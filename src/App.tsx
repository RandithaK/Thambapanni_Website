import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhoneMockUp1 from "./components/PhoneMockUp1";
import PhoneMockUp2 from "./components/PhoneMockUp2";
import Tourist from "./components/Tourist";

function App() {
  return (
    <div>
      <Header />

      <Hero />
      <Carousel />

      <div className="container mx-auto px-4 py-8">
        <PhoneMockUp1 />
      </div>

      <div className="container mx-auto px-4 py-8">
        <PhoneMockUp2 />
      </div>

      <div className="flex w-full flex-col">
        <Tourist />
        <div className="divider"></div>
        <Guide />
      </div>

      <Footer />
    </div>
  );
}

export default App;

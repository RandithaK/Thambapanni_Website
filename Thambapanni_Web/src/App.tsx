import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import GuideCard from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhoneMockUp1 from "./components/PhoneMockUp1";
import PhoneMockUp2 from "./components/PhoneMockUp2";

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
        <div className="card bg-base-300 rounded-box grid place-items-center" id="tourist">
        <GuideCard title="Tourist" text="Hello Visitor" image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" link="https://www.example.com"/>
        </div>
        <div className="divider"></div>
        <div className="card bg-base-300 rounded-box grid place-items-center">
        <GuideCard title="Guide" text="Become a guide" image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" link="https://www.example.com"/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import thambapanniLogo from "../assets/Thambapanni.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/d/dc/Sigiriya_lion_rock_Luftbild_%2829781058870%29.jpg)",
        }}
      >
        {/* Improved gradient overlay for better text contrast */}
        <div className="hero-overlay bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Logo with smaller breakpoint transition */}
        <div className="absolute z-20 transition-all duration-300
                      top-20 left-1/2 -translate-x-1/2 w-32
                      md:transform-none md:w-48
                      md:top-1/2 md:left-48 md:-translate-y-1/2 lg:w-60">
          <img
            src={thambapanniLogo}
            alt="Thambapanni Logo"
            className="w-full"
          />
        </div>

        <div className="hero-content text-center md:text-left text-white z-10 px-4 pt-16 md:pl-72">
          <div
            className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="mb-6 text-5xl md:text-6xl md:text-7xl font-bold">
              Welcome to <br className="hidden md:block" />
              <span className="text-accent drop-shadow-lg">Sri Lanka</span>
            </h1>
            <p className="mb-8 text-xl md:text-2xl font-light">
              The Wonder of Asia
            </p>
            <div className="border-l-4 border-accent pl-4 mb-10 max-w-xl mx-auto md:mx-0">
              <p className="text-sm md:text-base opacity-90 text-left italic">
          Discover ancient ruins, pristine beaches, lush tea plantations,
          and vibrant wildlife in this tropical paradise island in the
          Indian Ocean.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-accent btn-lg text-white hover:bg-accent-focus transition-all duration-300 shadow-lg">
          Download App
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
        <button
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded-full p-3 bg-accent/20 backdrop-blur-sm hover:bg-accent/40 transition-all"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;

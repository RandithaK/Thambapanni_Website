import { useEffect, useState } from "react";
import thambapanniLogo from "../assets/Thambapanni.png";
import image1 from "../assets/image1.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOnClick = () => {
    window.open("https://drive.google.com/your-app-download-link", "_blank");
  };

  return (
    <div className="relative overflow-hidden h-screen flex items-center">
      <div
        className="hero w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/d/dc/Sigiriya_lion_rock_Luftbild_%2829781058870%29.jpg)",
        }}
      >
        {/* Gradient overlay */}
        <div className="hero-overlay bg-gradient-to-b from-black/70 via-black/50 to-black/70 absolute inset-0"></div>

        <div className="hero-content flex-col-reverse md:flex-row-reverse items-center justify-between w-full max-w-7xl px-4 md:px-12 relative z-10 gap-y-8 md:gap-y-0 ">
          {/* Content Section */}
          <div
            className={`max-w-xl text-center md:text-left text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-3 md:mb-6 hidden sm:block"> 
              <img
                src={thambapanniLogo}
                alt="Thambapanni Logo"
                className="h-14 md:h-20 mx-auto md:mx-0"
              />
            </div>
            <h1 className="mb-4 text-3xl md:text-6xl font-bold">
              Thambapanni<br />
            </h1>
            <span className="text-sky-500 text-2xl md:text-5xl font-bold drop-shadow-lg">
              TRAVEL APP
            </span>

            <p className="mb-4 text-lg md:text-2xl font-light">
              Plan your perfect Sri Lankan adventure
            </p>
            <div className="border-l-4 border-sky-700 pl-3 md:pl-4 mb-4 md:mb-6 mx-auto md:mx-0 text-left">
              <p className="text-xs md:text-base opacity-90 italic">
                Discover ancient ruins, pristine beaches, lush tea plantations,
                and vibrant wildlife in this tropical paradise island with your
                personal Sri Lankan travel planner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                className="btn bg-sky-800 text-white hover:bg-sky-900 transition-all duration-300 shadow-lg border-none flex items-center text-sm md:text-base"
                onClick={handleOnClick}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                  alt="Android Logo"
                  className="h-4 w-4 mr-2"
                />
                Get Android App
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="transform scale-[0.35] -mt-[230px] -mb-[290px] sm:scale-40 sm:my-0 md:scale-50 md:my-0">
              <div className="mockup-phone border-sky-300">
                <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display">
                  <img
                    alt="wallpaper"
                    src={image1}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          className="absolute  hidden sm:block bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-700 rounded-full p-3 bg-sky-800/20 backdrop-blur-sm hover:bg-blue-800/40 transition-all z-20"
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
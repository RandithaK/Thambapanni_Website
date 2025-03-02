import React, { useEffect, useState } from "react";
// Import images directly
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import { SparklesCore } from "./SparklesCore"; 

interface PhotoCardProps {
  imageSrc: string;
  rotation: string;
  translateX: string;
  translateXMobile: string;
  zIndex: number;
  isMobile: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageSrc,
  rotation,
  translateX,
  translateXMobile,
  zIndex,
  isMobile,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 ${isMobile ? translateXMobile : translateX} ${rotation} transition-all duration-500`}
      style={{ zIndex }}
    >
      <div
        className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
        style={{ 
          width: isMobile ? '180px' : '270px', 
          height: isMobile ? '390px' : '575px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
        }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={imageSrc}
          alt="Phone screen"
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
        {/* Add phone frame overlay */}
        <div className="absolute inset-0 rounded-3xl border-[12px] border-white bg-transparent pointer-events-none"></div>

        {/* Add reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none"></div>

        {/* Add subtle device details */}
        <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

const MockupContainer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Images
  const images = [image1, image2, image3, image4];

  // Styles for different screen sizes
  const phoneStyles = [
    {
      rotation: "-rotate-12",
      translateX: "-translate-x-[300px]",
      translateXMobile: "-translate-x-[90px]",
      zIndex: 1,
    },
    {
      rotation: "-rotate-6",
      translateX: "-translate-x-[100px]",
      translateXMobile: "-translate-x-[30px]",
      zIndex: 2,
    },
    {
      rotation: "rotate-6",
      translateX: "translate-x-[100px]",
      translateXMobile: "translate-x-[30px]",
      zIndex: 3,
    },
    {
      rotation: "rotate-12",
      translateX: "translate-x-[300px]",
      translateXMobile: "translate-x-[90px]",
      zIndex: 4,
    },
  ];

  return (
    <div className="w-full overflow-hidden py-16 relative">
       <div className="absolute inset-0 w-full h-full -z-20">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#8ECAE6"
          particleDensity={100}
          speed={2}
          className="w-full h-full"
        />
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Main heading section */}
      <div className="text-center mb-6 max-w-4xl mx-auto px-4">
        <h1 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold mb-4">
          Hey, We're{" "}
          <span className="relative inline-block">
            Team name
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500 -z-10"></span>
            <span className="text-blue-500">!</span>
          </span>
        </h1>
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold mb-8">
          Welcome to Our Tambapanni App
        </h2>
        
        {/* Sparkles effect under the text */}
        <div className="w-full h-20 md:h-20 relative mt-2">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1}
            particleColor="#FFFFFF"
            particleDensity={900}
            speed={1}
            className="w-full h-full"
          />
          
          {/* Linear Gradient overlay */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          
          {/* Radial Gradient mask */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      {/* Phone mockups container - properly centered and responsive */}
      <div
        className={`relative w-full max-w-6xl h-[400px] md:h-[600px] mx-auto flex items-center justify-center ${isMobile ? "pr-45" : "pr-60"}`}
      >
        {/* Center point for all phones to fan out from */}
        <div className="relative">
          {images.map((src, index) => (
            <PhotoCard
              key={index}
              imageSrc={src}
              rotation={phoneStyles[index].rotation}
              translateX={phoneStyles[index].translateX}
              translateXMobile={phoneStyles[index].translateXMobile}
              zIndex={phoneStyles[index].zIndex}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockupContainer;
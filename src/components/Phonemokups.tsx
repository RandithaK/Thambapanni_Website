// PhoneMockups.tsx
import React from 'react';
// Import images directly
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

interface PhotoCardProps {
  imageSrc: string;
  rotation: string;
  translateX: string;
  zIndex: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageSrc, rotation, translateX, zIndex }) => {
  return (
    <div 
      className={`absolute top-1/2 transform -translate-y-1/2 ${translateX} ${rotation} transition-all duration-500`}
      style={{ zIndex }}
    >
      <div
        className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
        style={{ 
          width: '250px', 
          height: '480px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
        }}
      >
        <img
          src={imageSrc}
          alt="Phone screen"
          className="w-full h-full object-cover"
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

const Phone: React.FC = () => {
  // Images 
  const images = [
    image1,
    image2,
    image3, 
    image4,
  ];

  // Improved spread arrangement with balanced spacing
  const phoneStyles = [
    { 
      rotation: '-rotate-12', 
      translateX: '-translate-x-[300px]', 
      zIndex: 1 
    },
    { 
      rotation: '-rotate-6', 
      translateX: '-translate-x-[100px]', 
      zIndex: 2 
    },
    { 
      rotation: 'rotate-6', 
      translateX: 'translate-x-[100px]', 
      zIndex: 3 
    },
    { 
      rotation: 'rotate-12', 
      translateX: 'translate-x-[300px]', 
      zIndex: 4 
    },
  ];

  return (
    <div className="w-full overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Main heading */}
      <div className="text-center mb-6 max-w-4xl mx-auto px-4">
        <h1 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold mb-4">
          Hey, We're <span className="relative inline-block">
            Team name
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500 -z-10"></span>
            <span className="text-blue-500">!</span>
          </span>
        </h1>
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">
          Welcome to Our Tambapanni App
        </h2>
      </div>

      {/* Phone mockups container - properly centered */}
      <div className="relative w-full max-w-6xl h-[600px] mx-auto flex items-center justify-center  pr-60">
        {/* Center point for all phones to fan out from */}
        <div className="relative">
          {images.map((src, index) => (
            <PhotoCard 
              key={index} 
              imageSrc={src} 
              rotation={phoneStyles[index].rotation} 
              translateX={phoneStyles[index].translateX}
              zIndex={phoneStyles[index].zIndex}
            />
          ))}
        </div>
      </div>
      
      
    </div>
  );
};

export default Phone;
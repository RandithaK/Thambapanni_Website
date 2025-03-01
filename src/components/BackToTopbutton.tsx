import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
 
  useEffect(() => {
    const toggleVisibility = () => {
     
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    
    window.addEventListener('scroll', toggleVisibility);
    
 
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
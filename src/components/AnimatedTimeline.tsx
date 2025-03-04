import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import lk from "../assets/lk.png";
const steps = [
  { number: "01", title: "Create your Account", description: "Sign up and set up your profile in minutes" },
  { number: "02", title: "Generate your Trip", description: "Plan your perfect journey with our smart tools" },
  { number: "03", title: "Select Your Vehicle", description: "Choose from our premium fleet of vehicles" },
  { number: "04", title: "Find your Guide", description: "Connect with our experienced local guides" },
  { number: "05", title: "Make Payment", description: "Secure and hassle-free payment options" },
  { number: "06", title: "Enjoy your Stay", description: "Relax and enjoy your amazing experience" },
];

const AnimatedTimeline = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Add animation class when element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          // Remove animation class when element leaves viewport
          entry.target.classList.remove('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Store a copy of the current refs for the cleanup function
    const currentRefs = timelineRefs.current;
    
    currentRefs.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Journey With Us</h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>
        
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={step.number}
              ref={el => { timelineRefs.current[index] = el; }}
              className={`mb-12 md:mb-24 flex flex-col md:flex-row items-start relative opacity-0 transition-all duration-700 ease-out transform translate-y-12 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Circle on timeline */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-purple-600 transform -translate-x-4 md:-translate-x-1/2 z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="p-6 rounded-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-purple-700">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {/* Check icon for completed steps */}
                  <div className="mt-4 flex justify-end">
                    <CheckCircle className="text-green-500 opacity-70" size={24} />
                  </div>
                </div>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          );
        })}
      </div>
      
 {/* Final destination icon */}
<div className="flex justify-center mt-8">
  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg pl-2">
    <img 
      src={lk} 
      alt="Sri Lanka flag"
      className="w-full h-full object-contain"
    />
  </div>
</div>
    </div>
  );
};

// Add the necessary CSS for animations
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

export default AnimatedTimeline;
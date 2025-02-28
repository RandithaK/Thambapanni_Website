const Hero = () => {
  return (
    <div className="relative">
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/d/dc/Sigiriya_lion_rock_Luftbild_%2829781058870%29.jpg)",
        }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-center text-white z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeIn">
              Welcome to <br className="hidden sm:block" /> 
              <span className="text-accent">Sri Lanka</span>
            </h1>
            <p className="mb-8 text-xl md:text-2xl opacity-90">The Wonder of Asia</p>
            <p className="mb-10 max-w-md mx-auto text-sm md:text-base opacity-80">
              Discover ancient ruins, pristine beaches, lush tea plantations, and vibrant wildlife
              in this tropical paradise island in the Indian Ocean.
            </p>
            <button className="btn btn-accent btn-lg text-white hover:bg-accent-focus transition-all duration-300 shadow-lg">
              Download App
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent rounded-full p-2"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;

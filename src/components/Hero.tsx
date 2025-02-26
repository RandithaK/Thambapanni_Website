const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/d/dc/Sigiriya_lion_rock_Luftbild_%2829781058870%29.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> Sri Lanka</h1>
            <p className="mb-5">The Wonder of Asia</p>
            
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
              <button
              className="btn btn-accent lg:text-lg text-md"
              >
              Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// This should be changed as needed
const steps = [
  { number: "01", title: "Login" },
  { number: "02", title: "Generate your trip" },
  { number: "03", title: "Find your Guide" },
  { number: "04", title: "Enjoy your Stay" },
];

const PhoneMockUp2 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-4">
        <div className="card rounded-box flex justify-center items-center w-full lg:w-1/2 py-8">
          <ul className="list rounded-box shadow-md w-full max-w-md mx-4">
            <li className="p-4 pb-2 text-xl sm:text-2xl md:text-3xl opacity-60 tracking-wide">
              Explore our Features
            </li>

            {steps.map(({ number, title }) => (
              <li key={number} className="list-row p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl md:text-4xl font-thin opacity-30 tabular-nums">
                  {number}
                </div>
                <div className="list-col-grow">
                  <div className="text-sm sm:text-base md:text-lg">{title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex lg:divider-horizontal"></div>

        <div className="card rounded-box flex justify-center items-center w-full lg:w-1/2 py-8">
          <div className="transform scale-75 sm:scale-90 md:scale-100">
            <div className="mockup-phone border-primary">
              <div className="mockup-phone-camera"></div>
              <div className="mockup-phone-display">
                <img
                  alt="wallpaper"
                  src="https://www.iclarified.com/images/news/94911/453966/453966.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockUp2;

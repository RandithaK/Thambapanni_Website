import React from "react";



// This should be changed as needed
const steps = [
  { number: "01", title: "Login" },
  { number: "02", title: "Generate your trip" },
  { number: "03", title: "Find your Guide" },
  { number: "04", title: "Enjoy your Stay" },
];

const PhoneMockUp1 = () => {
  return (
    <div>
      <div className="flex w-full flex-col lg:flex-row">
        
        
        <div className="card bg-base-300 rounded-box grid h-256 grow place-items-center">
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-3xl opacity-60 tracking-wide">
              Explore our Features
            </li>

            {steps.map(({ number, title }) => (
              <li key={number} className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  {number}
                </div>
                <div className="list-col-grow">
                  <div>{title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-256 grow place-items-center">
          <div>
            <div className="mockup-phone border-primary">
              <div className="mockup-phone-camera"></div>
              <div className="mockup-phone-display">
                <img
                  alt="wallpaper"
                  src="https://www.iclarified.com/images/news/94911/453966/453966.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockUp1;

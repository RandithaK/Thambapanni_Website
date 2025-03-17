
import applogo from "../assets/Thambapanni.png";

// Define repositories and app links directly in this file
const repositories = {
  frontend: "https://github.com/nethmalgunawardhana/Thambapanni",
  backend: "https://github.com/nethmalgunawardhana/Thambapanni_backend",
  website: "https://github.com/RandithaK/Thambapanni_Website"
};

const appLinks = {
  android: "https://drive.google.com/file/d/12yCtQuz3dzM6cL7hZtgLyPNF3yTlOK_M/view",
  ios: "#" // Placeholder for future iOS app
};

const developers = [
  { name: "Nethmal Gunawardhana", linkedIn: "https://www.linkedin.com/in/nethmal-gunawardhana-12a9b8272/" },
  { name: "Aditha Buwaneka", linkedIn: "https://www.linkedin.com/in/adithabuwaneka/" },
  { name: "Randitha Kulasekara", linkedIn: "https://www.linkedin.com/in/randitha/" },
  { name: "Lasitha Hasaranga", linkedIn: "https://www.linkedin.com/in/lasitha-hasaranga/" }
];

const Footer = () => {
  const handleDownload = () => {
    window.open(appLinks.android, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and info column */}
          <div className="col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <img src={applogo} alt="Thambapanni Logo" className="h-16 mb-4" />
              <h2 className="text-xl font-bold text-blue-500 mb-2">Thambapanni</h2>
              <p className="text-sm text-gray-400 mb-4 max-w-xs">
                The 21st century app for exploring Sri Lanka's rich cultural heritage and natural beauty
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/nethmalgunawardhana/Thambapanni" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/nethmal-gunawardhana-12a9b8272/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:contact@thambapanni.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Team section */}
          <div className="col-span-1">
            <h6 className="text-lg font-semibold mb-4 text-blue-500">OUR TEAM</h6>
            <div className="flex flex-col space-y-2">
              {developers.map((dev, index) => (
                <a 
                  key={index}
                  href={dev.linkedIn}
                  className="block py-1 text-white hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dev.name}
                </a>
              ))}
            </div>
          </div>

          {/* Repositories section */}
          <div className="col-span-1">
            <h6 className="text-lg font-semibold mb-4 text-blue-500">REPOSITORIES</h6>
            <div className="flex flex-col space-y-2">
              <a 
                href={repositories.frontend}
                className="block py-1 text-white hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend
              </a>
              <a 
                href={repositories.backend}
                className="block py-1 text-white hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend
              </a>
              <a 
                href={repositories.website}
                className="block py-1 text-white hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>

          {/* App links section */}
          <div className="col-span-1">
            <div className="mb-4">
              <h6 className="text-lg font-semibold mb-4 text-blue-500">DOWNLOAD</h6>
              <div className="flex flex-col space-y-2">
                <a 
                  href={appLinks.android}
                  className="block py-1 text-white hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Android App
                </a>
                <a 
                  href={appLinks.ios}
                  className="block py-1 text-white hover:text-blue-400 transition-colors duration-300"
                >
                  Coming soon to iOS
                </a>
              </div>
              
              <div className="mt-6">
                <button 
                  onClick={handleDownload}
                  className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 20.5A3.5 3.5 0 008.5 24l.387-.01c.243-.046.483-.212.687-.403l7.925-8.087-2.75-2.75-8.75 8.25c-.212.212-.369.463-.425.75H5zm14.25-14.5c-1.058-1.060-2.776-1.060-3.833 0l-6.917 6.917 2.75 2.75 7-7c.5-.5.5-1.25 0-1.75z"/>
                    <path d="M13 2l-2.75 2.75L13 7.5V2zm-8.992 9.508l2.75 2.75 2.508-2.328-2.75-2.75-2.508 2.328z"/>
                  </svg>
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Border line */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Thambapanni. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
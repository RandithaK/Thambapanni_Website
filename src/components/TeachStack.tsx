import { motion } from 'framer-motion';

const technologies = [
  { name: 'React Native + Expo', icon: './icons/icon1.webp', description: 'Cross-platform mobile development' },
  { name: 'Node.js & Express', icon: './icons/icon2.png', description: 'Scalable server architecture' },
  { name: 'Firebase Firestore', icon: './icons/icon3.png', description: 'Real-time data synchronization' },
  { name: 'JWT Authentication', icon: './icons/icon5.png', description: 'Secure identity management' },
  { name: 'Google Gemini API', icon: './icons/icon6.webp', description: 'AI-powered trip planning' },
  { name: 'Stripe', icon: './icons/icon7.webp', description: 'Secure payment processing' },
  { name: 'SendGrid', icon: './icons/icon9.jpg', description: 'Transactional email service' },
  { name: 'OpenStreetMap', icon: './icons/icon10.png', description: 'Detailed Sri Lanka navigation' }
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-black-900">
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Added padding and proper overflow handling */}
          <h2 className="text-5xl text-center font-bold mb-6 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent overflow-visible leading-normal">
            Powered by Modern Technology
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our architecture prioritizes security, performance, and user experience while remaining flexible for future enhancements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-sky-700 flex flex-col items-center text-center"
            >
              <div className="w-32 h-24 mb-4 flex items-center justify-center shadow-sm">
                <img src={tech.icon} alt={tech.name} className="w-32 h-24 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
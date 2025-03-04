
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React Native + Expo', icon: '/icons/react.svg', description: 'Cross-platform mobile development' },
  { name: 'Node.js & Express', icon: '/icons/nodejs.svg', description: 'Scalable server architecture' },
  { name: 'Firebase Firestore', icon: '/icons/firebase.svg', description: 'Real-time data synchronization' },
  { name: 'JWT Authentication', icon: '/icons/jwt.svg', description: 'Secure identity management' },
  { name: 'Google Gemini API', icon: '/icons/gemini.svg', description: 'AI-powered trip planning' },
  { name: 'Stripe', icon: '/icons/stripe.svg', description: 'Secure payment processing' },
  { name: 'SendGrid', icon: '/icons/sendgrid.svg', description: 'Transactional email service' },
  { name: 'OpenStreetMap', icon: '/icons/osm.svg', description: 'Detailed Sri Lanka navigation' }
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Powered by Modern Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
              className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{tech.name}</h3>
              <p className="text-slate-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
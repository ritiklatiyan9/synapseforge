import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaMobile, FaDesktop, FaCloud, FaNetworkWired, FaGamepad, FaTimes } from 'react-icons/fa';


const customFontStyle = {
  fontFamily: "'Test Founders Grotesk X-Cond Sm', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};
const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    tech: 'MERN & MEAN',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    description: 'Create stunning, responsive websites with cutting-edge technologies.',
    detailedDescription: 'Our web development services leverage the latest technologies like MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks to create powerful, scalable, and responsive web applications. We focus on delivering seamless user experiences, robust backend systems, and beautiful frontend designs.',
    detailedImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <FaMobile />,
    title: 'Mobile Applications',
    tech: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    description: 'Develop powerful, user-friendly mobile apps for all platforms.',
    detailedDescription: 'Our mobile application development services cover both iOS and Android platforms. We use native technologies like Swift and Kotlin, as well as cross-platform frameworks like React Native and Flutter to deliver high-performance, feature-rich mobile apps. Our focus is on creating intuitive user interfaces, optimizing app performance, and ensuring seamless integration with device features.',
    detailedImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <FaDesktop />,
    title: 'Desktop Applications',
    tech: 'Cross-platform',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    description: 'Build robust desktop applications that work seamlessly across operating systems.',
    detailedDescription: 'Our desktop application development services focus on creating powerful, efficient, and user-friendly software for Windows, macOS, and Linux. We use technologies like Electron, Qt, and .NET to build cross-platform applications that provide native-like performance and user experience. Our team ensures that the applications are optimized for desktop environments, taking full advantage of system resources and integrating seamlessly with operating system features.',
    detailedImage: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    tech: 'Scalable & Secure',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    description: 'Implement scalable and secure cloud infrastructure for your business needs.',
    detailedDescription: 'Our cloud solutions services help businesses leverage the power of cloud computing to improve scalability, reduce costs, and enhance security. We work with leading cloud platforms like AWS, Azure, and Google Cloud to design, implement, and manage cloud infrastructure tailored to your specific needs. Our expertise includes cloud migration, serverless architecture, containerization, and cloud-native application development.',
    detailedImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <FaNetworkWired />,
    title: 'Networking',
    tech: 'Enterprise-grade',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    description: 'Design and implement robust networking solutions for your organization.',
    detailedDescription: 'Our networking services cover the design, implementation, and management of enterprise-grade network infrastructure. We specialize in creating secure, high-performance networks that support modern business needs. Our services include network architecture design, implementation of software-defined networking (SDN), network security solutions, and ongoing network management and optimization.',
    detailedImage: 'https://images.unsplash.com/photo-1551703599-6b3e8379caaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <FaGamepad />,
    title: 'Gaming Websites',
    tech: 'Interactive & Immersive',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    description: 'Create engaging and immersive gaming experiences on the web.',
    detailedDescription: 'Our gaming website development services focus on creating immersive and interactive web-based gaming experiences. We use cutting-edge web technologies like WebGL, Three.js, and advanced JavaScript frameworks to build engaging games that run directly in the browser. Our team has expertise in game design, 3D graphics, physics engines, and multiplayer networking to deliver high-quality gaming websites that captivate and retain players.',
    detailedImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }
];

const ServiceCard = ({ service, onViewDetails }) => (
  <motion.div
  style={customFontStyle}
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <div className="text-4xl text-center mb-4" style={{ color: service.iconColor }}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{service.tech}</p>
      <p className="text-gray-700 mb-4">{service.description}</p>
      <button
        onClick={() => onViewDetails(service)}
        className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow-xl hover:bg-blue-600 transition duration-300"
      >
        View Details
      </button>
    </div>
  </motion.div>
);

const Modal = ({ isOpen, onClose, service }) => (
  <AnimatePresence>
    {isOpen && service && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-700">
              <FaTimes />
            </button>
          </div>
          <img
            src={service.detailedImage}
            alt={service.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-600 mb-4">{service.tech}</p>
          <p className="text-gray-800 mb-6">{service.detailedDescription}</p>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div   style={customFontStyle} className="min-h-screen bg-zinc-100">
      <section className="container mx-auto py-16 px-6 text-zinc-900">
        <h2   style={customFontStyle} className="text-6xl  font-semibold uppercase leading-2 border-b-2  border-zinc-700 p-4  text-center mt-20  mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>

      <Modal 
        isOpen={selectedService !== null} 
        onClose={handleCloseModal} 
        service={selectedService}
      />
    </div>
  );
};

export default ServicesPage;
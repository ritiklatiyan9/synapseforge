import React, { useState, useCallback, useMemo } from 'react';
import { FaCode, FaMobile, FaDesktop, FaCloud, FaNetworkWired, FaGamepad, FaTimes } from 'react-icons/fa';
import bge from '../../assets/cyber-theme.mp4';

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

const ServiceCard = React.memo(({ service, onViewDetails }) => (
  <div
    style={customFontStyle}
    className="bg-transparent rounded-lg overflow-hidden border-zinc-200 border-2 shadow-xl transition-transform hover:scale-105"
  >
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-56 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <div className="text-4xl text-center mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
      <p className="text-sm text-gray-300 mb-4">{service.tech}</p>
      <p className="text-gray-300 mb-4">{service.description}</p>
    </div>
  </div>
));

const Modal = React.memo(({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
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
          className="w-full h-64 object-cover mb-6 rounded-lg"
          loading="lazy"
        />
        <p className="text-lg">{service.detailedDescription}</p>
      </div>
    </div>
  );
});

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleViewDetails = useCallback((service) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  const memoizedServices = useMemo(() => services.map((service) => (
    <ServiceCard key={service.title} service={service} onViewDetails={handleViewDetails} />
  )), [handleViewDetails]);

  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed opacity-30 inset-0 w-full h-full object-cover z-[-1]"
        src={bge}
      />
      <div className="relative z-10 min-h-screen py-12 px-4 md:px-12 lg:px-24">
        <h1
          style={customFontStyle}
          className="text-center border-b-2 border-zinc-100 p-4 text-5xl mt-20 font-bold mb-16 text-white"
        >
          OUR SERVICES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedServices}
        </div>
      </div>
      <Modal isOpen={!!selectedService} onClose={handleCloseModal} service={selectedService} />
    </div>
  );
};

export default ServicesPage;
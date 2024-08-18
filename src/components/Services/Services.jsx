import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDesktop, FaCloud, FaNetworkWired, FaGamepad } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      tech: 'MERN & MEAN',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      description: 'Create stunning, responsive websites with cutting-edge technologies.',
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Applications',
      tech: 'iOS & Android',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      description: 'Develop powerful, user-friendly mobile apps for all platforms.',
    },
    {
      icon: <FaDesktop />,
      title: 'Desktop Applications',
      tech: 'Cross-platform',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      description: 'Build robust desktop applications that work seamlessly across operating systems.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      tech: 'Scalable & Secure',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
      description: 'Implement scalable and secure cloud infrastructure for your business needs.',
    },
    {
      icon: <FaNetworkWired />,
      title: 'Networking',
      tech: 'Enterprise-grade',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      description: 'Design and implement robust networking solutions for your organization.',
    },
    {
      icon: <FaGamepad />,
      title: 'Gaming Websites',
      tech: 'Interactive & Immersive',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
      description: 'Create engaging and immersive gaming experiences on the web.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 to-blue-900 text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-8 px-6">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Software Solution Services</h1>
            <p className="text-lg mb-6">Get professional services tailored to your needs.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-200 border-2 shadow-md shadow-blue-900 border-zinc-900 text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-zinc-300 transition duration-300"
            >
              Book Now
            </motion.button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_System_Software.jpg" alt="Software Solutions" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6 text-zinc-900">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="text-4xl text-center mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.tech}</p>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
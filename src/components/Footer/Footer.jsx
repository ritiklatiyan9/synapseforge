import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-5">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Section */}
          <motion.div variants={childVariants} className="space-y-6">
            <h2 className="text-4xl p-2 leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Synapse Forge
            </h2>
            <p className="text-gray-400 max-w-xs leading-1">
              Crafting exceptional digital experiences with cutting-edge technology and innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={childVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Contact'].map((link, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 5 }}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <a href="#">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={childVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Tech Street, Digital City</li>
              <li>contact@synapseforge.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div variants={childVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, link: '#', color: '#4267B2' },
                { Icon: FaTwitter, link: '#', color: '#1DA1F2' },
                { Icon: FaInstagram, link: '#', color: '#E1306C' },
                { Icon: FaLinkedinIn, link: '#', color: '#0077B5' }
              ].map(({ Icon, link, color }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon style={{ color }} className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Section */}
        <motion.div 
          variants={childVariants}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500"
        >
          <p>&copy; {currentYear} Synapse Forge. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
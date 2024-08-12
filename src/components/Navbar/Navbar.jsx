import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Users, BookOpen, Mail } from 'lucide-react';
import logo from '../../assets/2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", icon: Home, color: "text-blue-400", route: "/" },
    { name: "Services", icon: Briefcase, color: "text-green-400", route: "/services" },
    { name: "Our Works", icon: BookOpen, color: "text-yellow-400", route: "/works" },
    { name: "About Us", icon: Users, color: "text-purple-400", route: "/about" },
    { name: "Contact", icon: Mail, color: "text-red-400", route: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navVariants}
          transition={{ duration: 0.3 }}
          className="fixed z-[999] w-full px-5 md:px-20 py-4 font-['Neue Montreal'] bg-gray-900 text-white shadow-md"
        >
          <div className="flex justify-between items-center">
          <Link to="/">
      <motion.div
        className="logo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-18 h-12" src={logo} alt="Logo" />
      </motion.div>
    </Link>
            <div className="hidden md:flex gap-8 capitalize">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.route}
                    className={`flex items-center text-sm md:text-lg font-light hover:text-green-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                      index === navItems.length - 1 && "ml-32"
                    }`}
                  >
                    <item.icon className={`mr-2 ${item.color}`} size={20} />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.button
              className="md:hidden text-gray-300 mr-4 hover:text-blue-400 transition-colors duration-300"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
          <motion.div
            className={`md:hidden mt-4 bg-gray-800 rounded-lg p-4 space-y-2 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.route}
                  className="flex items-center py-2 text-lg font-light text-gray-300 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:translate-x-2"
                >
                  <item.icon className={`mr-2 ${item.color}`} size={20} />
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

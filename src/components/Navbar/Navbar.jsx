import React, { useState } from 'react';
import { Menu, X, Home, Briefcase, Users, BookOpen, Mail } from 'lucide-react';
import logo from '../../assets/2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Services", icon: Briefcase },
    { name: "Our Works", icon: BookOpen },
    { name: "About Us", icon: Users },
    { name: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed z-[999] w-full px-5 md:px-20 py-4 font-['Neue Montreal'] bg-gray-900 shadow-md">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img className="w-28 h-10" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex gap-8 capitalize">
          {navItems.map((item, index) => (
            <a
              key={index}
              className={`flex items-center text-sm md:text-lg font-light hover:text-green-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                index === navItems.length - 1 && "ml-32"
              }`}
              href="#"
            >
              <item.icon className="mr-2" size={20} />
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-gray-300 mr-4 hover:text-blue-600 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              className="flex items-center py-2 text-lg font-light text-gray-300 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:translate-x-2"
              href="#"
            >
              <item.icon className="mr-2" size={20} />
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

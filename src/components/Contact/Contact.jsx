import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import bgimage from '../../assets/bg.jpg'
const customFontStyle = {
  fontFamily: "'Test Founders Grotesk X-Cond Sm', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setStatusMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div
      style={{
        ...customFontStyle,
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity : 0.75,
      }}
      className="  py-16 px-4 sm:px-6 lg:px-8"
    >
      <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1" className="max-w-4xl mt-20 mx-auto w-full sm:w-3/4 lg:w-1/2 px-4 py-8 bg-white bg-opacity-90 rounded-2xl shadow-2xl">
        <motion.div
         
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-zinc200"
        >
          <h2 className="text-3xl sm:text-4xl leading-none capitalize font-semibold text-gray-800 p-1">GET IN TOUCH.</h2>
          <p className="text-violet-900 text-md leading-none capitalize font-semibold mb-8 p-2">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <motion.input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mb-4 p-3 text-gray-800 border-brown-300 bg-gray-100 rounded-md border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.name}
              onChange={handleChange}
            />
            <motion.input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 text-gray-800 border-brown-300 bg-gray-100 rounded-md border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.email}
              onChange={handleChange}
            />
            <motion.textarea
              id="message"
              placeholder="Type your message here ..."
              className="w-full mb-4 p-3 text-gray-800 border-brown-300 bg-gray-100 rounded-md border-2 shadow-xl h-32"
              whileFocus={{ scale: 1.05 }}
              value={formData.message}
              onChange={handleChange}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md flex items-center"
              whileHover={{ scale: 1.1 }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </form>
          {statusMessage && (
            <div className="mt-4 text-center text-gray-800 text-lg">
              <div className="font-semibold border-2 rounded-full px-3 py-2 shadow-2xl">
                {statusMessage}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        data-scroll
        data-scroll-section
        data-scroll-speed=".5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-gray-50 w-full sm:w-3/4 lg:w-1/2 mx-auto mt-12 border-2 p-8 rounded-2xl shadow-2xl bg-opacity-90"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="text-blue-600 mr-3 h-6 w-6" />
          <p className="text-zinc-800">+91 6397654747</p>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-blue-600 mr-3 h-6 w-6" />
          <p className="text-zinc-800">contactus@synapseforge.vercel.app</p>
        </div>
        <div className="flex items-center mb-8">
          <FaMapMarkerAlt className="text-blue-600 mr-3 h-6 w-6" />
          <p className="text-zinc-800">151 Greenwood City, Godwin, Meerut, Uttar Pradesh</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

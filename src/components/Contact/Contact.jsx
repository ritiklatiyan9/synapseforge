import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

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
    <div className="bg-zinc-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-100 to-teal-50 border-green-200 border  p-8 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl leading-none capitalize font-bold text-gray-800 p-1">Get in Touch.</h2>
          <p className="text-gray-700 font-medium mb-8  p-2">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <motion.input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mb-4 p-3 text-gray-800 border-violet-300 bg-gray-100 rounded-2xl border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.name}
              onChange={handleChange}
            />
            <motion.input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 text-gray-800 border-violet-300 bg-gray-100 rounded-2xl border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.email}
              onChange={handleChange}
            />
            <motion.textarea
              id="message"
              placeholder="Type your message here ..."
              className="w-full mb-4 p-3 text-gray-800 border-violet-300 bg-gray-100 rounded-2xl border-2 shadow-xl h-32"
              whileFocus={{ scale: 1.05 }}
              value={formData.message}
              onChange={handleChange}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center"
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-100 to-teal-50 border-2 p-8 rounded-3xl shadow-2xl bg-opacity-50"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-blue-600 mr-3 h-6 w-6" />
            <p className="text-gray-600">+91 6397654747</p>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-blue-600 mr-3 h-6 w-6" />
            <p className="text-gray-600">contactus@synapseforge.vercel.app</p>
          </div>
          <div className="flex items-center mb-8">
            <FaMapMarkerAlt className="text-blue-600 mr-3 h-6 w-6" />
            <p className="text-gray-600">151 Greenwood City, Godwin, Meerut, Uttar Pradesh</p>
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
    </div>
  );
};

export default ContactPage;

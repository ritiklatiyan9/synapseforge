import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://sf-backend-one.vercel.app/api/form', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setStatusMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setStatusMessage('Failed to submit the form.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid mt-20 grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-3xl shadow-lg  border-green-300 border transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <motion.input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mb-4 p-3 text-gray-800 border-gray-300 rounded-2xl border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.name}
              onChange={handleChange}
            />
            <motion.input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 text-gray-800 border-gray-300 rounded-2xl border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.email}
              onChange={handleChange}
            />
            <motion.textarea
              id="message"
              placeholder="Type your message here ..."
              className="w-full mb-4 p-3 text-gray-800 border-gray-300 rounded-2xl border-2 shadow-xl h-32"
              whileFocus={{ scale: 1.05 }}
              value={formData.message}
              onChange={handleChange}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center"
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
              <span className="font-semibold border-2 rounded-full px-3 py-2 shadow-2xl">
                {statusMessage}
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white p-8 rounded-3xl shadow-lg hover:blur-none transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <MdEmail className="text-blue-600 mr-3 h-6 w-6" />
            <p className="text-gray-600">contactus@synapseforge.vercel.app</p>
          </div>
          <div className="flex items-center mb-4">
            <MdPhone className="text-green-600 mr-3 h-6 w-6" />
            <p className="text-gray-600">+91 6397654747</p>
          </div>
          <div className="flex items-center mb-8">
            <MdLocationOn className="text-red-600 mr-3 h-6 w-6" />
            <p className="text-gray-600">
              151 Greenwood City, Godwin, Meerut, Uttar Pradesh
            </p>
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

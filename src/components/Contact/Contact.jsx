import React, { useState } from 'react';
import { Send, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactForm = () => {
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
    <div className="bg-[#6661CF] p-8 rounded-3xl max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white p-8 mt-40 rounded-2xl shadow-lg flex"
      >
        <div className="w-2/3 pr-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-3xl font-bold text-[#4E4BB4] mb-4"
          >
            LET'S TALK
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="text-zinc-800 font-semibold leading-1 mb-6"
          >
            To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            onSubmit={handleSubmit}
          >
            <motion.input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mb-4 p-2 text-zinc-900 border-gray-300 rounded-2xl border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.name}
              onChange={handleChange}
            />
            <motion.input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 text-zinc-900 border-gray-300 rounded-2xl border-2 shadow-xl"
              whileFocus={{ scale: 1.05 }}
              value={formData.email}
              onChange={handleChange}
            />
            <motion.textarea
              id="message"
              placeholder="Type your message here ..."
              className="w-full mb-4 p-2 text-zinc-900 border-gray-300 rounded-2xl border-2 shadow-xl h-32"
              whileFocus={{ scale: 1.05 }}
              value={formData.message}
              onChange={handleChange}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-[#6661CF] text-white px-6 py-2 rounded-full flex items-center"
              whileHover={{ scale: 1.1 }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.form>
          {statusMessage && (
            <div className="mt-4 text-center text-zinc-900   text-lg">
              <span className='font-semibold border-2 rounded-full px-3 py-2 shadow-2xl '>{statusMessage}</span>
            </div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="w-1/3 flex flex-col justify-between"
        >
          <div className="mb-8">
            <img src="https://i.pinimg.com/1200x/4a/ff/d8/4affd89a9f1bef68eaddc24a749fa532.jpg" alt="Email illustration" className="w-full" />
          </div>
          <div>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">151 Greenwood City, Godwin, Meerut</span>
              <br />       Uttar Pradesh
            </p>
            <p className="text-gray-600 mb-2">+91 6397654747</p>
            <p className="text-gray-600 mb-4">contactus@synapseforge.vercel.app</p>
            <div className="flex space-x-4">
              <Facebook className="text-blue-600" />
              <Twitter className="text-blue-400" />
              <Instagram className="text-pink-600" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;

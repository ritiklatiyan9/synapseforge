import React, { useState } from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
const ContactUsPage = () => {
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
    <div className="bg-gray-100 text-gray-500 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mt-10 font-bold text-center mb-4">Contact Us</h2>
        <h3 className="text-6xl font-semibold text-center mb-6">Let's chat!</h3>
        <p className="text-center mb-8">Drop us a line through the form below and we'll get back to you</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">First Name*</label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.name}
              onChange={handleChange}
            />
            <motion.input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleChange}
            />
            <motion.textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.message}
              onChange={handleChange}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </motion.button>
          </div>
          {statusMessage && (
            <div className="mt-4 text-center text-lg">
              <p>{statusMessage}</p>
            </div>
          )}
        </form>
        <div className="mt-16 p-6">
          <p className="text-lg font-medium mb-4">If you need to contact us for any other matters, please use the following contact channels:</p>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              For security incidents, email <a href="mailto:security@survicate.com" className="underline text-blue-500">security@survicate.com</a>.
            </li>
            <li className="mb-2">
              Survicate has appointed a Data Protection Officer, Rudi Kosiór. If you have questions or concerns regarding data protection or compliance with privacy regulations, please don't hesitate to reach out to him by sending an email to <a href="mailto:gdpr@survicate.com" className="underline text-blue-500">gdpr@survicate.com</a>.
            </li>
            <li className="mb-2">
              If you have issues or complaints with service quality, billing, invoicing, or concerns about our policies, please reach out to us anytime through the "send us a message" button inside the Survicate product or send an email to <a href="mailto:support@survicate.com" className="underline text-blue-500">support@survicate.com</a>.
            </li>
            <li className="mb-2">
              For any complaints (e.g. related to sustainability, human rights, or environmental law), please send an email to <a href="mailto:complaints@survicate.com" className="underline text-blue-500">complaints@survicate.com</a>.
            </li>
            <li className="mb-2">
              For any other issues, please send an email to <a href="mailto:hello@survicate.com" className="underline text-blue-500">hello@survicate.com</a>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

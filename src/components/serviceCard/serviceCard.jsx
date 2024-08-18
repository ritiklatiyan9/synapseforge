import React from 'react';
import { ServiceCard } from './Services'; // Make sure to export ServiceCard from Services.jsx

const ServiceGrid = ({ services }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
  </div>
);

export default ServiceGrid;
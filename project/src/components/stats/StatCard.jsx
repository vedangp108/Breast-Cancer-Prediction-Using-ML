import React from 'react';

const StatCard = ({ number, label }) => {
  return (
    <div className="p-6 bg-surface-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <p className="text-4xl font-bold text-primary-600 mb-2">{number}</p>
      <p className="text-surface-600">{label}</p>
    </div>
  );
};

export default StatCard;
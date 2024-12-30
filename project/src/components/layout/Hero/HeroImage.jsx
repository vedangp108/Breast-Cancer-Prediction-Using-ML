import React from 'react';

const HeroImage = () => (
  <div className="relative">
    <img 
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=400"
      alt="Medical AI Technology"
      className="rounded-lg shadow-2xl w-full object-cover"
    />
    <div className="absolute -bottom-6 -right-6 bg-surface-100 p-4 rounded-lg shadow-xl">
      <p className="text-primary-600 font-semibold">Trusted by Healthcare Professionals</p>
    </div>
  </div>
);

export default HeroImage;
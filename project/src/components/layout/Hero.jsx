import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-secondary-700 py-24">
      <div className="absolute inset-0 bg-surface-900 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

const HeroContent = () => (
  <div className="text-surface-50">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Advanced Healthcare with AI Technology
    </h1>
    <p className="text-xl mb-8 text-surface-100 leading-relaxed">
      Experience cutting-edge medical predictions powered by artificial intelligence. Early detection for better healthcare outcomes.
    </p>
    <div className="flex space-x-4">
      <Link to="/predict">
        <Button variant="surface">Start Analysis</Button>
      </Link>
      <Link to="/about">
        <Button variant="outline">Learn More</Button>
      </Link>
    </div>
  </div>
);

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

export default Hero;
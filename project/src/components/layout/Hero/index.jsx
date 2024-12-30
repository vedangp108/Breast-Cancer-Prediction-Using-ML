import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
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
};

export default Hero;
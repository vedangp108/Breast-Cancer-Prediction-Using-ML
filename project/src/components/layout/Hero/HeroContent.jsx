import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

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

export default HeroContent;
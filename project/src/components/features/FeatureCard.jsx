import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../ui/Button';

const FeatureCard = ({ icon, title, description, comingSoon }) => {
  return (
    <div className="bg-surface-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-primary-500 text-4xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-surface-800">{title}</h3>
      <p className="text-surface-600 mb-4">{description}</p>
      <Link to={comingSoon ? "#" : "/predict"}>
        <Button 
          variant={comingSoon ? "disabled" : "primary"} 
          disabled={comingSoon}
          className="w-full"
        >
          {comingSoon ? "Coming Soon" : "Learn More"}
        </Button>
      </Link>
    </div>
  );
};

export default FeatureCard;
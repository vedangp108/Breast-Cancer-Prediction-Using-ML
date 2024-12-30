import React from 'react';
import { motion } from 'framer-motion';

const PredictionTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-surface-100 p-1 rounded-lg inline-flex">
        <TabButton 
          active={activeTab === 'text'} 
          onClick={() => onTabChange('text')}
        >
          Text Analysis
        </TabButton>
        <TabButton 
          active={activeTab === 'image'} 
          onClick={() => onTabChange('image')}
        >
          Image Analysis
        </TabButton>
      </div>
    </div>
  );
};

const TabButton = ({ active, children, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-6 py-2 rounded-lg ${
      active
        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-surface-50'
        : 'text-surface-700 hover:text-primary-600'
    } transition-colors`}
  >
    {children}
  </motion.button>
);

export default PredictionTabs;
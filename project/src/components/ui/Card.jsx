import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

function Card({ children, className = '', hover = true }) {
  return (
    <motion.div 
      className={clsx(
        'bg-white rounded-xl shadow-lg p-8',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Card;
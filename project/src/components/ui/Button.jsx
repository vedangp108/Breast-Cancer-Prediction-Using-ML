import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Button = ({ children, variant = 'primary', className = '', disabled = false, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-surface-50 hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl',
    surface: 'bg-surface-100 text-primary-600 hover:bg-surface-200 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-surface-200 text-surface-100 hover:bg-surface-800 hover:text-surface-50',
    disabled: 'bg-surface-300 text-surface-500 cursor-not-allowed hover:scale-100'
  };

  const variantStyle = disabled ? variants.disabled : variants[variant];

  return (
    <motion.button 
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={clsx(baseStyles, variantStyle, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
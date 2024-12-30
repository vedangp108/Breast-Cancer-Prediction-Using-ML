import React from 'react';
import { motion } from 'framer-motion';

const PredictionResult = ({ result }) => {
  if (!result) return null;

  const isError = result.error;
  const diagnosis = result.prediction === 'Potential Risk' ? 
    'You Have Breast Cancer' : 
    'You Don\'t Have Breast Cancer';

  const getResultStyles = () => {
    if (isError) return 'bg-red-50 border border-red-200';
    return result.prediction === 'Low Risk' 
      ? 'bg-green-50 border border-green-200' 
      : 'bg-yellow-50 border border-yellow-200';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-8 p-6 rounded-lg ${getResultStyles()}`}
    >
      <h3 className="text-xl font-bold mb-2 text-surface-800">Analysis Result</h3>
      {isError ? (
        <p className="text-red-600">{result.error}</p>
      ) : (
        <p className="text-lg font-semibold text-surface-800">{diagnosis}</p>
      )}
      
      <div className="mt-4 p-4 bg-surface-100 rounded-lg border border-surface-200">
        <p className="text-sm text-surface-600">
          <strong>Important Note:</strong> This is a preliminary screening tool and should not be used as a definitive diagnosis. Please consult with healthcare professionals for proper medical evaluation.
        </p>
      </div>
    </motion.div>
  );
};

export default PredictionResult;
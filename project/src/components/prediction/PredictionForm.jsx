import React, { useState } from 'react';
import Button from '../ui/Button';

const PredictionForm = ({ onSubmit, disabled }) => {
  const [formData, setFormData] = useState({
    radius: '',
    texture: '',
    perimeter: '',
    area: '',
    smoothness: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(formData).map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-surface-700 mb-1">
            {field.charAt(0).toUpperCase() + field.slice(1)} Mean
          </label>
          <input
            type="number"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            step="0.01"
            required
            disabled={disabled}
            className="w-full p-3 border border-surface-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-surface-100 disabled:cursor-not-allowed"
          />
        </div>
      ))}
      <Button
        type="submit"
        disabled={disabled}
        variant={disabled ? 'disabled' : 'primary'}
        className="w-full"
      >
        Analyze Data
      </Button>
    </form>
  );
};

export default PredictionForm;
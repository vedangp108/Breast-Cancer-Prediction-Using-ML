import React, { useState } from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-2 border-dashed border-gray-300 rounded-lg p-6"
    >
      <div className="text-center">
        {selectedImage ? (
          <div>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full h-auto mb-4 rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="text-red-600 hover:text-red-700"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <div>
            <div className="mt-2">
              <label className="block">
                <span className="sr-only">Choose image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary-50 file:text-primary-700
                    hover:file:bg-primary-100"
                />
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        )}
      </div>
      <Button
        className="w-full mt-4"
        variant="disabled"
        disabled
      >
        Analyze Image (Coming Soon)
      </Button>
    </motion.div>
  );
};

export default ImageUpload;
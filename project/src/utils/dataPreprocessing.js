import * as tf from '@tensorflow/tfjs';
import { SAMPLE_TRAINING_DATA } from './constants';

export function prepareTrainingData() {
  // Combine benign and malignant samples
  const features = [
    ...SAMPLE_TRAINING_DATA.benign,
    ...SAMPLE_TRAINING_DATA.malignant
  ];
  
  // Create labels (0 for benign, 1 for malignant)
  const labels = [
    ...Array(SAMPLE_TRAINING_DATA.benign.length).fill(0),
    ...Array(SAMPLE_TRAINING_DATA.malignant.length).fill(1)
  ];
  
  return {
    xs: tf.tensor2d(features),
    ys: tf.tensor2d(labels, [labels.length, 1])
  };
}

export function normalizeFeatures(features) {
  // Simple min-max normalization based on typical ranges
  const normalized = features.map((value, index) => {
    switch (index) {
      case 0: // radius
        return value / 30;
      case 1: // texture
        return value / 40;
      case 2: // perimeter
        return value / 200;
      case 3: // area
        return value / 2000;
      case 4: // smoothness
        return value / 0.2;
      default:
        return value;
    }
  });
  
  return normalized;
}
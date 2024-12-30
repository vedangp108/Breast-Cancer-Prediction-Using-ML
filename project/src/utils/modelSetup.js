import * as tf from '@tensorflow/tfjs';
import { MODEL_CONFIG } from './constants';

export function createModel() {
  const model = tf.sequential();
  
  // Input layer
  model.add(tf.layers.dense({
    units: MODEL_CONFIG.hiddenLayers[0],
    activation: 'relu',
    inputShape: [MODEL_CONFIG.inputFeatures]
  }));
  
  // Hidden layer
  model.add(tf.layers.dense({
    units: MODEL_CONFIG.hiddenLayers[1],
    activation: 'relu'
  }));
  
  // Output layer
  model.add(tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  }));
  
  model.compile({
    optimizer: tf.train.adam(MODEL_CONFIG.learningRate),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });
  
  return model;
}
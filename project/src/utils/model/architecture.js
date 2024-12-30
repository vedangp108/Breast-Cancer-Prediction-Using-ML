import * as tf from '@tensorflow/tfjs';

export function createModel() {
  const model = tf.sequential();
  
  // Input layer
  model.add(tf.layers.dense({
    units: 16,
    activation: 'relu',
    inputShape: [5]
  }));
  
  // Hidden layer
  model.add(tf.layers.dense({
    units: 8,
    activation: 'relu'
  }));
  
  // Output layer
  model.add(tf.layers.dense({
    units: 1,
    activation: 'sigmoid'
  }));
  
  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });
  
  return model;
}
import * as tf from '@tensorflow/tfjs';

let modelInstance = null;

export async function initTensorFlow() {
  try {
    await tf.ready();
    console.log('TensorFlow.js initialized successfully');
  } catch (error) {
    console.error('TensorFlow.js initialization error:', error);
    throw new Error('Failed to initialize TensorFlow.js');
  }
}

export function getModel() {
  return modelInstance;
}

export function setModel(model) {
  modelInstance = model;
}

export function disposeModel() {
  if (modelInstance) {
    modelInstance.dispose();
    modelInstance = null;
  }
}
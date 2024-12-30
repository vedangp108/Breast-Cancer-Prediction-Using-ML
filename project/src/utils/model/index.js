import * as tf from '@tensorflow/tfjs';
import { createModel } from './architecture';
import { loadTrainingData } from './data';
import { normalizeFeatures } from './preprocessing';
import { initTensorFlow, getModel, setModel } from './modelLoader';

export async function initializeModel() {
  let model = getModel();
  if (model) return model;

  try {
    await initTensorFlow();
    
    const { features, labels } = await loadTrainingData();
    model = createModel();
    
    const xs = tf.tensor2d(features);
    const ys = tf.tensor2d(labels, [labels.length, 1]);

    await model.fit(xs, ys, {
      epochs: 50,
      shuffle: true,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(`Epoch ${epoch + 1}: loss = ${logs.loss.toFixed(4)}`);
        }
      }
    });

    xs.dispose();
    ys.dispose();
    
    setModel(model);
    return model;
  } catch (error) {
    console.error('Model initialization error:', error);
    throw new Error('Failed to initialize model');
  }
}

export async function predict(features) {
  const model = getModel();
  if (!model) {
    throw new Error('Model not initialized');
  }

  try {
    const normalizedFeatures = normalizeFeatures(features);
    const inputTensor = tf.tensor2d([normalizedFeatures]);
    const prediction = await model.predict(inputTensor).data();
    inputTensor.dispose();
    return prediction[0];
  } catch (error) {
    console.error('Prediction error:', error);
    throw new Error('Prediction failed');
  }
}
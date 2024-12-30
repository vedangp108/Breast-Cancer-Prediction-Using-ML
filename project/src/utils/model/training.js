import * as tf from '@tensorflow/tfjs';
import { createModel } from './architecture';
import { normalizeFeatures, prepareTensorData } from './preprocessing';
import { loadTrainingData } from './data';

let trainedModel = null;

export async function initializeModel() {
  if (trainedModel) return trainedModel;

  try {
    const model = createModel();
    const data = await loadTrainingData();
    const { xs, ys } = prepareTensorData(data.features, data.labels);
    
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
    
    trainedModel = model;
    return model;
  } catch (error) {
    console.error('Model initialization error:', error);
    throw new Error('Failed to initialize model');
  }
}

export async function predict(features) {
  try {
    if (!trainedModel) {
      await initializeModel();
    }

    const normalizedFeatures = normalizeFeatures(features);
    const inputTensor = tf.tensor2d([normalizedFeatures]);
    const prediction = await trainedModel.predict(inputTensor).data();
    inputTensor.dispose();
    
    return prediction[0];
  } catch (error) {
    console.error('Prediction error:', error);
    throw new Error('Prediction failed');
  }
}
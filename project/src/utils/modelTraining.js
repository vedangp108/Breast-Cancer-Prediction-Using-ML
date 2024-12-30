import * as tf from '@tensorflow/tfjs';
import { MODEL_CONFIG } from './constants';
import { createModel } from './modelSetup';
import { prepareTrainingData, normalizeFeatures } from './dataPreprocessing';

let trainedModel = null;

export async function initializeModel() {
  if (trainedModel) return trainedModel;

  try {
    // Create new model
    const model = createModel();
    
    // Prepare training data
    const { xs, ys } = prepareTrainingData();
    
    // Train the model
    await model.fit(xs, ys, {
      epochs: MODEL_CONFIG.epochs,
      shuffle: true,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(`Epoch ${epoch + 1}: loss = ${logs.loss.toFixed(4)}`);
        }
      }
    });
    
    // Cleanup tensors
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

    // Normalize input features
    const normalizedFeatures = normalizeFeatures(features);
    
    // Convert to tensor and make prediction
    const inputTensor = tf.tensor2d([normalizedFeatures]);
    const prediction = await trainedModel.predict(inputTensor).data();
    
    // Cleanup
    inputTensor.dispose();
    
    return prediction[0];
  } catch (error) {
    console.error('Prediction error:', error);
    throw new Error('Prediction failed');
  }
}
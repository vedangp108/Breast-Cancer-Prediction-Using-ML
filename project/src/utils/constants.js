// Model configuration constants
export const MODEL_CONFIG = {
  inputFeatures: 5,
  hiddenLayers: [16, 8],
  learningRate: 0.001,
  epochs: 50
};

// Sample training data (mean values from Wisconsin Breast Cancer dataset)
export const SAMPLE_TRAINING_DATA = {
  benign: [
    [12.1, 17.8, 78.9, 462.1, 0.09],
    [11.8, 17.2, 75.7, 443.3, 0.08],
    [11.4, 16.9, 73.2, 358.9, 0.10],
  ],
  malignant: [
    [17.9, 21.3, 115.2, 978.5, 0.12],
    [18.4, 22.8, 120.3, 1050.2, 0.11],
    [19.2, 21.9, 123.4, 1088.1, 0.13],
  ]
};
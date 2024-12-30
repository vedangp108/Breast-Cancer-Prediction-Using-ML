import { loadCSVData } from '../data/csvLoader';
import { breastCancerData } from '../data/breastCancerData';

export async function loadTrainingData() {
  try {
    const rawData = await loadCSVData(breastCancerData);
    return transformData(rawData);
  } catch (error) {
    console.error('Error loading training data:', error);
    throw new Error('Failed to load training data');
  }
}

function transformData(rawData) {
  const features = [];
  const labels = [];

  for (const row of rawData) {
    if (!row.radius_mean) continue; // Skip empty rows
    
    features.push([
      Number(row.radius_mean),
      Number(row.texture_mean),
      Number(row.perimeter_mean),
      Number(row.area_mean),
      Number(row.smoothness_mean)
    ]);
    
    labels.push(row.diagnosis === 'M' ? 1 : 0);
  }

  return { features, labels };
}
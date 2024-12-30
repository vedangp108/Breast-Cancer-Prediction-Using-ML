export function normalizeFeatures(features) {
  const ranges = {
    radius: 30,
    texture: 40,
    perimeter: 200,
    area: 2000,
    smoothness: 0.2
  };

  return features.map((value, index) => {
    const featureName = Object.keys(ranges)[index];
    return value / ranges[featureName];
  });
}
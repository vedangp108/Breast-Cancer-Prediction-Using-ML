export function transformBreastCancerData(rawData) {
  return rawData.map(row => ({
    features: [
      parseFloat(row.radius_mean),
      parseFloat(row.texture_mean),
      parseFloat(row.perimeter_mean),
      parseFloat(row.area_mean),
      parseFloat(row.smoothness_mean)
    ],
    label: row.diagnosis === 'M' ? 1 : 0
  }));
}
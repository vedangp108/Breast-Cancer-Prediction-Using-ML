import Papa from 'papaparse';

export async function loadCSVData(csvText) {
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
      dynamicTyping: true
    });
  });
}
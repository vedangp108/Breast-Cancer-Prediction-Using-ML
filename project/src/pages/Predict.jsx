import React, { useState, useEffect } from 'react';
import PredictionForm from '../components/prediction/PredictionForm';
import ImageUpload from '../components/ImageUpload';
import PredictionResult from '../components/prediction/PredictionResult';
import PredictionTabs from '../components/prediction/PredictionTabs';
import { initializeModel, predict } from '../utils/model';
import Card from '../components/ui/Card';

function Predict() {
  const [activeTab, setActiveTab] = useState('text');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    async function loadModel() {
      try {
        setIsLoading(true);
        await initializeModel();
        setModelReady(true);
      } catch (error) {
        console.error('Model loading error:', error);
        setResult({
          prediction: 'Error',
          error: 'Failed to load the AI model. Please try again later.'
        });
      } finally {
        setIsLoading(false);
      }
    }
    loadModel();
  }, []);

  const handlePrediction = async (formData) => {
    if (!modelReady) {
      setResult({
        prediction: 'Error',
        error: 'Model is not ready. Please wait and try again.'
      });
      return;
    }

    try {
      setIsLoading(true);
      const features = [
        parseFloat(formData.radius),
        parseFloat(formData.texture),
        parseFloat(formData.perimeter),
        parseFloat(formData.area),
        parseFloat(formData.smoothness)
      ];

      const probability = await predict(features);
      setResult({
        prediction: probability > 0.5 ? 'Potential Risk' : 'Low Risk'
      });
    } catch (error) {
      console.error('Prediction error:', error);
      setResult({
        prediction: 'Error',
        error: 'An error occurred during prediction. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-surface-800">
            Medical Analysis Center
          </h1>

          <PredictionTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="max-w-4xl mx-auto">
            {activeTab === 'text' ? (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-surface-800">Enter Measurements</h2>
                <PredictionForm onSubmit={handlePrediction} disabled={!modelReady || isLoading} />
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-surface-800">Upload Medical Image</h2>
                <ImageUpload />
              </div>
            )}

            {isLoading && (
              <div className="mt-4 text-center text-surface-600">
                {modelReady ? 'Processing analysis...' : 'Initializing AI model...'}
              </div>
            )}

            <PredictionResult result={result} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Predict;
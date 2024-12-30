from predictor.models.breast_cancer import BreastCancerPredictor

class PredictionService:
    def __init__(self):
        self.predictor = BreastCancerPredictor()
    
    def predict_breast_cancer(self, radius, texture, perimeter, area, smoothness):
        features = (radius, texture, perimeter, area, smoothness)
        prediction = self.predictor.predict(features)
        return "have" if prediction == 1 else "don't have"
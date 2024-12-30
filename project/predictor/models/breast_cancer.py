import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

class BreastCancerPredictor:
    def __init__(self):
        self.model = None
        self._load_and_train_model()
    
    def _load_and_train_model(self):
        df = pd.read_csv('static/Breast_train.csv')
        data = df.values
        X = data[:, :-1]
        Y = data[:, -1]
        
        self.model = RandomForestClassifier(
            n_estimators=16,
            criterion='entropy',
            max_depth=5
        )
        self.model.fit(np.nan_to_num(X), Y)
    
    def predict(self, features):
        user_data = np.array(features).reshape(1, -1)
        predictions = self.model.predict(user_data)
        return int(predictions[0])
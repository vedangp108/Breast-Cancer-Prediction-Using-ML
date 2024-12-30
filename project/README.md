# CuraPredict - Medical AI Assistant

CuraPredict is an advanced medical prediction system that leverages artificial intelligence to assist in early detection and diagnosis of medical conditions. The system currently focuses on breast cancer prediction using machine learning algorithms.

## Features

- 🧠 AI-powered medical predictions
- 🔍 Advanced image analysis capabilities
- 📊 Real-time data processing
- 🔒 Secure and private data handling
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend:**
  - React.js
  - TailwindCSS
  - TensorFlow.js
  - Chart.js

- **Backend:**
  - Django
  - TensorFlow
  - scikit-learn
  - PostgreSQL

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python (3.8 or higher)
- pip (Python package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/curapredict.git
   cd curapredict
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the development server:
   ```bash
   # Frontend
   npm run dev

   # Backend
   python manage.py runserver
   ```

## Project Structure

```
curapredict/
├── src/                # Frontend React application
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   └── utils/         # Utility functions and helpers
├── predictor/         # Backend Django application
│   ├── models/        # ML models and data processing
│   └── services/      # Business logic and services
└── templates/         # Django HTML templates
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is for educational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment.
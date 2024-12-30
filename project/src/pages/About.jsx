import React from 'react';

function About() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-12 text-white">
            <h1 className="text-4xl font-bold mb-4">About CuraPredict</h1>
            <p className="text-xl">Revolutionizing healthcare with artificial intelligence</p>
          </div>
          
          <div className="p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At CuraPredict, we're dedicated to improving healthcare outcomes through innovative AI technology. 
                  Our mission is to provide accessible, accurate, and early detection tools to support healthcare professionals 
                  and patients alike.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Technology</h2>
                <p className="text-gray-600">
                  We utilize state-of-the-art machine learning algorithms and deep neural networks to analyze medical data 
                  and provide accurate predictions. Our technology is continuously improved and validated by medical professionals.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Advanced AI Models</h3>
                  <p className="text-gray-600">
                    Our AI models are trained on extensive medical datasets and validated by healthcare professionals.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Privacy First</h3>
                  <p className="text-gray-600">
                    We prioritize data security and patient privacy with enterprise-grade encryption and security measures.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    Our team constantly works on improving our algorithms and expanding our capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
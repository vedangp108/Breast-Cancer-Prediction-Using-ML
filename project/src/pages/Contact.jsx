import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon="map-marker-alt" className="mt-1" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p>123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon="phone" className="mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon="envelope" className="mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>contact@curapredict.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
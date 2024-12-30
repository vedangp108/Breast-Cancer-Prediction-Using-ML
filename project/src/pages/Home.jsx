import React from 'react';
import Hero from '../components/layout/Hero';
import FeatureCard from '../components/features/FeatureCard';
import StatCard from '../components/stats/StatCard';

const Home = () => {
  return (
    <div className="bg-surface-50">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-800 mb-4">Our Medical Services</h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions powered by advanced technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="brain"
              title="AI Analysis"
              description="Advanced breast cancer prediction using state-of-the-art machine learning"
            />
            <FeatureCard
              icon="microscope"
              title="Image Detection"
              description="Precise medical image analysis for enhanced diagnostics"
              comingSoon
            />
            <FeatureCard
              icon="heartbeat"
              title="Health Monitoring"
              description="Continuous health tracking and predictive analytics"
              comingSoon
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard number="98%" label="Accuracy Rate" />
            <StatCard number="24/7" label="AI Availability" />
            <StatCard number="10k+" label="Predictions Made" />
            <StatCard number="100%" label="Data Security" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
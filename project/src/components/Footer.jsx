import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">CuraPredict</h3>
            <p className="text-gray-400">
              Advanced medical predictions powered by artificial intelligence.
            </p>
            <div className="mt-4 flex space-x-4">
              <SocialLink icon={['fab', 'twitter']} href="#" />
              <SocialLink icon={['fab', 'linkedin']} href="#" />
              <SocialLink icon={['fab', 'facebook']} href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/predict">Predictions</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <FooterLinks>
              <FooterLink to="/predict">AI Analysis</FooterLink>
              <FooterLink to="#">Image Detection</FooterLink>
              <FooterLink to="#">Health Monitoring</FooterLink>
            </FooterLinks>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <FontAwesomeIcon icon="map-marker-alt" className="mr-2" />
                123 Medical Center Drive
              </p>
              <p>
                <FontAwesomeIcon icon="phone" className="mr-2" />
                +1 (555) 123-4567
              </p>
              <p>
                <FontAwesomeIcon icon="envelope" className="mr-2" />
                contact@curapredict.com
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 CuraPredict. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">
              For educational purposes only. Not for medical diagnosis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLinks = ({ children }) => (
  <ul className="space-y-2">
    {children}
  </ul>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ icon, href }) => (
  <a 
    href={href}
    className="text-gray-400 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default Footer;
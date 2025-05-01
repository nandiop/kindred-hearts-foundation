
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ngo-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kindred Hearts Foundation</h3>
            <p className="mb-4 text-gray-300">
              Empowering communities through sustainable development, education, and skill-building initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-ngo-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-ngo-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-ngo-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-ngo-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-ngo-accent transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-ngo-accent transition-colors">Gallery</Link></li>
              <li><Link to="/events" className="hover:text-ngo-accent transition-colors">Events</Link></li>
              <li><Link to="/donate" className="hover:text-ngo-accent transition-colors">Donate</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Programs */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-ngo-accent transition-colors">Skill Development</a></li>
              <li><a href="#" className="hover:text-ngo-accent transition-colors">Education Support</a></li>
              <li><a href="#" className="hover:text-ngo-accent transition-colors">Community Health</a></li>
              <li><a href="#" className="hover:text-ngo-accent transition-colors">Environmental Projects</a></li>
              <li><a href="#" className="hover:text-ngo-accent transition-colors">Volunteer Opportunities</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="shrink-0 mt-1" />
                <span>info@kindredhearts.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="shrink-0 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <address className="not-italic">
                  123 Community Lane<br />
                  Hopeville, CA 90210
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Kindred Hearts Foundation. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

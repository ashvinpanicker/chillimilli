import React from 'react';
import { Flame, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chilli-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Flame className="h-6 w-6 text-spicy-yellow" />
              <span className="ml-2 text-xl font-bold">Chilli Milli</span>
            </div>
            <p className="text-gray-300">
              Spicing up your snack time with our hot & spicy gummy cubes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-spicy-yellow">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-spicy-yellow">Features</a></li>
              <li><a href="#product" className="text-gray-300 hover:text-spicy-yellow">Product</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@chillimilli.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Mumbai, India</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-spicy-yellow">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-spicy-yellow">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-spicy-yellow">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Chilli Milli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
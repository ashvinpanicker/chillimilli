import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="w-full bg-spicy-yellow">
        <div className="">
          <img 
            src="/HebogaFooterBanner.jpeg" 
            alt="Heboga Promise" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-spicy-yellow">Heboga</span>
            </div>
            <p className="text-gray-200">
              Crafting innovative confectionery experiences that delight and inspire.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-spicy-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-200 hover:text-spicy-yellow">Home</a></li>
              <li><a href="#features" className="text-gray-200 hover:text-spicy-yellow">Products</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-spicy-yellow">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-spicy-yellow">Contact</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Email: info@heboga.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Bengaluru, India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-spicy-yellow">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-spicy-yellow">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-spicy-yellow">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-spicy-yellow">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Heboga Confections India Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
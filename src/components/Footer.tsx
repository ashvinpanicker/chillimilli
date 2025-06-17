import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="w-full bg-spicy-yellow">
        <div className="">
          <img 
            src="/HebogaFooterBanner.jpeg" 
            alt="Heboga Promise - On our promise to produce The World's finest Confectionery!" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-spicy-yellow">Heboga</span>
            </div>
            <p className="text-gray-300 mb-4">
              Crafting flavourful, fun, and innovative snacks and sweets for the modern Indian consumer.
            </p>
            <p className="text-sm text-gray-400">
              Joyful indulgence, honest ingredients, and bold innovation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-spicy-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-spicy-yellow transition">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-spicy-yellow transition">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-spicy-yellow transition">About</a></li>
              <li><a href="#product" className="text-gray-300 hover:text-spicy-yellow transition">Catalogue</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-spicy-yellow">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">64, MG Road, Bengaluru - 560001, Karnataka</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:hebogaindia@gmail.com" className="text-sm hover:text-spicy-yellow transition">
                  hebogaindia@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <div className="text-sm">
                  <div>+91-8147383314</div>
                  <div>+91-9663999361</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-spicy-yellow">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com/HebogaIndia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-spicy-yellow transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@HebogaIndia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-spicy-yellow transition">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-spicy-yellow transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-spicy-yellow transition">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-1">🌐 www.heboga.com</p>
              <p>📦 Let's sweeten your shelves!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Heboga Confections India Pvt Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Corporate Gifting | Custom Packaging | Co-Branding Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
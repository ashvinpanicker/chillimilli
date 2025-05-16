import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-chilli-red shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Heboga Logo" className="h-12 mr-2" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-spicy-yellow transition">Home</a>
            <a href="#about" className="text-white hover:text-spicy-yellow transition">About</a>
            <a href="#features" className="text-white hover:text-spicy-yellow transition">Features</a>
            <a href="#product" className="text-white hover:text-spicy-yellow transition">Product</a>
            <button 
              className="bg-spicy-yellow text-chilli-red font-bold py-2 px-4 rounded-full hover:bg-yellow-400 transition"
              onClick={() => scrollToSection('product')}
            >
              Buy Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-white hover:text-spicy-yellow px-3 py-2">Home</a>
            <a href="#about" className="block text-white hover:text-spicy-yellow px-3 py-2">About</a>
            <a href="#features" className="block text-white hover:text-spicy-yellow px-3 py-2">Features</a>
            <a href="#product" className="block text-white hover:text-spicy-yellow px-3 py-2">Product</a>
            <button className="w-full text-center bg-spicy-yellow text-chilli-red font-bold py-2 px-4 rounded-full hover:bg-yellow-400 transition mt-2">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
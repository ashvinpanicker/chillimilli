import { ShoppingBag } from 'lucide-react';
import Hero3D from './Hero3D';
import { scrollToSection } from '../utils';

const Hero = () => {
  return (
    <div
      id="home"
      className="pt-16 bg-gradient-to-b from-chilli-red to-chilli-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-spicy-yellow">Hot & Spicy</span> Gummy Cubes
            </h1>
            <p className="text-xl mb-8">
              Experience the fiery magic of our vegan, low-calorie spicy treats!
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-gradient-to-r from-spicy-yellow to-yellow-400 text-chilli-red font-bold py-3 px-8 rounded-full shadow-lg hover:from-yellow-400 hover:to-spicy-yellow hover:shadow-xl transition-all flex items-center"
                onClick={() => scrollToSection('product')}
              >
                <ShoppingBag className="mr-2" />
                Order Now
              </button>
              <button
                className="border-2 bg-gradient-to-r from-slate-900 to-gray-800 border-spicy-yellow text-spicy-yellow font-bold py-3 px-8 rounded-full shadow-lg hover:border-blue-400 hover:text-blue-400 hover:shadow-xl transition-all"
                onClick={() => scrollToSection('about')}
              >
                <span className="mr-2">🌶️</span>
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Hero3D />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

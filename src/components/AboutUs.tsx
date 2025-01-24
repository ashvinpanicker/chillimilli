import React from 'react';
import { Heart, Award, Star } from 'lucide-react';

const AboutUs = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-chilli-red">Chilli Milli</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Born from a passion for unique flavors and a commitment to quality, Chilli Milli brings you India's first spicy gummy candy that's both vegan and low-calorie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2024, Chilli Milli emerged from a simple yet powerful idea: combining the beloved gummy candy format with India's rich spice heritage. Our journey began when our founder discovered a gap in the market for innovative, spicy treats that could satisfy both sweet cravings and spice lovers.
            </p>
            <p className="text-gray-600">
              Today, we're proud to offer a unique snacking experience that's:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-chilli-red mr-2" />
                100% Vegan and cruelty-free
              </li>
              <li className="flex items-center">
                <Award className="h-5 w-5 text-chilli-red mr-2" />
                Made with premium quality ingredients
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-chilli-red mr-2" />
                Crafted with authentic Indian spices
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Why Choose Chilli Milli?</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Innovation in Every Cube</h4>
                <p className="text-gray-600">Our unique recipe combines traditional Indian spices with modern candy-making techniques, creating a one-of-a-kind taste experience.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Health-Conscious Choice</h4>
                <p className="text-gray-600">With only 10 calories per cube and no artificial preservatives, you can enjoy your spicy treats guilt-free.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Made in India, For India</h4>
                <p className="text-gray-600">Proudly manufactured in India, supporting local communities and maintaining the highest quality standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
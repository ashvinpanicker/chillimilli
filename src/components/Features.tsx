import React from 'react';
import { Leaf, Flame, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-leaf-green" />,
      title: "100% Vegan",
      description: "Made with plant-based ingredients, perfect for everyone"
    },
    {
      icon: <Flame className="h-8 w-8 text-chilli-red" />,
      title: "Perfectly Spicy",
      description: "Unique blend of heat and sweet in every cube"
    },
    {
      icon: <Heart className="h-8 w-8 text-chilli-red" />,
      title: "Low Calorie",
      description: "Enjoy guilt-free spicy treats any time"
    }
  ];

  return (
    <div id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose <span className="text-chilli-red">Chilli Milli</span>?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
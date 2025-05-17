import React from 'react';
import { Leaf, Coffee, Cookie } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cookie className="h-8 w-8 text-chilli-red" />,
      title: "Melts Protein Cookie",
      description: "Indulgent protein-rich cookies that combine taste with nutrition. Perfect for health-conscious snackers."
    },
    {
      icon: <Leaf className="h-8 w-8 text-leaf-green" />,
      title: "Chilli Milli Cubes",
      description: "Revolutionary spicy-sweet gummy cubes that deliver an exciting burst of flavor."
    },
    {
      icon: <Coffee className="h-8 w-8 text-neutral-dark" />,
      title: "Noir Date Coffee",
      description: "Innovative caffeine-free coffee alternative made from premium date seeds."
    }
  ];

  return (
    <div id="features" className="py-20 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Innovative <span className="text-chilli-red">Products</span></h2>
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
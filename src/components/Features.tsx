import React from 'react';
import { Cookie, Coffee, Candy, Palette, ChefHat } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cookie className="h-8 w-8 text-amber-600" />,
      title: "Melts Protein Cookie",
      description: "Fall in love with the world's strongest cookie! High-protein, gluten-free cookies with 12g protein per serving.",
      price: "₹99",
      image: "/WhatsApp Image 2025-06-17 at 15.51.52.jpeg"
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-800" />,
      title: "Noir Date Seed Coffee",
      description: "100% natural, caffeine-free coffee alternative made from roasted date seeds. Gut-friendly and naturally energizing.",
      price: "₹399",
      image: "/WhatsApp Image 2025-06-17 at 17.01.21.jpeg"
    },
    {
      icon: <Candy className="h-8 w-8 text-chilli-red" />,
      title: "Chilli Milli Cubes",
      description: "India's first hot, spicy & sour gummy candy cubes. Small cubes, big flavour, guilt-free goodness!",
      price: "₹5",
      image: "/WhatsApp Image 2025-06-17 at 15.53.13.jpeg"
    },
    {
      icon: <ChefHat className="h-8 w-8 text-amber-700" />,
      title: "Cuvelia Jaggery Choco Fudge",
      description: "Luxury chocolate bar tempered to perfection. A bold chocolate and jaggery fusion that's indulgent and wholesome.",
      price: "₹60",
      image: "/WhatsApp Image 2025-06-17 at 15.51.14.jpeg"
    },
    {
      icon: <Palette className="h-8 w-8 text-pink-600" />,
      title: "Sweeney Sugarcraft",
      description: "Vibrant line of edible art & baking decorations designed to add fun, flair, and finesse to your desserts.",
      price: "Coming Soon",
      image: "/WhatsApp Image 2025-06-17 at 15.53.40.jpeg"
    }
  ];

  return (
    <div id="features" className="py-20 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-chilli-red">Product Range</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From nostalgic treats to globally inspired bites, Heboga is redefining the snacking experience with quality, taste, and heart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center mb-4">{feature.description}</p>
                <div className="text-center">
                  <span className="text-lg font-bold text-chilli-red">{feature.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
const ProductInfo = () => {
  const products = [
    {
      name: "Melts Protein Cookie",
      description: "Rich, chewy, and unforgettable — Melts are made for moments of health, one cookie at a time. The world's strongest cookie with power-packed nutrition.",
      price: "₹99",
      weight: "50g",
      variants: "Chocolate Chunk, Almond Fudge, Coffee Hazelnut",
      features: [
        "12g Protein per Cookie",
        "Gluten-Free",
        "Power-Packed Nutrition",
        "Premium Quality Ingredients"
      ],
      nutrition: {
        calories: "241.8",
        protein: "11.8g",
        carbs: "26.6g",
        fiber: "2.6g"
      }
    },
    {
      name: "Noir Date Seed Coffee",
      description: "Discover the world's finest date seed coffee! A caffeine-free alternative made from roasted date seeds and chicory root. Rich in antioxidants and perfect for mindful coffee lovers.",
      price: "₹399",
      weight: "250g",
      variants: "Original Blend",
      features: [
        "100% Caffeine-Free",
        "Digestive Wellness",
        "Antioxidant-Rich",
        "Reduces Acidity & Jitters"
      ],
      nutrition: {
        benefits: "Liver detox support, Gut-friendly, Naturally energizing"
      }
    },
    {
      name: "Chilli Milli Cubes",
      description: "India's first hot, spicy & sour gummy candy cubes! A bold twist on a nostalgic classic. Zingy, spicy-sweet, and vegan-friendly with small cubes delivering big flavour.",
      price: "₹5",
      weight: "6g",
      variants: "Hot & Spicy",
      features: [
        "100% Vegan",
        "Hot, Spicy & Sour",
        "Guilt-Free Goodness",
        "Natural Flavours"
      ],
      nutrition: {
        carbs: "2.6g",
        fiber: "0.1g",
        sugars: "0.7g",
        sodium: "18.6mg"
      }
    },
    {
      name: "Cuvelia Jaggery Choco Fudge Bar",
      description: "Luxury chocolate bar tempered to perfection. A bold chocolate and jaggery fusion that's both indulgent and wholesome, crafted for the discerning chocolate lover.",
      price: "₹60",
      weight: "40g",
      variants: "Jaggery Chocolate",
      features: [
        "Premium Chocolate",
        "Natural Jaggery",
        "Luxury Experience",
        "Wholesome Indulgence"
      ],
      nutrition: {
        description: "Rich in natural sweetness from jaggery"
      }
    }
  ];

  const platforms = [
    { 
      name: 'Zepto', 
      url: 'https://www.zepto.com',
      logo: '/zepto.png'
    },
    { 
      name: 'Blinkit', 
      url: 'https://blinkit.com',
      logo: '/Blinkit.png'
    },
    { 
      name: 'BigBasket', 
      url: 'https://www.bigbasket.com',
      logo: '/Bigbasket.png'
    },
    { 
      name: 'Instamart', 
      url: 'https://www.swiggy.com/instamart',
      logo: '/instamart.avif'
    }
  ];

  return (
    <div id="product" className="py-20 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-chilli-red">Products</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Joyful indulgence, honest ingredients, and bold innovation — all wrapped in vibrant packaging that tells a story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-chilli-red">{product.price}</span>
                    <span className="text-gray-500 ml-2">per {product.weight}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Variants:</span> {product.variants}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="h-2 w-2 bg-chilli-red rounded-full mr-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.nutrition && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Nutrition Highlights:</h4>
                    <div className="text-sm text-gray-600">
                      {product.nutrition.calories && (
                        <span className="mr-4">Calories: {product.nutrition.calories}</span>
                      )}
                      {product.nutrition.protein && (
                        <span className="mr-4">Protein: {product.nutrition.protein}</span>
                      )}
                      {product.nutrition.carbs && (
                        <span className="mr-4">Carbs: {product.nutrition.carbs}</span>
                      )}
                      {product.nutrition.benefits && (
                        <span>{product.nutrition.benefits}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Available On</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`} 
                  className="w-6 h-6 mr-2"
                />
                <span className="text-neutral-dark font-semibold">{platform.name}</span>
              </a>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Corporate Offerings</h4>
            <p className="text-gray-600 mb-4">
              Perfect for corporate gifting, client engagement, event giveaways, and branded merchandise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                <span className="text-gray-600">Low MOQs</span>
              </div>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                <span className="text-gray-600">Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                <span className="text-gray-600">Custom Packaging</span>
              </div>
              <div className="flex items-center">
                <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                <span className="text-gray-600">Co-Branding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
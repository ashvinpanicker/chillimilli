import { ShoppingBag } from 'lucide-react';

const ProductInfo = () => {
  const products = [
    {
      name: "Chilli Milli Cubes",
      description: "Experience the perfect fusion of heat and sweet with our innovative spicy gummy cubes. Made with all-natural ingredients and packed with intense flavors, these vegan treats deliver a uniquely satisfying kick in every bite.",
      price: "₹5",
      weight: "10g",
      features: [
        "100% Vegan",
        "Low Calorie",
        "Natural Ingredients",
        "Unique Spicy-Sweet Blend"
      ]
    },
    {
      name: "Melts Protein Cookie",
      description: "Where indulgence meets nutrition. Our protein-rich choco chip cookies are crafted to satisfy your sweet cravings while supporting your active lifestyle. Made with premium plant-based ingredients and packed with protein.",
      price: "₹50",
      weight: "50g",
      features: [
        "15g Plant Protein",
        "Rich Chocolate Flavor",
        "All-Natural Ingredients",
        "Perfect Post-Workout Snack"
      ]
    },
    {
      name: "Noir Date Seed Coffee",
      description: "Discover our innovative caffeine-free coffee alternative made from carefully selected date seeds. Rich in antioxidants and naturally energizing, Noir offers a unique coffee experience that's gentle on your system.",
      price: "₹299",
      weight: "250g",
      features: [
        "Caffeine-Free",
        "Rich in Antioxidants",
        "Gut-Friendly",
        "Sustainable Source"
      ]
    }
  ];

  const platforms = [
    { name: 'Zepto', url: 'https://www.zepto.com' },
    { name: 'Blinkit', url: 'https://blinkit.com' },
    { name: 'BigBasket', url: 'https://www.bigbasket.com' }
  ];

  return (
    <div id="product" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-chilli-red">Products</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <span className="text-xl font-bold text-chilli-red">{product.price}</span>
                  <span className="text-gray-500 ml-2">per {product.weight}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Available On</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
              >
                <ShoppingBag className="w-5 h-5 mr-2 text-chilli-red" />
                <span>{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
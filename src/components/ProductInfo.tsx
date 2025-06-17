const ProductInfo = () => {
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
            Where to <span className="text-chilli-red">Find Us</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get your favorite Heboga products delivered fresh to your doorstep through our trusted retail partners.
          </p>
        </div>
        
        <div className="text-center mb-16">
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
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold mb-6 text-gray-800 text-center">Corporate Offerings</h4>
          <p className="text-gray-600 mb-6 text-center text-lg">
            Perfect for corporate gifting, client engagement, event giveaways, and branded merchandise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h5 className="text-lg font-semibold mb-4 text-gray-800">Why Choose Heboga?</h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Memorable, premium products</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Healthy + indulgent options</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Low MOQs for startups & MNCs</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Fast pan-India delivery</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4 text-gray-800">Customizable Options</h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Melts Assorted Cookie Boxes</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Chilli Milli Party Packs</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Cuvelia Mini Bars</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-chilli-red rounded-full mr-3"></span>
                  <span className="text-gray-600">Sweeney Sugarcraft Kits</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h5 className="text-lg font-semibold mb-3 text-gray-800">Co-Branding Available</h5>
            <p className="text-gray-600 text-sm">
              Custom packaging with your logo, themed inserts, ribbons & QR codes for campaigns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
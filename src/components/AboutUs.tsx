const AboutUs = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-chilli-red">Heboga Confections</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A new-age confectionery company based in India, dedicated to crafting flavourful, fun, and innovative snacks and sweets for the modern Indian consumer. We believe in joyful indulgence, honest ingredients, and bold innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Heboga Confections is redefining the snacking experience with quality, taste, and heart. From nostalgic treats to globally inspired bites, we craft products that tell a story through vibrant packaging and exceptional flavors.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Innovation</h4>
                <p className="text-gray-600">
                  Our state-of-the-art R&D facility continuously develops unique formulations that push the boundaries of confectionery. From spicy gummies to protein cookies and caffeine-free coffee alternatives, we're always exploring new horizons.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Quality</h4>
                <p className="text-gray-600">
                  We source only the finest ingredients and maintain rigorous quality standards throughout our production process. Every product bearing the Heboga name delivers an exceptional experience with honest ingredients.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Brand Experience</h4>
                <p className="text-gray-600">
                  Each Heboga product is crafted to create memorable moments. We believe in building lasting connections through exceptional products that resonate with modern consumer values and aspirations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Vision</h3>
                <p className="text-gray-600">
                  To craft the world's finest confectionery by becoming the most innovative and beloved confectionery manufacturer, setting new standards for quality, taste, and consumer experience globally.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Mission</h3>
                <p className="text-gray-600">
                  To create flavourful, fun, and innovative snacks and sweets that bring joy to the modern consumer while prioritizing honest ingredients, bold innovation, and sustainable practices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Promise</h3>
                <p className="text-gray-600">
                  Every Heboga product represents our commitment to joyful indulgence, honest ingredients, and bold innovation — all wrapped in vibrant packaging that tells a story and creates memorable experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-chilli-red to-chilli-dark text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Heboga?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Memorable Products</h4>
              <p className="text-sm opacity-90">Premium quality that creates lasting impressions</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Healthy + Indulgent</h4>
              <p className="text-sm opacity-90">Perfect balance of nutrition and taste</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Flexible Orders</h4>
              <p className="text-sm opacity-90">Low MOQs for startups & MNCs</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Fast Delivery</h4>
              <p className="text-sm opacity-90">Pan-India delivery network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
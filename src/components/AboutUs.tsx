
const AboutUs = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-chilli-red">Heboga Confections</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            An Indian-based company specialising in crafting unique, plant-based confectionery products inspired by popular flavours from across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600">
              Heboga Confections Private Limited aims to revolutionise the confectionary & food market by offering a diverse range of innovative, high-quality gummy, lollipops, candies, popsicles confections tailored to modern consumer preferences.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                <p className="text-gray-600">
                  Continuously develop unique confectionary & food formulations that cater to changing tastes and dietary preferences, including organic, vegan, and sugar-free options.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Quality</h4>
                <p className="text-gray-600">
                  Prioritise sourcing premium ingredients and adhering to stringent quality standards throughout the production process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Brand Experience</h4>
                <p className="text-gray-600">
                  "Heboga" will not only offer exceptional confectionaries & food products but also create an immersive brand experience that resonates with consumers.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-600">
                  To become the largest and most trusted confectionery & food products company by 2030, delivering innovation, quality, and joy to customers worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-600">
                  To craft exceptional confectionery & food products that bring joy to every moment, prioritise customer satisfaction, embrace innovation, and uphold sustainability and ethical practices in all we do.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Chilli Milli Launch</h3>
                <p className="text-gray-600">
                  After months of refining the recipe with various food technologists at our in-house lab, we're launching Chilli Milli Cubes in Bengaluru, available in local Kirana shops, smoke shops, supermarkets, and popular online platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
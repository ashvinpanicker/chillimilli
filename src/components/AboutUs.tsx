const AboutUs = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-chilli-red">Heboga Confections</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of confectionery with innovative, plant-based products that blend global flavors with Indian traditions. From spicy gummies to protein-rich cookies and natural coffee alternatives, we're crafting experiences that delight and nourish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600">
              Founded with a vision to revolutionize the global confectionery landscape, Heboga Confections began with a simple idea: create extraordinary treats that bring joy while embracing innovation and sustainability. Today, we're proud to offer a diverse portfolio of products that challenge conventions and delight consumers worldwide.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                <p className="text-gray-600">
                  Our state-of-the-art R&D facility continuously develops unique formulations that push the boundaries of what's possible in confectionery. From our signature spicy gummies to protein-enriched cookies and innovative coffee alternatives, we're always exploring new horizons.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Quality</h4>
                <p className="text-gray-600">
                  We source only the finest ingredients and maintain rigorous quality standards throughout our production process. Our commitment to excellence ensures that every product bearing the Heboga name delivers an exceptional experience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Brand Experience</h4>
                <p className="text-gray-600">
                  Each Heboga product is crafted to create memorable moments. We believe in building lasting connections with our customers through exceptional products and experiences that resonate with their values and aspirations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-600">
                  To become the world's largest and most innovative confectionery manufacturer by 2035, leading the industry in sustainable, plant-based products that bring joy to consumers globally while setting new standards for quality and innovation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-600">
                  To craft exceptional confectionery and food products that celebrate global flavors while prioritizing sustainability and ethical practices. We're committed to delighting consumers with innovative, plant-based treats that nourish both body and soul.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                <p className="text-gray-600">
                  Every Heboga product represents our commitment to excellence, innovation, and sustainability. From our vibrant Chilli Milli Cubes to our nourishing Melts Cookies and refreshing Noir Coffee, we're dedicated to creating products that inspire and excite.
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
import React from 'react';
import ad from '../../dist/assets/ad.jpeg';

const ProductInfo = () => {
  return (
    <div id="product" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-4xl font-bold mb-6">
              Made with Love in <span className="text-chilli-red">India</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Chilli Milli Cubes are crafted with passion, bringing the perfect
              blend of heat and sweet to spice lovers everywhere. Each cube is a
              tiny explosion of flavor that will leave you craving more!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                Net Weight: 10g per pack
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                Price: Rs. 5 only
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-chilli-red rounded-full mr-2"></span>
                Available in stores near you
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src={ad}
                alt="Chilli Milli Cubes Package"
                className="rounded-lg h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

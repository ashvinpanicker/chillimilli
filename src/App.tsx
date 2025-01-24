import React from 'react';
import { Flame, Leaf, ShoppingBag, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import ProductInfo from './components/ProductInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <ProductInfo />
      <Footer />
    </div>
  );
}

export default App;
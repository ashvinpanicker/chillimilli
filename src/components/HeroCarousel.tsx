import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/ad.jpeg',
    title: "India's First Hot & Spicy Gummy Cubes",
    description: "Experience the fiery magic of our vegan, low-calorie spicy treats!",
    buttonText: "Order Now",
    buttonLink: "#product"
  },
  {
    id: 2,
    image: '/melts.jpeg',
    title: "The Cookie That Lifts",
    description: "Indulge in our protein-packed choco chip cookies",
    buttonText: "Learn More",
    buttonLink: "#about"
  },
  {
    id: 3,
    image: '/noir.jpeg',
    title: "Discover Noir Coffee",
    description: "100% Natural, Gut Friendly & Naturally Energizing",
    buttonText: "Shop Now",
    buttonLink: "#product"
  }
];

const HeroCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-[600px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-spicy-yellow text-chilli-red font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full transition-opacity duration-300 hover:bg-white">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full transition-opacity duration-300 hover:bg-white">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default HeroCarousel;
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/FooterBanner.jpeg',
    title: "Redefining Indian Confectionery",
    description: "Experience our innovative blend of global flavors with local traditions. From spicy gummies to protein cookies, we're crafting joy in every bite.",
    buttonText: "Explore Our Products",
    buttonLink: "#product"
  },
  {
    id: 2,
    image: '/Melts cover.jpeg',
    title: "Melts Protein Cookie",
    description: "Where indulgence meets nutrition. A perfect blend of rich chocolate and plant-based protein that lifts your spirits and powers your day.",
    buttonText: "Discover Melts",
    buttonLink: "#product"
  },
  {
    id: 3,
    image: '/NoirCoffeeBanner.jpeg',
    title: "Noir Date Seed Coffee",
    description: "Embrace the richness of our caffeine-free coffee alternative. 100% natural, gut-friendly, and naturally energizing.",
    buttonText: "Experience Noir",
    buttonLink: "#product"
  }
];

const HeroCarousel = () => {
  const [ isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-[600px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="swiper-left absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full transition-opacity duration-300 hover:bg-white">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button className="swiper-right absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full transition-opacity duration-300 hover:bg-white">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-left',
          nextEl: '.swiper-right',
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
                className="w-full h-full object-cover responsive"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-spicy-yellow text-chilli-red font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all"
                    style={ isHovered ? { scale: '1.05', transition: 'scale 0.2s ease-in-out' } : {} }
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
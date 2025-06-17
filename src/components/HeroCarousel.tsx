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
    title: "Crafting the World's Finest Confectionery",
    description: "From nostalgic treats to globally inspired bites, Heboga is redefining the snacking experience with quality, taste, and heart. Joyful indulgence, honest ingredients, and bold innovation.",
    buttonText: "Explore Our Products",
    buttonLink: "#product"
  },
  {
    id: 2,
    image: '/Melts cover.jpeg',
    title: "Melts Protein Cookie",
    description: "Fall in love with the world's strongest cookie! Rich, chewy, and unforgettable with 12g protein per serving. Made for moments of health, one cookie at a time.",
    buttonText: "Discover Melts",
    buttonLink: "#product"
  },
  {
    id: 3,
    image: '/NoirCoffeeBanner.jpeg',
    title: "Noir Date Seed Coffee",
    description: "Discover the world's finest date seed coffee! 100% natural, caffeine-free, gut-friendly, and naturally energizing. Perfect for mindful coffee lovers.",
    buttonText: "Experience Noir",
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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto">{slide.description}</p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-spicy-yellow text-neutral-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
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
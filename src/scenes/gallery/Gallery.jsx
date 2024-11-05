import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import { FreeMode, Autoplay } from "swiper/modules";

import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";
import gallery7 from "../../assets/gallery7.png";
import { useState } from "react";

const Gallery = ({ setSelectedPage }) => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="gallery"
      className="flex items-center justify-center flex-col px-4"
    >
      <motion.h2
        onViewportEnter={() => setSelectedPage("gallery")}
        className="text-2xl font-bold text-black-10 place-self-start m-10 md:text-3xl mb-7"
      >
        معرض الصور
      </motion.h2>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[FreeMode, Autoplay]}
        className="w-full"
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides for small screens
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3, // 3 slides for medium screens
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4, // 4 slides for large screens
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5, // 5 slides for extra-large screens
            spaceBetween: 15,
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            className="transition-transform duration-300 ease-in-out"
          >
            <div className="relative h-full rounded-3xl overflow-hidden aspect-square">
              <img
                src={item}
                alt={`Gallery Image ${index + 1}`}
                className="h-full w-full object-cover rounded-3xl transition-transform duration-300 ease-in-out"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;

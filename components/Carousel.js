import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

export default function CustomCarousel() {
  const images = [
    '/showcase1.webp',
    '/showcase2.webp',
    '/showcase3.webp',
    '/showcase4.webp',
    '/showcase5.webp',
    '/showcase6.webp',
    '/showcase7.webp',
    '/showcase8.webp'
  ];

  return (
    <div className="carousel-container  mx-auto w-11/12 h-[30vh] xs:h-[32vh] ls:h-[35vh] ls:w-[80%] sm:h-[22rem] md:h-[23rem]
lg:h-[42.5rem] sm:w-[35rem]  md:w-[36.5rem]  lg:w-[89%] xl:w-[70rem] 2xl:w-[111vh] 2xl:h-[69vh] ">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}  
        autoplay={{
          delay: 2000,  // Time between slides (in milliseconds)
          disableOnInteraction: false,  // Autoplay will not be paused when you interact with it
        }}
        spaceBetween={5}
        slidesPerView={1.7}  // Adjust this to preview adjacent slides
        loop={true}
        centeredSlides={true}
        navigation

        scrollbar={{ draggable: true }}
        className="w-full h-full  rounded-lg"
        
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'bottom'  }}
              
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

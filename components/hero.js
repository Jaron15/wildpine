import Image from "next/image";
import { useContext, useEffect } from 'react';
import { ScrollContext } from './ScrollContext';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { setIsHeroInView } = useContext(ScrollContext);

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: '-15% 0px 0px 0px',
  });

  useEffect(() => {
    setIsHeroInView(inView);
  }, [inView, setIsHeroInView]);

  return (
    <div className="relative w-full h-[20.7rem] md:h-[25.5rem] lg:h-[40rem] font-sans">
      {/* Background Image */}
      <Image
        src="/home.webp"
        alt="Hero Image"
        fill
        className="object-cover"
        style={{ objectPosition: "50% 50%" }}
        priority
        quality={100}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-start md:items-center justify-center text-white md:mb-8">
        {/* Responsive Container */}
        <div className="flex flex-col items-center  md:items-center md:justify-center  h-full">
          {/* Logo */}
          <div className="mb-0 xs:mb-0 sm:mb-[-16px] w-full flex justify-center ">
            <Image
              ref={ref}
              src="/logoBig.webp"
              alt="Logo"
              width={600}
              height={600}
              className="w-72 h-44 xxs:h-48 md:h-full md:w-[20.6rem] mr-10 lg:h-80 lg:w-[30rem]"
            />
          </div>

          {/* Text Content */}
          <div className="text-center mx-2 xs:mx-6 h-full flex flex-col xs:justify-start justify-center mb-[25px] md:mb-0 sm:justify-center items-center w-full xl:w-3/4 sm:space-y-1 md:space-y-4 xl:space-y-8 md:w-5/6 text-shadow-custom">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ">
              A Space for Great Coffee and Even Better Conversations
            </h1>
            <p className="mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed w-[95%] sm:w-5/6 text-center">
              High quality bean juice, all naturally derived energy drinks & more! Come make a memory with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

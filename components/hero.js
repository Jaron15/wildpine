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
    <div className="relative w-full h-[50vh] md:h-[50vh] lg:h-[70vh]">
      {/* Background Image */}
      <Image
        src="/home.webp"
        alt="Hero Image"
        fill
        className="object-cover  sm:object-fill"
        style={{ objectPosition: "50% 50%" }}
        priority
        quality={100}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-start sm:items-center justify-center text-white sm:mb-8">
        {/* Responsive Container */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center  sm:pr-52">
          {/* Logo */}
          <div  className="mb-4 sm:mb-0 sm:mr-0">
            <Image
              ref={ref}
              src="/logoBig.webp"
              alt="Logo"
              width={600}
              height={600}
              className="w-72 h-48 mr-10 sm:w-full sm:h-full"
            />
          </div>

          {/* Text Content */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-bold">Your Title Here</h1>
            <p className="mt-2 text-base sm:text-lg">Your description goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

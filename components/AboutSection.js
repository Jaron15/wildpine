import Link from 'next/link';
import React from 'react';

const AboutSection = () => {
    return (
      <section className="pb-10 px-4 font-sans text-black">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center">
            <div className="relative inline-block"> 
              <h2 className="text-4xl text-center font-bold">About Us</h2>
            </div>
          </div>
          <div className='w-full md:w-[95%] lg:w-full flex flex-col mx-auto '>
          <div className='bg-gradient-to-r from-[#6B705C] to- w-1/2 h-0.5 mt-4 mb-2'></div>
          <div className='my-2 sm:my-4 flex flex-col items-center'>
          <p className="text-lg text-center  mb-2 flex justify-center font-medium">
          At Wild Pine Coffee, we believe in more than just great coffee — we create a space for meaningful connections. From our premium, handpicked beans to our naturally derived energy drinks, every cup is crafted with care. Whether you&apos;re catching up with friends or working on your next big idea, our cozy atmosphere is the perfect place to make memories. Stop by, grab a drink, and experience the essence of Wild Pine!
          </p>
          <div className="text-center">
            <Link href="/about" className="text-[#FF7F50] underline hover:text-[#d16943] ease-in-out duration-300 mb-4">Learn more about us →</Link>
          </div>
          </div>
          <div className='flex justify-end w-full'>
          <div className='flex items-end justify-end bg-gradient-to-l from-[#6B705C] to- w-1/2 h-0.5 mt-2 mb-4'></div>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
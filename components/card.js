import React from 'react';

function Card({title, description}) {
  return (
    <div className="w-[15vh] sm:w-[21vh] md:w-[21vh] lg:w-[19.9rem] 2xl:w-[35vh] bg-white border border-[#6B705C] rounded-lg shadow dark:bg-gray-800 dark:border-[#6B705C] h-[27vh] sm:h-[36vh] lg:h-[31.3rem] 2xl:h-[55vh] flex flex-col overflow-clip font-sans">
    
        {/* Set height as a percentage of the card */}
        <div className="h-[80%] sm:h-[75%] xl:h-[80%]">
          <img className="rounded-t-lg object-cover w-full h-full object-bottom" src={`/${title}.webp`} alt="Coffee Image" />
        </div>
     
      {/* Text section takes up the remaining 30% */}
      <div className="p-0  h-full text-center flex-1 flex flex-col justify-center items-center bg-white  rounded-b-lg ">
        <div className='flex justify-center items-center h-full sm:h-1/2 text-center '>
          <h5 className=" text-xs sm:text-xl lg:text-2xl font-bold tracking-tight text-black ">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden sm:flex sm:w-3/4 sm:leading-4 lg:leading-6 text-md lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;

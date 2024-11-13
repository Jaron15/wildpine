import React from 'react';

function Card({name, title, description}) {
  return (
    <div className="w-[15vh] sm:w-[10.9rem] md:w-[10.8rem] lg:w-[19.9rem] 2xl:w-[35vh] border border-grn  rounded-lg shadow-xl h-[27vh] sm:h-[18.55rem] md:h-[18.65rem] lg:h-[31.3rem] 2xl:h-[55vh] flex flex-col overflow-clip font-sans cursor-pointer">
    
        {/* Set height as a percentage of the card */}
        <div className="h-[80%] sm:h-[75%] xl:h-[80%]">
          <img className="rounded-t-lg object-cover w-full h-full object-bottom" src={`/${name}.webp`} alt="Coffee Image" />
        </div>
     
      {/* Text section takes up the remaining 30% */}
      <div className="p-0  h-full text-center flex-1 flex flex-col justify-center items-center bg-mute rounded-b-lg ">
        <div className='flex justify-center items-center h-full sm:h-1/2 text-center '>
          <h5 className=" text-md sm:text-lg lg:text-2xl font-extrabold tracking-tight text-white ">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-white hidden sm:flex sm:w-[97%] lg:w-[90%]  sm:leading-4 lg:leading-5 text-xs lg:text-xl  ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;

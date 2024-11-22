import React from 'react';

export default function MenuIcons() {
  return (
    <div className="w-full py-6 font-sans flex justify-center">
      <div className="flex overflow-x-scroll scrollbar-hide  space-x-4 px-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28  rounded-full flex items-center justify-center">
            <img
              src="/icons/coffeeiconB.png"
              alt="Coffee"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm mt-2 text-gray-600">Coffee</p>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28  rounded-full flex items-center justify-center">
            <img
              src="/icons/teaiconB.png"
              alt="Tea"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm mt-2 text-gray-600">Tea</p>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28  rounded-full flex items-center justify-center">
            <img
              src="/icons/edrinkiconB.png"
              alt="Energy"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm mt-2 text-gray-600">Energy</p>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28  rounded-full flex items-center justify-center">
            <img
              src="/icons/foodicon.png"
              alt="Food"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm mt-2 text-gray-600">Food</p>
        </div>
 {/* possible other category */}
        {/* <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-full flex items-center justify-center"> */}

            {/* <img
              src="/placeholder-other.png"
              alt="Other"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm mt-2 text-gray-600">Other</p>
        </div> */}
      </div>
    </div>
  );
}

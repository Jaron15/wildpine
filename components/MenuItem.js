import React from 'react';

export default function MenuItem({ item }) {
    console.log(item);
    
    
  return (
    <div className="max-w-3xl w-full flex justify-between items-center border border-gray-300 rounded-lg p-4 shadow-md bg-white">
      {/* Left Section: Name and Description */}
      <div className="flex flex-col  w-[70%]">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{item.name}</h3>
        {item.description && (
          <p className="text-sm sm:text-base  text-gray-600 mt-1">{item.description}</p>
        )}
      </div>

      {/* Right Section: Sizes and Prices */}
      <div className="flex flex-col items-end space-y-2">
        {Array.isArray(item.sizes) &&
          item.sizes.map((size, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-sm sm:text-base font-medium text-gray-700">{size.size}</span>
              <span className="text-sm sm:text-base font-semibold text-gray-900">
                ${size.price}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
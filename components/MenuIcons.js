import React from 'react';

export default function MenuIcons({selections, toggleFilter}) {
  console.log(selections);
  const icons = [
    { name: "Coffee", img: "/icons/coffeeUPR.png" },
    { name: "Tea", img: "/icons/teaiconB.png" },
    { name: "Energy", img: "/icons/EnergyUPR.png" },
    { name: "Food", img: "/icons/foodicon.png" },
  ];
  const isAllSelected = selections.length === 0;

  return (
    <div className="w-full  font-sans flex justify-center">
      <div className="flex overflow-x-scroll  scrollbar-hide space-x-4 px-4 sm:px-6 py-6">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className={`flex flex-col items-center flex-shrink-0 cursor-pointer`}

            onClick={() => toggleFilter(icon.name)}
          >
<div
  className={`relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center transform transition-transform duration-500  
  ${selections.includes(icon.name) ? "-rotate-12 scale-105" : "rotate-0"}  
  ${selections.includes(icon.name) || isAllSelected ? "opacity-100" : "opacity-50"}`}
>
  {/* Glow Layer */}
  {selections.includes(icon.name) && (
    <div
      className="absolute inset-0 rounded-full !overflow-visible"
      style={{
        background: `radial-gradient(circle, rgba(255, 20, 147, 0.4) 30%, rgba(255, 20, 147, 0) 100%)`,
        filter: "blur(15px)", 
        zIndex: 0,
      }}
    ></div>
  )}
              <img
                src={icon.img}
                alt={icon.name}
                className="w-full z-20 h-full object-contain"
              />
            </div>
            <p className="text-sm mt-2 text-gray-600">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

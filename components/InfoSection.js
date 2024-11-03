import React from 'react'
import MapboxMap from './MapboxMap'

function InfoSection() {
  return (
    <div className="w-full flex flex-col items-center font-sans text-black px-4 sm:px-8">
      <div className="section-title text-center mb-4 mt-[-2rem]">
        <h2 className="text-4xl sm:text-5xl font-bold">Visit Us</h2>
      </div>

      {/* Adjusted grid for better width distribution on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-4 sm:py-10 w-full max-w-7xl md:text-lg xl:text-2xl">
        {/* Info Section */}
        <div className="flex flex-col items-center md:items-center md:col-span-2 space-y-3 sm:space-y-6 md:space-y-12 p-4 justify-center rounded-lg mt-[-20px]">
          <div className="flex flex-col text-center  items-center">
            <h3 className="text-2xl font-semibold">Hours</h3>
            <p>Mon-Sat: 6:30am - 3:30pm</p>
          </div>
          <div className="flex flex-col text-center  items-center">
            <h3 className="text-2xl font-semibold">Phone</h3>
            <a href="tel:+13055555555" className="text-blue-600">(123) 456-7890</a>
          </div>
          <div className="flex flex-col text-center  items-center">
            <h3 className="text-2xl font-semibold text-center">Location</h3>
            <p>20340 N Lake Pleasant Rd #110, Peoria, AZ 85382</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="md:col-span-3 w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-lg">
          <MapboxMap />
        </div>
      </div>
    </div>
  )
}

export default InfoSection

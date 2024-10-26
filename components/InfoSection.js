import React from 'react'
import MapboxMap from './MapboxMap'


function InfoSection() {
  return (
    <div className='w-full flex flex-col items-center font-sans text-black'>

    <div class="section-title text-center mb-0 mt-[-2rem]">
    <h2 class="text-4xl sm:text-5xl font-bold text-center">Visit Us</h2>
    </div>

  <div class="grid grid-cols-1 xl:grid-cols-6 gap-6 sm:px-4 py-4 sm:py-10 w-full sm:w-3/4  ">

    <div class=" flex flex-col items-center  ">
      <div className='  h-full grid text-center  space-y-3 sm:space-y-0'>

      <div className='flex flex-col justify-center'>
        <h3 class="text-2xl font-semibold">Hours</h3>
        <p>Mon-Sat: 6:30am - 3:30pm</p>
      </div>
      <div className='flex flex-col justify-center'>
        <h3 class="text-2xl font-semibold ">Phone</h3>
        <a href="tel:+13055555555">(123) 456-7890</a>
      </div>
      
      <div className='flex flex-col justify-center'>
        <h3 class="text-2xl font-semibold ">Location</h3>
        <p>123 Coffee St., Coffee City, CO</p>
      </div>
      </div>
    </div>
    <div class="bg-gray-200 w-full h-72 sm:h-96 rounded-2xl overflow-hidden xl:col-span-5">
  <MapboxMap />
    </div>

  </div>
  </div>
  )
}

export default InfoSection
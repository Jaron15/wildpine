import React from 'react'
import MapboxMap from './MapboxMap'


function InfoSection() {
  return (
    <div className='w-full flex flex-col items-center'>

    <div class="section-title text-center mb-8">
    <h2 class="text-4xl font-bold">Visit Us</h2>
    </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-10 w-3/4 border border-red-500 ">

    <div class=" flex flex-col items-center border border-blue-500 ">
      <div className='border border-blue-500 space-y-10 h-full flex flex-col '>
      <div>
        <h3 class="text-2xl font-semibold">Hours</h3>
        <p>Mon-Fri: 7am - 7pm</p>
        <p>Sat-Sun: 8am - 5pm</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Phone</h3>
        <p>(123) 456-7890</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Location</h3>
        <p>123 Coffee St., Coffee City, CO</p>
      </div>
      </div>
    </div>
    <div class="bg-gray-200 w-full h-96 border border-yellow-500 lg:col-span-2">
  <MapboxMap />
    </div>

  </div>
  </div>
  )
}

export default InfoSection
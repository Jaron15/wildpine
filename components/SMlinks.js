import React from 'react'
import { IoLogoInstagram, IoIosMail  } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SMlinks({x}) {
    let spacingClass = "";

  switch (x) {
    case 2:
      spacingClass = "space-x-2";
      break;
    case 3:
      spacingClass = "space-x-3";
      break;
    case 4:
      spacingClass = "space-x-4";
      break;
    default:
      spacingClass = "space-x-2";
  }

  return (
    <div className={`flex justify-center ${spacingClass} mb-6`}>
     <a href="https://www.instagram.com/groundedinAZ" target="_blank" className="bg-[#e0cab4] text-2xl border border-grn rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300">
  <IoLogoInstagram className='text-[#CF2872] hover:text-[#CF2872] transition ease-in-out duration-300'/>
</a>

<a href="mailto:Groundedinaz@gmail.com" className="bg-[#e0cab4] text-2xl border border-grn rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300">
  <IoIosMail className='text-white hover:text-white transition ease-in-out duration-300' />
</a>

<a href="https://g.co/kgs/BC6CMh" target="_blank" className="inline-block">
  <div className="bg-[#e0cab4] text-2xl border border-grn rounded-full p-2 hover:opacity-90 inline-flex items-center justify-center hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300">
    <div className="filter grayscale-0 grayscale transition ease-in-out duration-300 hover:grayscale-0">
      <FcGoogle />
    </div>
  </div>
</a>

<a href="https://www.facebook.com/groundedinAZ" target="_blank" className="bg-[#e0cab4] text-2xl border border-grn rounded-full p-2 hover:opacity-90 text-blue-500 hover:text-blue-500 hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300">
  <FaFacebookF />
</a>
</div>
  )
}

export default SMlinks
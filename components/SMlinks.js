import React from 'react'
import { IoLogoInstagram, IoIosMail  } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTiktok } from "react-icons/fa";

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
     <a href="https://www.instagram.com/wildpinecoffeeco/" target="_blank" className="bg-slate-100 text-2xl border border-black rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300">
  <IoLogoInstagram className='text-[#CF2872] hover:text-[#CF2872] transition ease-in-out duration-300'/>
</a>

<a href="mailto:" className="bg-slate-100 text-2xl border border-black rounded-full p-2 hover:opacity-90 hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300">
  <IoIosMail className='text-black hover:text-white transition ease-in-out duration-300' />
</a>

<a href="https://g.co/kgs/4wiQ2Zw" target="_blank" className="inline-block">
  <div className="bg-slate-100 text-2xl border border-black rounded-full p-2 hover:opacity-90 inline-flex items-center justify-center hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300">
    <div className="filter grayscale-0 grayscale transition ease-in-out duration-300 hover:grayscale-0">
      <FcGoogle />
    </div>
  </div>
</a>

<a href="https://www.tiktok.com/@wildpinecoffeeco" target="_blank" className="bg-slate-100 text-2xl border border-black rounded-full p-2 hover:opacity-90 text-black hover:text-black hover:shadow-[0_0_20px_#8b008b] transition ease-in-out duration-300 ">
<FaTiktok className=" " 
style={{
  filter: "drop-shadow(-1.5px -1.5px 0 rgba(0, 255, 255, 0.8)) drop-shadow(1.5px 1.5px 0 rgba(255, 20, 147, 0.8))",
}}

/>
</a>
</div>
  )
}

export default SMlinks
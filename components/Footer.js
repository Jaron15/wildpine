import React from 'react';
import { IoLogoInstagram, IoLogoSnapchat, IoLogoTwitter, IoIosMail  } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import SMlinks from './SMlinks';

const Footer = () => {
  return (
      <footer className="bg-mute p-6 w-full font-sans">
     
     <SMlinks x={4} />

      <ul className="flex flex-wrap justify-center space-x-4 text-lg mb-3 text-white">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/services" className="hover:underline">Menu</Link></li>
        <li><Link href="/about" className="hover:underline">About Us</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
      {/* <p className="text-center text-sm text-gray-400">something here</p> */}
    </footer>
  );
}

export default Footer;
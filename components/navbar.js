import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useContext } from 'react';
import { ScrollContext } from './ScrollContext';
import { BellIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import HamburgerIcon from './HamburgerIcon'
import { useState } from 'react'
import Image from 'next/image'

export default function NavBar() {
  const { isHeroInView } = useContext(ScrollContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Disclosure as="nav" className="sticky top-0 z-50 bg-gradient-to-r from-[#5A4033]  to-[#F2D9B1] shadow overflow-clip font-sans text-shadow-custom">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Hamburger button */}
              <HamburgerIcon toggleSidebar={toggleSidebar} sidebar={isSidebarOpen} />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
             {/* Neon Coffee Shop Name in Center */}
            <div className="flex flex-none items-center justify-center  sm:justify-start">
            <motion.h1
  className="font-satisfy text-[calc(16px+2vw)] sm:text-xl leading-[calc(20px+2vh)] text-center text-[#ffb6c1] shadow-none  mt-2 mr-2"
  style={{
    textShadow: '0 0 5px #ff1493, 0 0 20px #ff1493, 0 0 30px #c71585, 0 0 40px #c71585, 0 0 60px #8b008b, 0 0 80px #8b008b'
  }}
  

  initial={{ opacity: 0 }}  
  animate={{ 
    opacity: [0, 1, 0.5, 1, 0.7, 1]  // Flicker pattern
  }}
  transition={{
    duration: 2,  // Flickering lasts for 2 seconds
    times: [0, 0.2, 0.4, 0.6, 0.8, 1],  // Control the flicker timing
    ease: "easeInOut",  // Smooth transition
  }}

>
  Wild Pine Coffee Co
</motion.h1>
            </div>

              <div className="hidden sm:justify-center sm:flex sm:flex-1 sm:space-x-8 ">
                <a
                  href="#"
                  className="inline-flex items-center hover:border-b-2 border-black px-1 pt-1 text-sm font-medium text-white"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-black hover:text-"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-black hover:text-"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-black hover:text-"
                >
                  Calendar
                </a>
              </div>
            </div>
            <div className="absolute  inset-y-0 right-0 flex items-center pr-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <AnimatePresence>
  {!isHeroInView && (
    <motion.button
      key="navbar-logo"
      type="button"
      className="relative rounded-full pb-1 text-gray-400 hover:text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-20 w-20">
        <Image
          src="/wildpinelogo.svg"
          alt="Company Logo"
          fill
          objectFit="contain"
        />
      </div>
    </motion.button>
  )}
</AnimatePresence>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 pb-4 pt-2">
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >
              Dashboard
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Team
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Projects
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            >
              Calendar
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* Sidebar */}
      <motion.div
  initial={{ x: '-100%' }}
  animate={{ x: isSidebarOpen ? '0%' : '-100%' }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  className="fixed top-0 left-0 h-full bg-white text-black z-40"
  style={{ width: '80%' }}
>
  <div className="p-4 text-3xl flex flex-col justify-start w-full h-full items-center pt-28">
    <ul className="space-y-10 text-center">
      <li className="mb-2">Home</li>
      <li className="mb-2">Menu</li>
      <li className="mb-2">About us</li>
      <li className="mb-2">Contact</li>
    </ul>
    <div className="border-t border-gray-400 w-5/6 mt-6"></div>
  </div>
</motion.div>

      {/* Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

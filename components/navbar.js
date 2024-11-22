import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useContext } from 'react';
import { ScrollContext } from './ScrollContext';
import { BellIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import HamburgerIcon from './HamburgerIcon'
import { useState } from 'react'
import Image from 'next/image'
import SMlinks from './SMlinks';

export default function NavBar() {
  const { isHeroInView } = useContext(ScrollContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Disclosure
  as="nav"
  className={`sticky top-0 z-50 shadow overflow-clip font-sans text-shadow-custom ${
    isSidebarOpen ? 'bg-[#505344] bg-opacity-100' : 'bg-[#505344] bg-opacity-90'
  }`}
>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Hamburger button */}
        <HamburgerIcon toggleSidebar={toggleSidebar} sidebar={isSidebarOpen} />
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        {/* Neon Coffee Shop Name in Center */}
        <div className="flex flex-none items-center justify-center sm:justify-start">
          <motion.h1
            className="font-satisfy text-[calc(16px+2vw)] sm:text-xl leading-[calc(20px+2vh)] text-center text-[#ffb6c1] shadow-none  mt-2 mr-2"
            style={{
              textShadow:
                '0 0 5px #ff1493, 0 0 20px #ff1493, 0 0 30px #c71585, 0 0 40px #c71585, 0 0 60px #8b008b, 0 0 80px #8b008b',
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 1, 0.7, 1], // Flicker pattern
            }}
            transition={{
              duration: 2, // Flickering lasts for 2 seconds
              times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Control the flicker timing
              ease: 'easeInOut', // Smooth transition
            }}
          >
            Wild Pine Coffee Co
          </motion.h1>
        </div>

        <div className="hidden sm:justify-center sm:flex sm:flex-1 sm:space-x-8 ">
          <a
            href="/"
            className="inline-flex items-center hover:border-b-2 border-black px-1 pt-1 text-sm font-medium text-white"
          >
            Home
          </a>
          <a
            href="/menu"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-black hover:text-"
          >
            Menu
          </a>
          <a
            href="#"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-black hover:text-"
          >
            About Us
          </a>
          <a
            href="#"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-black hover:text-"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <motion.div
          key="navbar-logo-container"
          className="relative rounded-full pb-1 text-gray-400 hover:text-gray-500  h-20 w-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeroInView ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Conditionally render only the inner logo div */}
          <AnimatePresence>
            {!isHeroInView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-20 w-20 "
              >
                <Image
                  src="/wildpinelogo.svg"
                  alt="Company Logo"
                  fill
                  objectFit="contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  </div>
</Disclosure>


      {/* Sidebar */}
      <motion.div
  initial={{ x: '-100%' }}
  animate={{ x: isSidebarOpen ? '0%' : '-100%' }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  className="fixed top-0 left-0 h-full bg-background text-black z-40"
  style={{ width: '80%' }}
>
  <div className="p-4 text-3xl flex flex-col justify-start w-full h-full items-center pt-28">
    <ul className="space-y-10 text-center">
      <li className="mb-2">Home</li>
      <li className="mb-2">Menu</li>
      <li className="mb-2">About us</li>
      <li className="mb-2">Contact</li>
    </ul>
    <div className="border-t border-gray-400 w-5/6 my-6 "></div>
    <SMlinks x={4}/>
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

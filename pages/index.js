import Image from "next/image";
import localFont from "next/font/local";
import Hero from "./components/hero";
import Card from "./components/card";
import { useContext, useEffect } from 'react';
import { ScrollContext } from './components/ScrollContext';
import { useInView } from 'react-intersection-observer';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cardItems = [
  { title: "Coffee", description: "this is the best item on the list and should be the star." },
  { title: "Tea", description: "this one is tea which will have a better description." },
  { title: "Coffee", description: "this will actually be food when I get that done ." }
];

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col overflow-clip`}>
      {/* Hero Section */}
        <Hero />
      {/* Main Content */}
      <main className="flex-grow flex flex-col gap-8 items-center  bg-[#EAE0D6]">
        
 {/* Grid for Cards */}
 <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-9 justify-items-center mt-[-20px] z-20">
{cardItems.map((item, index) => (
   <Card key={index} title={item.title} description={item.description}  />
))}
        </div>

        
      {/* this is for testing the nav effects when scrolled past hero TEMPORARY */}
 <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-9 justify-items-center mt-[-20px] z-20">
{cardItems.map((item, index) => (
   <Card key={index} title={item.title} description={item.description}  />
))}
        </div>
 <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-9 justify-items-center mt-[-20px] z-20">
{cardItems.map((item, index) => (
   <Card key={index} title={item.title} description={item.description}  />
))}
        </div>
 <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-9 justify-items-center mt-[-20px] z-20">
{cardItems.map((item, index) => (
   <Card key={index} title={item.title} description={item.description}  />
))}
        </div>
 <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-9 justify-items-center mt-[-20px] z-20">
{cardItems.map((item, index) => (
   <Card key={index} title={item.title} description={item.description}  />
))}
        </div>
        {/* this is for testing the nav effects when scrolled past hero TEMPORARY */}


        {/* Rest of your content */}
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}

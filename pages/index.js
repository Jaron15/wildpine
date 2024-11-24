import Image from "next/image";
import localFont from "next/font/local";
import Hero from "../components/hero";
import Card from "../components/card";
import { useContext, useEffect } from 'react';
import { ScrollContext } from '../components/ScrollContext';
import { useInView } from 'react-intersection-observer';
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import InfoSection from "@/components/InfoSection";


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
  { name: "Coffee", title: "Coffee", description: "Expertly crafted coffee brewed from quality beans." },
  { name: "Tea", title: "Tea & Energy", description: "Refreshing teas and natural energy drinks for every mood." },
  { name: "Food", title: "Food", description: "Freshly made bites to pair perfectly with any drink." }
];

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col overflow-clip`}>
      {/* Hero Section */}
        <Hero />
      {/* Main Content */}
      <main className="flex-grow flex flex-col gap-8 items-center bg-background">
        
 {/* Grid for Cards */}
 <div className="w-full flex  justify-center gap-x-4 lg:gap-x-8 mt-[-20px] z-20 mx-auto sm:px-8 lg:px-16">
 {cardItems.map((item, index) => (
   <Card key={index} name={item.name} title={item.title} description={item.description}  />
))}
        </div>
 <Carousel />

<AboutSection />

<InfoSection />
     


        {/* Rest of your content */}
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[50vh] md:h-[50vh] lg:h-[70vh]" >
      <Image
        src="/home.webp"  
        alt="Hero Image"
        fill 
        className="object-fill sm:object-fill" 
        style={{ objectPosition: "50% 55%" }}  
        priority
        quality={100}  
      />
    </div>
  );
}

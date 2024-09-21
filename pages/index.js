import Image from "next/image";
import localFont from "next/font/local";
import Hero from "./components/hero";

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

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-grow flex flex-col gap-8 items-center sm:items-start bg-white">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {/* Rest of your content */}
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}

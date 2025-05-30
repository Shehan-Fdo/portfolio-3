import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "./components/Navbar/page.js";
import AboutMe from "./components/Aboutme/page.js";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // You can customize this
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "A student passionate about tech, AI, and Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiase text-white min-h-screen`}>
        {/* Desktop Layout - with fixed inset */}
        <div className="hidden md:block fixed inset-10 bg-[#1d1d1d] rounded-4xl">
          <div className="flex space-x-3 overflow-hidden h-full">
            <AboutMe/>
            {/* Right Side - Main Content Area */}
            <div className="flex-1 bg-[#222] border-1 border-[#333] rounded-4xl flex flex-col overflow-hidden">
              <Navbar />
              <main className="flex-1 p-6 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </div>

        {/* Mobile Layout - full screen, no fixed inset */}
        <div className="md:hidden min-h-screen bg-[#1d1d1d]">
          <AboutMe/>
          {/* Main Content Area for Mobile */}
          <div className="bg-[#222] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
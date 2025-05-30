"use client";
import Image from "next/image";
import LinkButton from "../Button/page.js";
import { useState, useEffect } from "react";

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Auto-open menu on mobile when component loads
  useEffect(() => {
    const checkMobile = () => {
      // Check if it's mobile view (screen width < 768px)
      if (window.innerWidth < 768) {
        setIsOpen(true);
      }
    };

    // Check on initial load
    checkMobile();

    // Optional: Listen for window resize to handle orientation changes
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match the animation duration
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:block w-1/4 bg-[#222] p-6 border border-[#333] rounded-4xl overflow-y-auto">
        <div className="flex justify-center mb-4 pt-4">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#ffffff31]">
            <Image
              src="/avatar.webp"
              alt="Shehan's Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-gray-300 leading-relaxed text-4xl font-semibold">
            Kavindu Shehan
            <br />
          </p>
          <LinkButton
            href="https://github.com/Shehan-Fdo/"
            label="Visit my Github"
          />
        </div>
        <hr className="h-0.5 w-[70px] bg-[#333] border-none rounded-full mx-auto" />
        <div>
          <div className="mt-6 p-3 bg-[#ffffff10] flex gap-3 items-center rounded-2xl text-white font-semibold animate-fade-in hover:scale-101 transition-transform duration-300 ease-in-out">
            <div className="flex-shrink-0">
              <Image
                src="/icons/mail.svg"
                alt="Email Icon"
                width={34}
                height={34}
              />
            </div>
            <div className="flex-1">
              <h1>Email</h1>
              <p className="font-light">kavindufernando2006@gmail.com</p>
            </div>
          </div>

          <div className="mt-6 p-3 bg-[#ffffff10] flex gap-3 items-center rounded-2xl text-white font-semibold animate-fade-in hover:scale-101 transition-transform duration-300 ease-in-out">
            <div className="flex-shrink-0">
              <Image
                src="/icons/phone.svg"
                alt="Phone Icon"
                width={34}
                height={34}
              />
            </div>
            <div className="flex-1">
              <h1 className="font">Phone</h1>
              <p className="font-light">+94 71 526 1667</p>
            </div>
          </div>

          <div className="mt-6 p-3 bg-[#ffffff10] flex gap-3 items-center rounded-2xl text-white font-semibold animate-fade-in hover:scale-101 transition-transform duration-300 ease-in-out">
            <div className="flex-shrink-0">
              <Image
                src="/icons/date.svg"
                alt="Birthday Icon"
                width={34}
                height={34}
              />
            </div>
            <div className="flex-1">
              <h1>Birthday</h1>
              <p className="font-light">19 August 2006</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="group">
              <a
                href="https://github.com/Shehan-Fdo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  alt="Github Icon"
                  width={34}
                  height={34}
                  className="transition duration-200 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(84%)_saturate(2500%)_hue-rotate(16deg)_brightness(103%)_contrast(101%)]"
                />
              </a>
            </div>

            <div className="group">
              <a
                href="https://wa.me/94715261667"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp Icon"
                  width={34}
                  height={34}
                  className="transition duration-200 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(84%)_saturate(2500%)_hue-rotate(16deg)_brightness(103%)_contrast(101%)]"
                />
              </a>
            </div>

            <div className="group">
              <a
                href="https://web.facebook.com/shehan.kavindu.998281/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook Icon"
                  width={34}
                  height={34}
                  className="transition duration-200 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(84%)_saturate(2500%)_hue-rotate(16deg)_brightness(103%)_contrast(101%)]"
                />
              </a>
            </div>
          </div>
      </div>

      {/* Mobile menu button - only visible on mobile */}
      <button
        className="fixed top-3.5 left-4 z-40 md:hidden text-white p-2 py-3 transition-transform duration-200 hover:scale-110 active:scale-95 bg-[#222] px-3 rounded-4xl shadow-lg"
        onClick={handleOpen}
        aria-label="Open About Me"
      >
        <Image
          src="/icons/profile.svg"
          alt="Open About Me"
          width={35}
          height={35}
          className="rounded-full border-2 border-[#333] shadow-lg"
        />
      </button>

      {/* Mobile drawer backdrop */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleClose}
        />
      )}

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#222] border-2 border-[#333] shadow-2xl p-4 rounded-r-4xl overflow-y-auto z-50 md:hidden transition-transform duration-300 ease-out ${
            isClosing
              ? "transform -translate-x-full"
              : "transform translate-x-0"
          }`}
          style={{
            animation: isClosing
              ? "slideOut 0.3s ease-out forwards"
              : "slideIn 0.3s ease-out forwards",
          }}
        >
          <button
            className="absolute top-3 right-3 text-gray-400 text-2xl hover:text-white transition-all duration-200 hover:scale-110 hover:rotate-90 z-10"
            onClick={handleClose}
            aria-label="Close About Me"
          >
            &times;
          </button>

          {/* Avatar Section */}
          <div className="flex justify-center mb-4 pt-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#ffffff31] transition-transform duration-300 hover:scale-105">
              <Image
                src="/avatar.webp"
                alt="Shehan's Avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Name and GitHub Section */}
          <div className="text-center mb-4">
            <p className="text-gray-300 leading-relaxed text-2xl sm:text-3xl font-semibold animate-fade-in mb-3">
              Kavindu Shehan
            </p>
            <div className="animate-fade-in-delay">
              <LinkButton
                href="https://github.com/Shehan-Fdo/"
                label="Visit my Github"
              />
            </div>
          </div>

          {/* Divider */}
          <hr className="h-0.5 w-16 bg-[#333] border-none rounded-full mx-auto animate-fade-in-delay-2 mb-4" />

          {/* Contact Information */}
          <div className="space-y-3">
            <div className="p-3 bg-[#ffffff10] flex gap-3 items-center rounded-xl text-white font-semibold animate-fade-in">
              <div className="flex-shrink-0">
                <Image
                  src="/icons/mail.svg"
                  alt="Email Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-semibold">Email</h2>
                <p className="font-light text-xs sm:text-sm text-gray-300 truncate">
                  kavindufernando2006@gmail.com
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#ffffff10] flex gap-3 items-center rounded-xl text-white font-semibold animate-fade-in">
              <div className="flex-shrink-0">
                <Image
                  src="/icons/phone.svg"
                  alt="Phone Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-semibold">Phone</h2>
                <p className="font-light text-xs sm:text-sm text-gray-300">
                  +94 71 526 1667
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#ffffff10] flex gap-3 items-center rounded-xl text-white font-semibold animate-fade-in">
              <div className="flex-shrink-0">
                <Image
                  src="/icons/date.svg"
                  alt="Birthday Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-semibold">Birthday</h2>
                <p className="font-light text-xs sm:text-sm text-gray-300">
                  19 August 2006
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center mt-6 space-x-6">
            <div className="group">
              <a
                href="https://github.com/Shehan-Fdo/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg hover:bg-[#ffffff10] transition-colors duration-200"
              >
                <Image
                  src="/icons/github.svg"
                  alt="Github Icon"
                  width={30}
                  height={30}
                  className="transition duration-200 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(84%)_saturate(2500%)_hue-rotate(16deg)_brightness(103%)_contrast(101%)]"
                />
              </a>
            </div>

            <div className="group">
              <a
                href="https://wa.me/94715261667"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg hover:bg-[#ffffff10] transition-colors duration-200"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp Icon"
                  width={30}
                  height={30}
                  className="transition duration-200 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(84%)_saturate(2500%)_hue-rotate(16deg)_brightness(103%)_contrast(101%)]"
                />
              </a>
            </div>

            <div className="group">
              <a
                href="https://web.facebook.com/shehan.kavindu.998281/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg hover:bg-[#ffffff10] transition-colors duration-200"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook Icon"
                  width={30}
                  height={30}
                  className="transition duration-200 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(84%)_saturate(2500%)_hue-rotate(16deg)_brightness(103%)_contrast(101%)]"
                />
              </a>
            </div>
          </div>
          <br/>
          <hr className="h-0.5 w-[70px] bg-[#333] border-none rounded-full mx-auto" />
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out 0.1s both;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.4s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.4s ease-out 0.3s both;
        }
      `}</style>
    </>
  );
}
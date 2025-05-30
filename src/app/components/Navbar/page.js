'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="pt-3">
      {/* Mobile View */}
      <div className="block md:hidden fixed top-3.5 left-1/2 -translate-x-1/2 z-39 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 bg-[#222] rounded-4xl shadow-lg">
        <ul className="flex justify-center items-center space-x-1 sm:space-x-2 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className={`
                    relative px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 ease-in-out cursor-pointer
                    ${isActive
                      ? 'text-[#222] bg-white scale-105'
                      : 'text-white bg-[#222] hover:bg-white hover:text-[#222] hover:scale-105'
                    }
                  `}>
                    <span className="relative z-10">{item.label}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <ul className="flex justify-center items-center space-x-1 sm:space-x-2 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className={`
                    relative px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 ease-in-out cursor-pointer
                    ${isActive
                      ? 'text-[#222] bg-white scale-105'
                      : 'text-white bg-[#222] hover:bg-white hover:text-[#222] hover:scale-105'
                    }
                  `}>
                    <span className="relative z-10">{item.label}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

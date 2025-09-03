'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed; assign from variable
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
        sticky w-full bg-black shadow-md transition-all duration-300 ease-in-out \
        px-4 sm:px-6 lg:px-8 
        ${ isScrolled ? 'h-16' : 'h-24'}
      `}>
      <div className="flex h-full align-middle">

        <div className='flex items-center'>
          <div className="flex-shrink-0 flex flex-col items-center align-middle">
            <Link href="/" className="text-white font-bold font-serif text-2xl">
              JP Real Estate
            </Link>
            <h2 className='text-white text-sm'>
              123-456-7890
            </h2>
          </div>
        </div>
        <div className='grow'></div>

        <div className="hidden font-sans text-base text-white font-medium sm:ml-6 sm:flex sm:space-x-8">
          <Link
            href="/"
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-gray-200"
          >
            About
          </Link>
          <Link
            href="/stories"
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-gray-200"
          >
            Stories
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-white hover:text-gray-200"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
};
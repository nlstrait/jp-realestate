'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

        {/* Hamburger icon for mobile */}
        <div className='flex sm:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg 
              className='w-6 h-6 transition-all duration-300 ease-in-out' 
              fill='none' 
              stroke='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2 6h20M2 12h20M2 18h20"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu, toggled by state */}
        <ul className={`sm:hidden ${isOpen ? 'block opacity-99' : 'invisible opacity-0'} absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 ease-in-out`}>
          <li className='py-2 px-4 border-t border-gray-700 hover:bg-gray-700'>
            <Link href="/" onClick={toggleMenu} className='block text-white'>Home</Link>
          </li>
          <li className='py-2 px-4 border-t border-gray-700 hover:bg-gray-700'>
            <Link href="/about" onClick={toggleMenu} className='block text-white'>About</Link>
          </li>
          <li className='py-2 px-4 border-t border-gray-700 hover:bg-gray-700'>
            <Link href="/stories" onClick={toggleMenu} className='block text-white'>Stories</Link>
          </li>
          <li className='py-2 px-4 border-t border-gray-700 hover:bg-gray-700'>
            <Link href="/contact" onClick={toggleMenu} className='block text-white'>Contact</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};
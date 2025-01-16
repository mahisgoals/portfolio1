"use client"; // Client-side component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../globals.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu when the screen is resized to a larger width
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false); // Close mobile menu when screen is larger than 768px
    }
  };

  useEffect(() => {
    // Add event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu when link is clicked
  const closeMenuOnClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-main navbar">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
          <a href="#" className="text-2xl text-white rounded">
            MS<span className="text-pink">.</span>
          </a>
          <div className="flex-grow"></div>
          <div>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`${isOpen ? '' : 'hidden'} w-full`} id="navbar-hamburger">
            <ul className="flex flex-col pt-4 bg-main md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-main ">
              <li>
                <Link href="/" className="block py-2 px-3 text-white rounded hover:bg-secondSlide" onClick={closeMenuOnClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="block py-2 px-3 text-white rounded hover:bg-secondSlide" onClick={closeMenuOnClick}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block py-2 px-3 text-white rounded hover:bg-secondSlide" onClick={closeMenuOnClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop menu */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto">
            <ul className="flex flex-col p-4 bg-main md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-main">
              <li>
                <Link href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink md:p-0">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink md:p-0">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

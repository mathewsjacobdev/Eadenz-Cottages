import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import logo from '../../public/images/logo.webp'; // Update the logo path accordingly
import logo from '../../public/images/lo.jpg'
// import lo2 from '../../public/images/lo2.jpg'

import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href) => {
    router.push(href);
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Eadanz Cottage Name */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Eadanz Cottage"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </Link>
            <span className="ml-3 text-xl font-bold text-gray-800">Eadanz Cottages</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              <span className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
                Home
              </span>
            </Link>

            <Link href="#gallery">
              <span className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
                Gallery
              </span>
            </Link>
            <Link href="#nearby-attractions">
              <span className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
                Nearby Attractions
              </span>
            </Link>
            <Link href="#about">
              <span className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="#Contact">
              <span className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700`}>
        {/* Mobile View - Eadanz Cottage Name */}
        <div className="text-center py-4 text-white font-bold text-lg">
          Eadanz Cottage
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <span onClick={() => handleLinkClick('/')} className="text-gray-300 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Home
          </span>
         
          <span onClick={() => handleLinkClick('#gallery')} className="text-gray-300 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Gallery
          </span>
          <span onClick={() => handleLinkClick('#nearby-attractions')} className="text-gray-300 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Nearby Attractions
          </span>
          <span onClick={() => handleLinkClick('#about')} className="text-gray-300 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            About Us
          </span>
          <span onClick={() => handleLinkClick('#Contact')} className="text-gray-300 hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

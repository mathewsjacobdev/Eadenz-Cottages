import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll"; // Import for smooth scrolling
import logo from "../../public/images/lo.jpg"; // Update the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href) => {
    if (href.startsWith("/")) {
      // Navigate to external page (e.g., /gallery, /about)
      router.push(href);
    } else {
      // Smooth scroll to section
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Eadenz Cottage"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </Link>
            <span className="ml-3 text-xl font-bold text-gray-800">
              Eadenz Cottages
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <ScrollLink to="gallery" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
              Gallery
            </ScrollLink>
            <ScrollLink to="nearby-attractions" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
              Nearby Attractions
            </ScrollLink>
            <ScrollLink to="about-us" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
              About Us
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium cursor-pointer">
              Contact
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6 transition-transform transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-700">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" onClick={toggleMenu} className="block text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <ScrollLink to="gallery" smooth={true} duration={500} onClick={toggleMenu} className="block text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Gallery
            </ScrollLink>
            <ScrollLink to="nearby-attractions" smooth={true} duration={500} onClick={toggleMenu} className="block text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Nearby Attractions
            </ScrollLink>
            <ScrollLink to="about-us" smooth={true} duration={500} onClick={toggleMenu} className="block text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              About Us
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu} className="block text-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

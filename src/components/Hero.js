import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';

const images = [
  'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp',
  'https://lh3.googleusercontent.com/p/AF1QipN-t7t__Men57trnLqtyYhBO34vOHK36cLzDyLR=s1360-w1360-h1020',
  'https://r1imghtlak.ibcdn.com/efab3560a3b311e9b7050242ac110004.jpeg?downsize=634:357'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Eadanz</h1>
          <p className="text-xl md:text-2xl mb-8">Your journey to excellence starts here</p>
          {/* <button className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </button> */}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={handlePrevImage} className="text-white text-4xl p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition">
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={handleNextImage} className="text-white text-4xl p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition">
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-8 w-full flex justify-center">
        <button onClick={scrollToNextSection} className="text-white text-4xl animate-bounce">
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Hero;

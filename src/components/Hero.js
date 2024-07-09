import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2FIMG20220410121642_11zon.webp&w=3840&q=75')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Edanz</h1>
          <p className="text-xl md:text-2xl mb-8">Your journey to excellence starts here</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

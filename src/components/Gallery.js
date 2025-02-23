// import React, { useEffect } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { motion } from 'framer-motion';

// const photos = {
//   rooms: [
//     { src: 'https://r1imghtlak.ibcdn.com/126cd0b9-1850-4c1e-a64e-ef74629449af.jpg?downsize=1920:1080', alt: 'Room 1' },
//     { src: 'https://r1imghtlak.ibcdn.com/ce0733a6a3bc11e989210242ac110003.jpeg?downsize=634:357', alt: 'Room 2' },
//   ],
//   outdoors: [
//     { src: 'https://r1imghtlak.ibcdn.com/def1ca8d-6f37-4d0c-b968-02650daf2831.jpg?downsize=634:357', alt: 'Outdoors 1' },
//     { src: 'https://r1imghtlak.ibcdn.com/0a37a9f2-c97e-4b25-95a5-87b6f814c793.jpg?downsize=634:357', alt: 'Outdoors 2' },
//   ],
//   livingRooms: [
//     { src: 'https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201907241850394005-4eb483d3-14a5-472c-9c57-0ee356b05417.jpg?downsize=634:357', alt: 'Living Room 1' },
//     { src: 'https://r1imghtlak.ibcdn.com/22428b62a3bf11e9a2a20242ac110003.jpeg?downsize=634:357', alt: 'Living Room 2' },
//   ],
//   playArea: [
//     { src: 'https://r1imghtlak.ibcdn.com/126cd0b9-1850-4c1e-a64e-ef74629449af.jpg?downsize=1920:1080', alt: 'Play Area 1' },
//     { src: 'https://r1imghtlak.ibcdn.com/ce0733a6a3bc11e989210242ac110003.jpeg?downsize=634:357', alt: 'Play Area 2' },
//   ],
//   entrance: [
//     { src: 'https://r1imghtlak.ibcdn.com/def1ca8d-6f37-4d0c-b968-02650daf2831.jpg?downsize=634:357', alt: 'Entrance 1' },
//     { src: 'https://r1imghtlak.ibcdn.com/0a37a9f2-c97e-4b25-95a5-87b6f814c793.jpg?downsize=634:357', alt: 'Entrance 2' },
//   ],
//   washroom: [
//     { src: 'https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/201907241850394005-4eb483d3-14a5-472c-9c57-0ee356b05417.jpg?downsize=634:357', alt: 'Washroom 1' },
//     { src: 'https://r1imghtlak.ibcdn.com/22428b62a3bf11e9a2a20242ac110003.jpeg?downsize=634:357', alt: 'Washroom 2' },
//   ],
// };

// const Gallery = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };




//   return (
//     <div className="container mx-auto px-4 py-8 bg-black " >
      
//       <h2 className="text-3xl  font-bold text-white mb-6 text-center py-4  text-5xl ">Gallery</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {Object.entries(photos).map(([category, images]) => (
//           <motion.div
//             key={category}
//             className="overflow-hidden rounded-lg shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-2xl font-semibold text-white capitalize mb-4">{category.replace(/([A-Z])/g, ' $1')}</h3>
//             <Slider {...settings}>
//               {images.map((photo, index) => (
//                 <div key={index} className="px-2">
//                   <div className="overflow-hidden rounded-lg shadow-lg">
//                     <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" />
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

// import { useState } from 'react';
// import Image from 'next/image';

// const images = [
//   { image: '/images/image1.jpg' },
//   { image: '/images/image2.jpg' },
//   { image: '/images/image3.jpg' },
//   { image: '/images/image6.jpg' },
//   { image: '/images/image8.jpg' },
//   { image: '/images/image9.jpg' },
//   { image: '/images/image10.jpg' },
//   { image: '/images/image11.jpg' },
//   { image: '/images/image12.jpg' },
//   { image: '/images/image13.jpg' },
//   { image: '/images/image14.jpg' },
//   { image: '/images/image15.jpg' },
//   { image: '/images/image16.jpg' },
//   { image: '/images/image17.jpg' },
//   { image: '/images/image18.jpg' },
//   { image: '/images/image19.jpg' },
//   { image: '/images/image20.jpg' },
//   { image: '/images/image21.jpg' },
//   { image: '/images/image22.jpg' },
//   { image: '/images/image23.jpg' },
//   { image: '/images/image24.jpg' },
//   { image: '/images/image25.jpg' },
//   { image: '/images/image26.jpg' },
//   { image: '/images/image27.jpg' },
//   { image: '/images/image28.jpg' },
//   { image: '/images/image29.jpg' },
//   { image: '/images/image30.jpg' },
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null); // State for tracking the selected image
//   const [isOpen, setIsOpen] = useState(false); // State for modal open/close

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedImage(null);
//   };
//   const nextImage=()=>{
//     setSelectedImage((prevImage)=>(prevImage+1)%images.length)
//   }

//   return (
//     <section id="gallery" className="py-16 px-4">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Gallery</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images.map((img, index) => (
//   <div key={index} className="relative h-48 w-full cursor-pointer overflow-hidden group">
//     <Image
//       src={img.image}
//       alt={`Image ${index + 1}`}
//       fill
//       style={{ objectFit: 'cover' }} // Use style prop to handle object fit
//       className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
//       onClick={() => openModal(img.image)} // Open modal on click
//     />
//   </div>
// ))}

//         </div>

//         {/* Modal for larger image view */}
//         {isOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
//             <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
//               <span
//                 className="absolute top-4 right-4 bg-white text-blue-600 text-2xl cursor-pointer 
//              w-10 h-10 flex items-center justify-center rounded-full shadow-md 
//              hover:bg-gray-200 transition"
//                 onClick={closeModal} // Close modal on click
//               >
//                 &times;
//               </span>
//               <button
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
//                 onClick={prevImage}
//               >
//                 &#10094;
//               </button>
//               <Image
//                 src={selectedImage}
//                 alt="Selected image"
//                 layout="responsive"
//                 width={700}
//                 height={500}
//                 objectFit="contain"
//                 className="rounded"
//               />
//               <button
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
//                 onClick={nextImage}
//               >
//                 &#10095;
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import { useState, useEffect } from "react";
import Image from "next/image";

const images = Array.from({ length: 27 }, (_, index) => ({
  image: `/images/image${index + 1}.jpg`,
}));

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false); // State to control image visibility

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle Esc key to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(showAll ? images : images.slice(0, 8)).map((img, index) => (
            <div
              key={index}
              className="relative h-48 w-full cursor-pointer overflow-hidden group"
              onClick={() => openModal(index)}
            >
              <Image
                src={img.image}
                alt={`Image ${index + 1}`}
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            Show More
          </button>
        )}

        {/* Modal for Image Preview */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
              <span
                className="absolute top-4 right-4 bg-white text-blue-600 text-2xl cursor-pointer 
                w-10 h-10 flex items-center justify-center rounded-full shadow-md 
                hover:bg-gray-200 transition"
                onClick={closeModal}
              >
                &times;
              </span>

              {/* Previous Button */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
                onClick={prevImage}
              >
                &#10094;
              </button>

              {/* Image */}
              <Image
                src={images[selectedIndex].image}
                alt="Selected image"
                width={700}
                height={500}
                objectFit="contain"
                className="rounded"
              />

              {/* Next Button */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
                onClick={nextImage}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

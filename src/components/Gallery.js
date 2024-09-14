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

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { image: '/images/image1.jpg' },
  { image: '/images/image2.jpg' },
  { image: '/images/bedroom.jpg' },
  { image: '/images/bedroom1.jpg' },
  { image: '/images/bedroom2.jpg' },
  { image: '/images/image3.jpg' },
  { image: '/images/image5.jpg' },
  { image: '/images/image8.jpg' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for tracking the selected image
  const [isOpen, setIsOpen] = useState(false); // State for modal open/close

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative h-48 w-full cursor-pointer">
              <Image
                src={img.image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                onClick={() => openModal(img.image)} // Open modal on click
              />
            </div>
          ))}
        </div>

        {/* Modal for larger image view */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
              <span
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                onClick={closeModal} // Close modal on click
              >
                &times;
              </span>
              <Image
                src={selectedImage}
                alt="Selected image"
                layout="responsive"
                width={700}
                height={500}
                objectFit="contain"
                className="rounded"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

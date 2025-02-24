

// const HeroSection = () => {
//     return (
//       <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(/images/avalanche-hills-ooty-1656333432_c302ca653d90981eb7ac.webp)` }}>
//         <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//           <h1 className="text-4xl font-bold text-white">Welcome to Eadanz Cottage</h1>
//         </div>
//       </section>
//     );
//   };
  
//   export default HeroSection;
  const HeroSection = () => {
    return (
      <section className="relative bg-gray-800 text-white h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div> 
          <img
            src='/images/image1.jpg'
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="relative text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Eadenz Cottages</h1>
          <p className="text-lg">
          Eadenz Cottage is one of the best cottages in Ooty. Enjoy scenic views, trekking, homely food,<br /> and a peaceful stay at an affordable price.</p>
        </div>
      </section>
    );
  };
  
export default HeroSection;

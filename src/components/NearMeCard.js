// import React from 'react';

// const NearMeCard = ({ image, title, description }) => {
//   return (
//     <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer">
//       <img className="w-full h-60 object-cover object-center" src={image} alt={title} />
//       <div className="p-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default NearMeCard;


const NearMeCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer">
      <img className="w-full h-60 object-cover object-center" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default NearMeCard;

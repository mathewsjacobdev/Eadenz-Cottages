import React from 'react';
import NearMeCard from './NearMeCard';

const attractions = [
  {
    title: 'Botanical Gardens',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/0a/4e/beautiful-botanical-garden.jpg?w=1200&h=-1&s=1',
    description: 'Explore the lush greenery and exotic plant species.',
  },
  {
    title: 'Rose Garden',
    image: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_350,h_350/https://doddabetta.com/wp-content/uploads/2015/02/rose-350x350.jpg',
    description: 'Enjoy the beauty and fragrance of various roses.',
  },
  {
    title: 'Bot House',
    image: 'https://asolivagantsshoes.com/wp-content/uploads/2022/05/2022_0504_17361200-2.jpg?w=1200',
    description: 'Discover the botanical research and exhibitions.',
  },
  {
    title: 'Botanical Gardens',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/0a/4e/beautiful-botanical-garden.jpg?w=1200&h=-1&s=1',
    description: 'Explore the lush greenery and exotic plant species.',
  },
  {
    title: 'Rose Garden',
    image: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_350,h_350/https://doddabetta.com/wp-content/uploads/2015/02/rose-350x350.jpg',
    description: 'Enjoy the beauty and fragrance of various roses.',
  },
  {
    title: 'Bot House',
    image: 'https://asolivagantsshoes.com/wp-content/uploads/2022/05/2022_0504_17361200-2.jpg?w=1200',
    description: 'Discover the botanical research and exhibitions.',
  },
  // Add more attractions as needed
];

const NearMe = () => {
  return (
    <div className="container mx-auto px-4 py-10 pb-8">
      <h2 className="text-3xl  font-bold text-white mb-6 text-center py-4  text-5xl ">Nearby Attractions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <NearMeCard key={index} image={attraction.image} title={attraction.title} description={attraction.description} />
        ))}
      </div>
    </div>
  );
};

export default NearMe;

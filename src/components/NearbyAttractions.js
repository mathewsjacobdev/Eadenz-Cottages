import Image from 'next/image';
import NearMeCard from './NearMeCard';
const attractions = [
  {
    title: 'Government Botanical Garden',
    image: '/images/government-botanical-garden-ooty-1655270241_9f0726bf8b407dbb1de6.webp',
    description: 'A lush green paradise with a variety of exotic plants.'
  },
  {
    title: 'Bot House',
    image: '/images/boatHouse.png',
    description: 'Large, scenic lake popular for paddleboating, rowing & other activities in & out of the wate.'
  },
  {
    title: 'Doddabetta Peak Sightseeing',
    image: '/images/donddabetta.jpeg',
    description: 'panoramic views, trekking trails, and telescope house.'
  },
  {
    title: 'wenlock downs 9th mile shooting point',
    image: '/images/wenlock-downs.webp',
    description: 'A popular location for Bollywood films, this vast parkland has horse-riding trails & hillside views.'
  },
  {
    title: 'Government museum ooty',
    image: '/images/museum-ooty.png',
    description: 'Stone House was the first bungalow constructed in Ooty, India. It was built by John Sullivan and was called Kal Bangala by the tribals.'
  },
];

const NearbyAttractions = () => {
  return (
    <section id="nearby-attractions" className="py-16 px-4 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <NearMeCard key={index} image={attraction.image} title={attraction.title} description={attraction.description} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default NearbyAttractions;

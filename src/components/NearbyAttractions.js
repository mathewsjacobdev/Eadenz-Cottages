import Image from 'next/image';
import NearMeCard from './NearMeCard';
const attractions = [
  {
    title: 'Botanical Garden',
    image: '/images/government-botanical-garden-ooty-1655270241_9f0726bf8b407dbb1de6.webp',
    description: 'A lush green paradise with a variety of exotic plants.'
  },
  {
    title: 'Bot House',
    image: '/images/pine-forest-1656503928_d6c35359757cbc521e1b.webp',
    description: 'Learn about botanical research and enjoy exhibitions.'
  }
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

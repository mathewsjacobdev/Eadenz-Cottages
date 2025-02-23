const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-gradient-to-r from-green-50 to-orange-50">
      {/* About Us Heading */}
      <div className="contact-container bg-gray-100 p-8">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Welcome Section */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-green-600">Eadanz Cottages</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Nestled in the heart of Ooty, Eadanz Cottage offers a serene escape with breathtaking views, cozy interiors, and personalized service. Whether you're planning a romantic getaway, a family trip, or a peaceful retreat, our cottage is your perfect home away from home.
        </p>

        {/* Key Highlights */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: 'Scenic Views', description: "Wake up to stunning views of Ooty's hills and lush greenery." },
            { title: 'Comfortable Stay', description: "Experience the comfort of our well-equipped rooms." },
            { title: 'Nearby Attractions', description: "Explore Ooty's best attractions, all just minutes away." }
          ].map((item, index) => (
            <div key={index} className="w-60 p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* New Section: Amenities & Features */}
        <h3 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Our Special Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Camp Fire', icon: '🔥' },
            { name: 'Trekking Space', icon: '🥾' },
            { name: 'Music System', icon: '🎵' },
            { name: 'Homely Food', icon: '🍛' }
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-semibold text-gray-700 mt-2">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* Call-to-Action (WhatsApp) */}
        <div className="mt-8">
          <a
            href="https://wa.me/919876543210" // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Plan Your Stay
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

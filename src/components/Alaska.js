import { FaInstagram } from "react-icons/fa";

const Alaska = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Meet Alaska 🐕</h2>
        <p className="text-lg mb-6">
          Alaska is our beautiful <strong>Alaskan Malamute</strong>. she is 
          very friendly, full of energy, and loves joining guests on trekking 
          adventures. She’s not aggressive, just full of joy and excitement!
        </p>
        <p className="text-lg mb-6">
          If you **love dogs**, he’ll be your perfect **trekking partner**! 
          But if you **prefer not to interact with him**, don’t worry—she 
          will stay in his private space during your stay. Your comfort 
          is our priority. ❤️
        </p>
        <p className="text-lg mb-6">
        "Want to see more of Alaska? 🐶✨ Check out our Instagram page for posts and story highlights featuring Alaska’s adventures! Whether it's trekking through the hills or enjoying cozy moments at the cottage, Alaska is always full of energy and joy. Follow along and experience his playful nature!"
        </p>
        
        {/* Alaska's Images */}
        <div className="flex justify-center gap-4 flex-wrap">
          <img
            src="/images/alaaska.jpg" 
            alt="Alaska the Dog"
            className="w-60 h-60 object-cover rounded-lg shadow-md"
          />
          <video
            src="/images/Alaska-playing.mp4"  // Replace with actual video path
            controls
            className="w-60 h-60 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Instagram Link */}
        <div className="mt-6">
          <a
            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MjY1MjE1OTk0MjA4ODA2?story_media_id=3360619026405113425_8696242006&igsh=MWNiMGIweTNmamtpaA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-blue-600 transition"
          >
            <FaInstagram size={24} />
            {/* Follow Alaska on Instagram */}
            Highlights Of Alaska 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Alaska;

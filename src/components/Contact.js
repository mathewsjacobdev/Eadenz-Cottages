import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-12">Contact</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Details Section */}
        <div className="flex flex-col items-start text-white space-y-4 w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold">Contact Details</h2>
          <p>Valley View, Grand Duff road, Ooty, Tamil Nadu 643001</p>
          <p className="">
            <strong>Phone:</strong> 9878998876
          </p>
          <p className="">
            <strong>Email:</strong> mnhhj@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-900">
              <FaInstagram size={30} />
            </a>
            <a href="https://wa.me/9878998876" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-900">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d15645.069435770436!2d76.7168734!3d11.3881174!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3ba89715317c62a9%3A0xb81011ce1ae0f92d!2sEadenz%20valley%20view%20cottages%2C%20Valley%20View%2C%20Grand%20Duff%20road%2C%20Ooty%2C%20Tamil%20Nadu%20643001!3m2!1d11.388117399999999!2d76.7168734!5e0!3m2!1sen!2sin!4v1720625217541!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

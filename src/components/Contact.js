import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='Contact'  className="py-16 px-4">
    <div  className="contact-container bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      {/* Main layout for content and map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left section for contact details and social links */}
        <div className="contact-details space-y-4">
          <p className="text-lg">Valley View, Grand Duff Road, Ooty, Tamil Nadu 643001</p>
          <p className="text-lg">Phone: <a href="tel:+91 9446938124" className="text-blue-600 hover:underline">+91 9446938124</a></p>
          <p className="text-lg">Email: <a href="mailto:mnhhj@gmail.com" className="text-blue-600 hover:underline">mnhhj@gmail.com</a></p>

          <div className="social-media-links flex space-x-6 mt-4">
            {/* Instagram */}
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-500 hover:text-pink-600" />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/9878998876" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl text-green-500 hover:text-green-600" />
            </a>

            {/* Phone Call */}
            <a href="tel:+91 9446938124">
              <FaPhoneAlt className="text-3xl text-blue-500 hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Right section for the map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96349.06530405712!2d76.67974871157206!3d11.375766166276351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3ba89715317c62a9%3A0xb81011ce1ae0f92d!2sEadenz%20valley%20view%20cottages%2C%20Valley%20View%2C%20Grand%20Duff%20road%2C%20Ooty%2C%20Tamil%20Nadu%20643001!3m2!1d11.388117399999999!2d76.7168734!5e0!3m2!1sen!2sin!4v1726319163131!5m2!1sen!2sinnpm"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;

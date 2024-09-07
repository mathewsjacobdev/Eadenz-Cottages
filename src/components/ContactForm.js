// const ContactSection = () => {
//     return (
//       <section id="contact" className="bg-white py-10">
//         <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//         <div className="container mx-auto px-4 text-center">
//           <p className="mb-4">For bookings and inquiries, contact us via:</p>
//           <div className="flex justify-center space-x-4 mb-6">
//             <a href="https://wa.me/123456789" className="text-green-500 hover:text-green-700">WhatsApp</a>
//             <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700">Facebook</a>
//             <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">Instagram</a>
//             <a href="mailto:info@eadanzcottage.com" className="text-red-500 hover:text-red-700">Email</a>
//           </div>
//           <form className="max-w-lg mx-auto">
//             <input type="text" placeholder="Name" className="block w-full p-2 border mb-4" />
//             <input type="email" placeholder="Email" className="block w-full p-2 border mb-4" />
//             <textarea placeholder="Your Message" className="block w-full p-2 border mb-4"></textarea>
//             <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Send Message</button>
//           </form>
//         </div>
//       </section>
//     );
//   };
  
//   export default ContactSection;
const ContactForm = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

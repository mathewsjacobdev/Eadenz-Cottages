import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">Follow us on:</p>
          <div className="flex justify-center space-x-4">
 <a href="https://wa.me/9446938124

" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl text-green-500 hover:text-green-600" />
            </a>            
 <a href="https://www.facebook.com/share/1Ax5r8KpHt" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-pink-500 hover:text-pink-600" />
            </a>
           <a href="https://www.instagram.com/eadenz_cottages?igsh=eG51endydnVrenNz" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl text-pink-500 hover:text-pink-600" />
                      </a>

          </div>
          <p className="mt-4">Email: eadenzooty@gmail.com</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Eadanz Cottage. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
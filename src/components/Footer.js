const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">Follow us on:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.whatsapp.com/" className="text-xl">WhatsApp</a>
            <a href="https://www.facebook.com/" className="text-xl">Facebook</a>
            <a href="https://www.instagram.com/" className="text-xl">Instagram</a>
          </div>
          <p className="mt-4">Email: info@eadanzcottage.com</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Eadanz Cottage. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
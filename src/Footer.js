import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Customer Service</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">UDIX Corporate Office</h3>
          <address>628 Sutter St, Floor 6, #800<br />San Francisco, CA 94102<br />+1 (234) 567-890</address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
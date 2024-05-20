import React from 'react';
import companyLogo from './assets/images/BB-logo15 (без фона).png'; // Path to your company logo
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // React Icons for social media

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={companyLogo} alt="Company Logo" className="h-10" />
          <span className="ml-3 text-xl font-bold text-gray-800">BB Consulting Group</span>
        </div>
        <div className="flex space-x-4 text-sm">
          <a 
            href="https://instagram.com/bbconsgroup" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-pink-600 hover:text-pink-700 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-pink-600 rounded"
          >
            <FaInstagram className="mr-1" /> Instagram
          </a>
          <a 
            href="https://wa.me/77018804699" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-green-500 hover:text-green-600 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-green-500 rounded"
          >
            <FaWhatsapp className="mr-1" /> WhatsApp
          </a>
          <a 
            href="mailto:bbcngr@mail.ru" 
            className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-blue-500 rounded"
          >
            <FaEnvelope className="mr-1" /> Email
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 flex flex-wrap justify-center space-x-0 md:space-x-6 text-lg font-medium text-gray-700">
        <a 
          href="#tenders" 
          className="block md:inline-block hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded mb-2 md:mb-0"
        >
          Тендеры
        </a>
        <a 
          href="#consulting" 
          className="block md:inline-block hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded mb-2 md:mb-0"
        >
          Консалтинг
        </a>
        <a 
          href="#outsourcing" 
          className="block md:inline-block hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded mb-2 md:mb-0"
        >
          Аутсорсинг
        </a>
        <a 
          href="#training" 
          className="block md:inline-block hover:text-gray-900 transition-colors duration-300 px-3 py-2 border border-transparent hover:border-gray-300 rounded"
        >
          Обучение
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

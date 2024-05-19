import React from 'react';
import companyLogo from './assets/images/BB-logo15 (без фона).png'; // Path to your company logo
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // React Icons for social media

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center">
          <img src={companyLogo} alt="Company Logo" className="h-10" />
          <span className="ml-3 text-xl font-bold text-gray-800">BB Consulting Group</span>
        </div>
        <div className="flex space-x-4 text-sm">
          <a href="https://instagram.com/bbconsgroup" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:text-pink-700 transition-colors duration-300">
            <FaInstagram className="mr-1" /> Instagram
          </a>
          <a href="https://wa.me/77018804699" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-600 transition-colors duration-300">
            <FaWhatsapp className="mr-1" /> WhatsApp
          </a>
          <a href="mailto:bbcngr@mail.ru" className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
            <FaEnvelope className="mr-1" /> Email
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-2 flex justify-center space-x-6 text-lg font-medium text-gray-700">
        <a href="#tenders" className="hover:text-gray-900 transition-colors duration-300">Тендеры</a>
        <a href="#consulting" className="hover:text-gray-900 transition-colors duration-300">Консалтинг</a>
        <a href="#outsourcing" className="hover:text-gray-900 transition-colors duration-300">Аутсорсинг</a>
        <a href="#training" className="hover:text-gray-900 transition-colors duration-300">Обучение</a>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { FaCheckCircle, FaRegLightbulb, FaChalkboardTeacher } from 'react-icons/fa';
import bgImage from './assets/images/4022164.jpg'; // Adjust the path as necessary

const AboutUs = () => {
  return (
    <section
      className="bg-cover bg-center py-20 px-4 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-70 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">О компании</h2>
          <p className="text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
            «BB Consulting Group» – это ведущая консалтинговая компания, специализирующаяся на оказании услуг по государственным и коммерческим закупкам (тендерам). Мы предоставляем широкий спектр услуг в области консалтинга, аутсорсинга и обучения, чтобы помочь нашим клиентам успешно участвовать в тендерах и достигать своих целей. Наша компания имеет богатый опыт и надежную репутацию, что позволяет нам успешно работать с различными клиентами и достигать высоких результатов.
          </p>
          <h3 className="text-4xl font-bold mb-6">Наша главная цель</h3>
          <p className="text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Наша главная цель – помочь клиентам принять участие в тендерах с минимальными рисками и максимальными шансами на победу!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-gray-800 bg-opacity-75 shadow-lg rounded-lg">
              <FaCheckCircle className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-2xl font-bold mb-2">Консалтинг</h4>
              <p className="text-gray-300">Экспертные рекомендации и стратегии для успешного участия в тендерах.</p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300">Узнать больше</button>
            </div>
            <div className="p-6 bg-gray-800 bg-opacity-75 shadow-lg rounded-lg">
              <FaRegLightbulb className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-2xl font-bold mb-2">Аутсорсинг</h4>
              <p className="text-gray-300">Полное сопровождение тендерного процесса с минимальными рисками.</p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300">Узнать больше</button>
            </div>
            <div className="p-6 bg-gray-800 bg-opacity-75 shadow-lg rounded-lg">
              <FaChalkboardTeacher className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-2xl font-bold mb-2">Обучение</h4>
              <p className="text-gray-300">Профессиональные тренинги и семинары для повышения квалификации.</p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300">Узнать больше</button>
            </div>
          </div>
          <div className="mt-12">
            <h4 className="text-2xl font-bold mb-4">Свяжитесь с нами</h4>
            <p className="text-lg mb-2">
              Instagram: <a href="https://www.instagram.com/bbconsulting" className="text-yellow-500">@bbconsulting</a>
            </p>
            <p className="text-lg mb-2">
              Email: <a href="mailto:info@bbconsulting.com" className="text-yellow-500">info@bbconsulting.com</a>
            </p>
            <p className="text-lg">
              Телефон: <a href="tel:+1234567890" className="text-yellow-500">+1 (234) 567-890</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

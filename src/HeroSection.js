import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-red-500 text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            UDIX — New web Template for Figma!
          </h1>
          <p className="mb-8">
            UDIX comes equipped with best-practice templates for all your needs
            to reinvent the wheel.
          </p>
          <button className="bg-white text-red-500 px-4 py-2 rounded">
            Check our solutions
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src={require("./assets/images/4022164.jpg")} alt="Hero" className="w-full h-auto" />
        </div>

        <div>О компании</div>
        <div> переход INSTAGRAM, Whatsapp напишите нам</div>
        <div>1) Наша деятельность</div>
        <div>2) 🔍 Что мы делаем:</div>
        <div> переход INSTAGRAM, Whatsapp напишите нам</div>


        <div>2) Список предоставляемых услуг</div>
        <div>Регистрация и управление бизнесом:</div>
        Консалтинг:
        Тендеры:
        Сопровождение тендеров «под ключ»
        Аутсорсинг тендеров
        Обучение тендерам

      </div>
      <div>            Реквизиты: переход в инстаграмм </div>
     на зеленый цвет

    </section>
  );
};

export default HeroSection;

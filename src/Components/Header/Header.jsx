import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { FaNetworkWired } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const translations = {
  Eng: {
    menu: ["Home", "About Us", "Tours", "Hotels", "Tickets", "Contact"],
    heroTitle: "Start your journey with us",
    heroSubtitle: "Nemo Travel - the way to comfort",
    stats: ["Happy Customers", "Countries", "Experience"],
    moreInfo: "More Information",
  },
  Rus: {
    menu: ["Главная", "О нас", "Туры", "Отели", "Билеты", "Контакт"],
    heroTitle: "Начните свое путешествие с нами",
    heroSubtitle: "Nemo Travel - путь к комфорту",
    stats: ["Довольные клиенты", "Страны", "Опыт"],
    moreInfo: "Подробнее",
  },
  Uzb: {
    menu: ["Asosiy", "Biz Haqimizda", "Turlar", "Mehmonxonalar", "Aviachiptalar", "Aloqa"],
    heroTitle: "Sayohatingizni biz bilan boshlang",
    heroSubtitle: "Nemo Travel - huzur uchun yo'l",
    stats: ["Mamnun mijozlar", "Mamlakatlar", "Tajriba"],
    moreInfo: "Batafsil ma'lumot",
  },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Eng");
  const t = translations[language];

  return (
    <div className="bg-orange-500 w-full min-h-screen">
      <div className="w-[1260px] mx-auto h-24 flex items-center justify-between px-4 md:px-0">
        <a href="#">
          <img className="w-[130px]" src={logo} alt="Logo" />
        </a>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose className="text-white text-3xl" /> : <FiMenu className="text-white text-3xl" />}
        </div>
        <ul className="hidden md:flex justify-between w-[600px] text-white">
          {t.menu.map((item, index) => (
            <li key={index} className="hover:scale-110 transition-all duration-500">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="relative">
          <select
            className="text-white bg-orange-500 outline-none border border-white rounded-md px-3 py-2 cursor-pointer appearance-none hover:bg-orange-500 focus:ring focus:ring-orange-300 transition-all duration-300 transform hover:scale-105 focus:scale-105"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            onFocus={(e) => e.target.classList.add('border-orange-300', 'bg-orange-600')}
            onBlur={(e) => e.target.classList.remove('border-orange-300', 'bg-orange-600')}
          >
            {Object.keys(translations).map((lang) => (
              <option key={lang} className="text-black bg-white">{lang}</option>
            ))}
          </select>
        </div>
      </div>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-orange-500 text-white py-4 space-y-4 transition-all duration-300 transform opacity-100 ease-in-out">
          {t.menu.map((item, index) => (
            <li
              key={index}
              className="transition-all duration-300 transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-[100px] text-center px-4">
        <h1 className="text-[40px] md:text-[65px] font-bold text-white">
          {t.heroTitle}
        </h1>
        <h2 className="text-[24px] md:text-[40px] text-white mt-2">
          {t.heroSubtitle}
        </h2>
      </div>
      <div className="w-[90%] md:w-[900px] py-6 md:py-[50px] rounded-[30px] md:rounded-[150px] bg-white mx-auto mt-[50px] flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0 px-6 md:px-0">
        {[{ icon: <CgProfile />, title: t.stats[0], value: "45000+" },
          { icon: <FaNetworkWired />, title: t.stats[1], value: "30+" },
          { icon: <FaRegClock />, title: t.stats[2], value: "5+ yil" }].map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl md:text-2xl">
              {item.icon}
            </div>
            <div>
              <h1 className="text-gray-700 text-sm md:text-base">{item.title}</h1>
              <h2 className="font-bold text-gray-700 text-lg md:text-xl">{item.value}</h2>
            </div>
          </div>
        ))}
        <button className="w-[150px] md:w-[200px] h-[40px] md:h-[50px] bg-orange-500 text-white rounded-[50px] md:rounded-[100px] hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all duration-500">
          {t.moreInfo}
        </button>
      </div>
    </div>
  );
}

export default Header;

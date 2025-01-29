import React from "react";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { FaNetworkWired } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
function Header() {
  return (
    <div className="bg-orange-500 max-w-full h-[747px]">
      <div className="w-[1260px] mx-auto h-24 items-center flex justify-between">
        <div>
          <a href="#">
            <img className="w-[130px]" src={logo} alt="" />
          </a>
        </div>
        <div>
          <ul className="flex justify-between w-[600px] decoration-0 list-none text-white">
            <li className="hover:scale-[1.1] transition-all duration-[0.5s]">
              <a href="#">Asosiy</a>
            </li>
            <li className="hover:scale-[1.1] transition-all duration-[0.5s]">
              <a href="#">Biz Haqimizda</a>
            </li>
            <li className="hover:scale-[1.1] transition-all duration-[0.5s]">
              <a href="#">Turlar</a>
            </li>
            <li className="hover:scale-[1.1] transition-all duration-[0.5s]">
              <a href="#">Mehmonxonalar</a>
            </li>
            <li className="hover:scale-[1.1] transition-all duration-[0.5s]">
              <a href="#">Aviachiptalar</a>
            </li>
            <li className="hover:scale-[1.1] transition-all duration-[0.5s]">
              <a href="#">Aloqa</a>
            </li>
          </ul>
        </div>
        <div>
          <select
            name="Langauage"
            className="text-white bg-orange-500 outline-0"
          >
            <option className="" value="Eng">
              Eng
            </option>
            <option value="Rus">Rus</option>
            <option value="Uzb">Uzb</option>
          </select>
        </div>
      </div>
      {/* ---------Hero---------- */}
      <div className="mt-[100px]">
        <div>
          <h1 className="text-[65px] font-bold text-white text-center">
            Sayohatingizni biz bilan boshlang
          </h1>
          <h1 className="text-white text-[40px] text-center">
            Nemo Travel - huzur uchun yo'l
          </h1>
        </div>
        <div className="w-[900px] py-[50px] rounded-[150px] bg-white mx-auto mt-[50px] flex justify-around">
          <div className="flex gap-[10px]">
            <div className="w-10 h-10 bg-orange-500 rounded-[50%] relative">
              <CgProfile className="text-[30px] mx-[5px] text-white text-center absolute top-[5px]" />
            </div>
            <div>
              <h1 className="text-gray-700">Mamnun mijozlar</h1>
              <h1 className="font-bold text-gray-700">45000+</h1>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-10 h-10 bg-orange-500 rounded-[50%] relative">
              <FaNetworkWired className="text-[30px] mx-[5px] text-white text-center absolute top-[5px]" />
            </div>
            <div>
              <h1 className="text-gray-700">Mamnun mijozlar</h1>
              <h1 className="font-bold text-gray-700">45000+</h1>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="w-10 h-10 bg-orange-500 rounded-[50%] relative">
              <FaRegClock className="text-[30px] mx-[5px] text-white text-center absolute top-[5px]" />
            </div>
            <div>
              <h1 className="text-gray-700">Mamnun mijozlar</h1>
              <h1 className="font-bold text-gray-700">45000+</h1>
            </div>
          </div>
          <div>
            <button className="w-[150px] h-[40px] bg-orange-500 text-white rounded-[100px] hover:bg-white hover:text-orange-500 hover:border-[1px] hover:border-orange-500 transition-all duration-1000 hover:scale-[1.1] ">
              Batafsil ma'lumot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

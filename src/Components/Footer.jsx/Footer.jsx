import React from "react";
import logo from "../../assets/logo.png";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Footer() {
  return (
    <div className="bg-[#111827] mt-[100px] h-[280px]">
        <div className="flex m-[50px] justify-around p-[50px] " >
            <div>
                <img className="w-[150px] mb-[20px]" src={logo} alt="" />
                <h1 className="text-gray-400 text-[17px]">Toshkent shahri, Muqimiy ko'chasi 44-A <br /> uy</h1>
            </div>
            <div>
                <h1 className="text-gray-200 text-[22px] font-[300] mb-[10px]">Bog'lanish</h1>
                <h1 className="text-gray-400 text-[17px] mb-[10px]">Tel: +998 95 150 00 00</h1>
                <h1 className="text-gray-400 text-[17px] mb-[10px]">info@nemoavia.uz</h1>
            </div>
            <div>
                <h1 className="text-gray-200 font-[300] text-[22px] mb-[15px]">Ijtimoiy tarmoqlar</h1>
                <div className="flex gap-3">
                <a href="https://t.me/NemoTC"><FaTelegram className="text-[30px] text-gray-400 hover:text-white transition-all" /></a>
                <a href="https://www.instagram.com/nemotravel_uz"><FaInstagram className="text-[30px] text-gray-400 hover:text-white transition-all"  /></a>
                <a href="mailto:Info@nemoaviatrip.uz"><SiGmail className="text-[30px] text-gray-400 hover:text-white transition-all"  /></a>
                </div>
            </div>
            <div>
                <h1 className="text-gray-200 font-[300] text-[22px] mb-[15px]" >Manzil</h1>
                <h1 className="text-gray-400 text-[17px]">Toshkent shahri, Muqimiy ko'chasi 44-A <br /> uy</h1>
            </div>
        </div>
        <div>
            <hr className="w-[1230px] m-auto bg-gray-700 h-[1px] border-none mt-[-70px]" />
        </div>
        <div><h1 className="text-gray-400 text-center mt-[20px]">2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.</h1></div>
    </div>
  );
}

export default Footer;

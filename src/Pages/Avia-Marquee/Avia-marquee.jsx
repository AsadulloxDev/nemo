import React from "react";
import Marquee from "react-fast-marquee";
import airways from "../../assets/airways.jpg";
import turkishAirways from "../../assets/turkish-airways.jpg";
import qatarAirways from "../../assets/qatar-airways.jpg";
import centrumAirways from "../../assets/centrum-airways.jpg";
import uzAirways from "../../assets/uzairways.jpg"

function AviaMarquee() {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mb-15 mt-[100px]">Hamkorlarimiz</h1>
      <Marquee>
        <div className="flex gap-[105px]">
        <div className="w-[200px]">
            <img className="w-[200px] rounded h-[120px] bg-cover" src={airways} alt="" />
            <h1 className="text-gray-700 text-center mt-[5px]" >Emirates</h1>
        </div>
        <div className="w-[200px]">
            <img className="w-[200px] rounded h-[120px] bg-cover" src={turkishAirways} alt="" />
            <h1 className="text-gray-700 text-center mt-[5px]" >Turkish Airways</h1>
        </div>
        <div className="w-[200px]">
            <img className="w-[200px] rounded h-[120px] bg-cover" src={qatarAirways} alt="" />
            <h1 className="text-gray-700 text-center mt-[5px]" >Qatar Airways</h1>
        </div>
        <div className="w-[200px]">
            <img className="w-[200px] rounded h-[120px] bg-cover" src={centrumAirways} alt="" />
            <h1 className="text-gray-700 text-center mt-[5px]" >Centrum Air</h1>
        </div>
        <div className="w-[200px]">
            <img className="w-[200px] rounded h-[120px] bg-cover" src={uzAirways} alt="" />
            <h1 className="text-gray-700 text-center mt-[5px]" >Uzairways</h1>
        </div>
        </div>
        
      </Marquee>
    </div>
  );
}

export default AviaMarquee;

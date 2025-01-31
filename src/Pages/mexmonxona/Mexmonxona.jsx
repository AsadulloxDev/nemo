import React from "react";
import hayat from "../../assets/hayat.jpg";
import hilton from "../../assets/hilton.jpg";
import cityplace from "../../assets/cityplace.jpg";
function Mexmonxona() {
  return (
    <div className="mt-[100px]">
      <h1 className="font-bold text-[40px] text-center">Mehmonxonalar</h1>
      <div className="flex justify-around mt-[50px]">
        <div className="hover:shadow-orange-300 transition-all duration-300 w-[470px] h-[425px] shadow-2xl shadow-gray-300 rounded-xl mb-[100px] div-card">
          <div>
            <img
              className="rounded-t-lg w-[500px] h-[250px] bg-cover "
              src={hayat}
              alt=""
            />
          </div>
          <div className="p-[15px]">
            <h1 className="font-medium text-[20px] ">Hyatt Regency Tashkent</h1>
            <h1 className="text-gray-700 mt-[5px] text-[17px]">Navoi ko'chasi 1-uy, Toshkent</h1>
            <h1 className="text-gray-700 mt-[5px] text-[17px]">Zamonaviy mehmonxona markaz markazida</h1>
            <button className="w-[160px] h-[35px] text-white rounded-3xl mt-[15px] bg-orange-500 hover:bg-white hover:border-[1px] border-orange-500 hover:text-orange-500 transition-all duration-300">Batafsil ma'lumot</button>
          </div>
        </div>
        <div className=" hover:shadow-orange-300 transition-all duration-300 w-[470px] h-[425px] shadow-2xl shadow-gray-300 rounded-xl mb-[100px]">
          <div>
            <img
              className="rounded-t-lg w-[500px] h-[250px] bg-cover "
              src={hilton}
              alt=""
            />
          </div>
          <div className="p-[15px]">
            <h1 className="font-medium text-[20px] ">Hilton Tashkent City</h1>
            <h1 className="text-gray-700 mt-[5px] text-[17px]">Islom Karimov ko'chasi 2-uy, Toshkent</h1>
            <h1 className="text-gray-700 mt-[5px] text-[17px]">Biznes mehmonxona shahar markazida</h1>
            <button className="w-[160px] h-[35px] text-white rounded-3xl mt-[15px] bg-orange-500 hover:bg-white hover:border-[1px] border-orange-500 hover:text-orange-500 transition-all duration-300 ">Batafsil ma'lumot</button>
          </div>
        </div>
        <div className=" hover:shadow-orange-300 transition-all duration-300 w-[470px] h-[425px] shadow-2xl shadow-gray-300 rounded-xl mb-[100px]">
          <div>
            <img
              className="rounded-t-lg w-[500px] h-[250px] bg-cover "
              src={cityplace}
              alt=""
            />
          </div>
          <div className="p-[15px]">
            <h1 className="font-medium text-[20px] ">City Palace Hotel</h1>
            <h1 className="text-gray-700 mt-[5px] text-[17px]">Amir Temur ko'chasi 15-uy, Toshkent</h1>
            <h1 className="text-gray-700 mt-[5px] text-[17px]">Qulay mehmonxona diqqatga sazovor joylar yaqinida</h1>
            <button className="w-[160px] h-[35px] text-white rounded-3xl mt-[15px] bg-orange-500 hover:bg-white hover:border-[1px] border-orange-500 hover:text-orange-500 transition-all duration-300 ">Batafsil ma'lumot</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mexmonxona;

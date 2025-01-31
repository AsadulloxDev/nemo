import React, { useState } from "react";

function Aviachipta() {
  const [ActiveBtn, setActiveBtn] = useState("borish");
  const [Activeh1, setActiveh1] = useState(true);
  return (
    <div>
      <h1 className="font-bold text-[40px] text-center">Aviachiptalar</h1>
      <div className="w-[1000px] h-auto shadow-2xl p-4 mx-auto mb-[100px] rounded-2xl">
        <div className="mb-4">
          <button
            className={`w-[70px] h-[40px] rounded-md text-gray-700 mr-2 ${
              ActiveBtn === "borish"
                ? "bg-orange-500 text-white shadow-[0px_0px_15px_0px] shadow-orange-500"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveBtn("borish")}
          >
            Borish
          </button>
          <button
            className={`w-[70px] h-[40px] rounded-md text-gray-700 ${
              ActiveBtn === "qaytish"
                ? "bg-orange-500 text-white shadow-[0px_0px_15px_0px] shadow-orange-500"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveBtn("qaytish")}
          >
            Qaytish
          </button>
        </div>

        <div className="grid-cols-4 grid">
          <div>
            <h1 className="font-[500] text-[14px] mb-2 text-gray-700">
              Qayerdan
            </h1>
            <input
              className="border-[1px] border-gray-400 rounded h-[35px] mb-[20px]"
              type="text"
            />
          </div>
          <div>
            <h1 className=" font-[500] text-[14px] mb-2 text-gray-700">
              Qayerga
            </h1>
            <input
              className="border-[1px] border-gray-400 rounded h-[35px]"
              type="text"
            />
          </div>
          <div>
            <h1 className="font-[500] text-[14px] mb-2 text-gray-700">
              Jo'nash sanasi
            </h1>
            <input
              className="p-[5px] border-[1px] border-gray-400 rounded w-[181px] h-[35px]"
              type="date"
            />
          </div>
          {ActiveBtn === "qaytish" && (
            <div>
              <h1 className=" font-[500] text-[14px] mb-2 text-gray-700">
                Qaytish sanasi
              </h1>
              <input
                className="p-[5px] border-[1px] border-gray-400 rounded w-[181px] h-[35px]"
                type="date"
              />
            </div>
          )}
          <div>
            <h1 className="font-[500] text-[14px] mb-2 text-gray-700">
              Yo'lovchilar
            </h1>
            <input
              className="p-[5px] border-[1px] border-gray-400 w-[181px] rounded h-[35px]"
              defaultValue={1}
              type="number"
            />
          </div>
        </div>
        <button onClick={() => setActiveh1("true")} className="w-[800px] bg-orange-500 text-white h-[35px] rounded-lg mt-8 ml-[80px] hover:bg-orange-600 hover:shadow-orange-600 hover:shadow-lg active:bg-orange-700 active:shadow-orange-700 transition-all duration-300">
          Qidirish
        </button>
        {Activeh1 === "true" && (
          <h1 className="mt-[10px] text-center text-green-500">So'rovingiz yuborildi !</h1>
        )}

      </div>
    </div>
  );
}

export default Aviachipta;

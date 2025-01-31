import React, { useState } from "react";
function Input() {
    const [ActiveH1, setActiveH1] = useState(true);
    return (
    <div className="mt-[150px]">
      <h1 className="text-[35px] font-bold text-center">
        Biz bilan bog'lanish
      </h1>
      <h1 className="text-[25px] text-gray-700 text-center">
        Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz
      </h1>
      <div className="flex gap-[20px] m-auto mt-[50px] ml-[200px] ">
        <div className="w-[600px] h-auto shadow-lg rounded p-[20px]">
          <div>
            <h1 className="text-gray-700">Ismingiz</h1>
            <input
              className="rounded border-gray-200 border-[1px] w-[550px] h-[35px]"
              type="text"
            />
          </div>
          <div>
            <h1 className="text-gray-700 mt-[20px]">Email manzilingiz</h1>
            <input
              className="rounded border-gray-200 border-[1px] w-[550px] h-[35px]"
              type="email"
            />
          </div>
          <div>
            <h1 className="text-gray-700 mt-[20px]">Telefon raqamingiz</h1>
            <input
              className="rounded border-gray-200 border-[1px] w-[550px] h-[35px]"
              type="tel"
            />
          </div>
          <div>
            <h1 className="text-gray-700 mt-[20px]">Mavzu</h1>
            <input
              className="rounded border-gray-200 border-[1px] w-[550px] h-[35px]"
              type="text"
            />
          </div>
          <div>
            <h1 className="text-gray-700 mt-[20px]">Xabaringiz</h1>
            <textarea className="rounded border-gray-200 border-[1px] w-[550px] h-[120px]"></textarea>
          </div>
          <div>
            <button
              onClick={() => setActiveH1("true")}
              className="w-[550px] h-[35px] rounded bg-black opacity-80 text-white hover:opacity-70 active:opacity-60"
            >
              Yuborish
            </button>
          </div>
          {ActiveH1 === "true" && (
            <div>
              <h1 className="text-green-500 text-center mt-2">
                Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.
              </h1>
            </div>
          )}
        </div>
        <div>
          <div className="p-[15px] shadow-lg mb-[15px] rounded-lg">
            <h1 className="font-[500] text-[22px]">Aloqa ma'lumotlari</h1>
            <h1 className="text-gray-700 mb-[10px]">Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy</h1>
            <h1 className="text-gray-700 mb-[10px]">Tel: +998 95 150 00 00</h1>
            <h1 className="text-gray-700 mb-[10px]">Email: info@nemoavia.uz</h1>
            <h1 className="text-gray-700 mb-[10px]">Ish vaqti: Du-Sha 24 soat</h1>
          </div>
          <div className="w-[500px] h-[325px] rounded shadow-lg p-[20px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2835640978988!2d69.23692447590305!3d41.28093263920834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2z0YPQu9C40YbQsCDQnNGD0LrQuNC80LggNDQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1734545057788!5m2!1sru!2s"
              width="100%"
              height="100%"
              className="rounded"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;

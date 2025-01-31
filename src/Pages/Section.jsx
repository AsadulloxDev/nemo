import React from 'react';
import nemo1 from '../../src/assets/nemo 1.jpg';
import nemo2 from '../../src/assets/nemo 2.jpg';
import nemo3 from '../../src/assets/nemo 3.jpg';

function Section() {
  return (
    <div>
      <div className='mt-[100px]'>
        <h1 className='font-bold text-[45px] md:text-[45px] text-center'>Biz haqimizda</h1>
        <h1 className='text-gray-700 text-[25px] md:text-[25px] text-center'>Sizning ishonchli sayohat hamkoringiz</h1>
        
        <div className='flex flex-col md:flex-row mx-auto justify-evenly mt-[60px] mb-[100px]'>
          <div className='w-full md:w-[650px] p-[30px] rounded-2 shadow-xl shadow-gray-300 rounded-[20px] mb-4 md:mb-0'>
            <h1 className='text-[25px] font-bold'>Bizning vazifamiz</h1>
            <p className='text-gray-700'>Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish</p>
          </div>
          <div className='w-full md:w-[650px] p-[30px] rounded-2 shadow-xl shadow-gray-300 rounded-[20px]'>
            <h1 className='text-[25px] font-bold'>Bizning maqsadimiz</h1>
            <p className='text-gray-700'>O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro miqyosida tan olingan brend bo'lish</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-around'>
        <div className='w-full md:w-[500px] px-4'>
          <h1 className='text-[16px] md:text-[18px] text-gray-700'>
            Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.
          </h1>
          <h1 className='text-[16px] md:text-[18px] text-gray-700 mt-[20px]'>
            Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.
          </h1>
        </div>
        <div className='mt-4 md:mt-0'>
          <img className='w-150 h-64 object-cover rounded-lg shadow-2xl' src={nemo1} alt="" />
          <div className='flex gap-10 mt-[30px]'>
            <img className='w-70 h-64 object-cover rounded-lg shadow-2xl' src={nemo2} alt="" />
            <img className='w-70 h-64 object-cover rounded-lg shadow-2xl' src={nemo3} alt="" />
          </div>
        </div>
      </div>

      <div className='mt-[100px]'>
        <h1 className='text-center font-bold text-[35px]'>Bizning jamoa</h1>
        <ul className='flex flex-col md:flex-row justify-around mt-[50px] mb-[100px]'>
          <li className='cursor-pointer w-full md:w-[300px] p-[40px] shadow-2xl shadow-orange-300 hover:shadow-orange-500 transition-all duration-500 text-center text-[20px] rounded-[10px] mb-4 md:mb-0'>
            <h1>Direktor</h1>
          </li>
          <li className='cursor-pointer w-full md:w-[300px] p-[40px] shadow-2xl shadow-orange-300 hover:shadow-orange-500 transition-all duration-500 text-center text-[20px] rounded-[10px] mb-4 md:mb-0'>
            <h1>Yurist</h1>
          </li>
          <li className='cursor-pointer w-full md:w-[300px] p-[40px] shadow-2xl shadow-orange-300 hover:shadow-orange-500 transition-all duration-500 text-center text-[20px] rounded-[10px] mb-4 md:mb-0'>
            <h1>Operator</h1>
          </li>
          <li className='cursor-pointer w-full md:w-[300px] p-[40px] shadow-2xl shadow-orange-300 hover:shadow-orange-500 transition-all duration-500 text-center text-[20px] rounded-[10px]'>
            <h1>Administrator</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;

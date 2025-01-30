import React from 'react'
import registon from "../../assets/registon.jpg"
import turkiya from "../../assets/turkiya.jpg"
import dubay from "../../assets/dubay.jpg"
import yevropa from "../../assets/yevropa.jpg"
function Turlar() {
  return (
    <div>
        <h1 className='font-bold text-[35px] text-center'>Turlar</h1>
        <h1 className='text-[25px] text-gray-500 text-center'>Eng yaxshi sayohat turlari</h1>
        <div className='flex justify-around mt-[30px]'>
            <div className='w-[350px] h-[400px] shadow-2xl rounded-2xl hover:shadow-orange-500 transition-all duration-300'>
                <div>
                <img className='rounded-t-2xl' src={registon} alt="" />
                </div>
                <div className='p-[10px]'>
                <h1 className='font-bold text-[23px] '>O'zbekiston bo'ylab sayohat</h1>
                <p className='text-[18px] mt-[10px] text-gray-600' >O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
                <button className='w-[100px] text-white rounded-3xl mt-[15px] h-[35px] bg-orange-500 hover:bg-orange-700 transition-all duration-300'>Batafsil</button>
                </div>
            </div>
            <div className='w-[350px] h-[400px] shadow-2xl rounded-2xl hover:shadow-orange-500 transition-all duration-300'>
                <div>
                <img className='rounded-t-2xl' src={turkiya} alt="" />
                </div>
                <div className='p-[10px]'>
                <h1 className='font-bold text-[23px] '>O'zbekiston bo'ylab sayohat</h1>
                <p className='text-[18px] mt-[10px] text-gray-600' >O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
                <button className='w-[100px] text-white rounded-3xl mt-[15px] h-[35px] bg-orange-500 hover:bg-orange-700 transition-all duration-300'>Batafsil</button>
                </div>
            </div>
            <div className='w-[350px] h-[400px] shadow-2xl rounded-2xl hover:shadow-orange-500 transition-all duration-300'>
                <div>
                <img className='rounded-t-2xl' src={dubay} alt="" />
                </div>
                <div className='p-[10px]'>
                <h1 className='font-bold text-[23px] '>O'zbekiston bo'ylab sayohat</h1>
                <p className='text-[18px] mt-[10px] text-gray-600' >O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
                <button className='w-[100px] text-white rounded-3xl mt-[15px] h-[35px] bg-orange-500 hover:bg-orange-700 transition-all duration-300'>Batafsil</button>
                </div>
            </div>
            <div className='w-[350px] h-[400px] shadow-2xl rounded-2xl hover:shadow-orange-500 transition-all duration-300'>
                <div>
                <img className='rounded-t-2xl h-[235px] w-[350px]' src={yevropa} alt="" />
                </div>
                <div className='p-[10px]'>
                <h1 className='font-bold text-[23px] '>O'zbekiston bo'ylab sayohat</h1>
                <p className='text-[18px] mt-[10px] text-gray-600' >O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
                <button className='w-[100px] text-white rounded-3xl mt-[15px] h-[35px] bg-orange-500 hover:bg-orange-700 transition-all duration-300'>Batafsil</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Turlar
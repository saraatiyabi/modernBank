import React from 'react'
import { apple, bill, google } from "../assets";

const Billing = () => (
  <div className='flex-1 flex flex-col-reverse md:flex-row relative sm:py-16 py-6'>
    <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10'>
      <img src={bill} alt='billing' className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute white__gradient w-[50%] h-[50%] -left-1/2 top-0 z-[3] rounded-full" />
      <div className="absolute pink__gradient w-[50%] h-[50%] -left-1/2 bottom-0 z-[0] rounded-full" />
    </div>

    <div className='flex-1 flex flex-col justify-center items-start ml-10'>
      <h2 className="text-white font-poppins font-semibold text-[40px] xs:text-[48px] xs:leading-[76.8px] leading-[66.8px]">Easily control your<br className='sm:block hidden' /> billing & invoicing.</h2>
      <p className="font-poppins text-dimWhite font-normal max-w-[490px] text-[18px] mt-5 leading-[30px]">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className='flex flex-row items-center mt-10'>
        <img src={apple} alt='apple_store' className="w-[128.86px] h-[42.05px] object-contain mr-5" />
        <img src={google} alt='google_store' className="w-[144.17px] h-[43.04px] object-contain mr-5" />
      </div>
    </div>
  </div>
)

export default Billing;
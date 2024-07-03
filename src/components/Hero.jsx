import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className='flex md:flex-row md:items-center flex-col py-4 sm:py-6'>
    <div className="flex-1 flex flex-col justify-center items-start xl:px-0 sm:px-16 px-6">
      <div className="bg-discount-gradient flex flex-row items-center rounded-[10px] px-4 py-1 mb-5">
        <img src={discount} alt='discount' className="w-[32px] h-[32px] mr-[5px]" />
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
          <span className="text-white">20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT
        </p>
      </div>

      <div className="flex-1 w-full flex flex-row justify-between items-start">
        <h1 className="text-white font-poppins font-semibold ss:text-[65px] md:text-[55px] lg:text-[70px] text-[52px] ss:leading-[85px] md:leading-[75.8px] lg:leading-[95px] leading-[75px]">
          The Next
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-6 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="text-white w-full font-poppins font-semibold ss:text-[60px] md:text-[50px] lg:text-[62px] text-[47px] ss:leading-[80px] md:leading-[70.8px] lg:leading-[90px] leading-[70px]">
        Payment Method
      </h1>

      <p className="font-poppins text-dimWhite xl:text-[18px] lg:text-[15px] mt-5 max-w-[465px] font-normal xl:leading-[30.8px] leading-[25px]">
        Our team of experts uses a methodology to identify the credit cards
        most likely to fit your needs.
        We examine annual percentage rates,
        annual fees.
      </p>
    </div>

    <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
      <img src={robot} className="w-[100%] h-[100%] z-[5]" />

      {/* gradients start */}
      <div className="absolute z-[2] w-[40%] h-[50%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradients end */}
    </div>

    <div className="ss:hidden flex justify-center items-center">
      <GetStarted />
    </div>
  </section>
)

export default Hero
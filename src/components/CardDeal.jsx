import React from 'react'
import { card } from '../assets'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className="flex-1 flex flex-col md:flex-row md:items-center py-6 sm:py-16">
      <div className="flex-1 flex-col justify-center items-start mt-10 md:mt-0 mr-0 md:mr-10">
        <h2 className="font-poppins text-white font-semibold text-[40px] sm:text-[45px] xs:leading-[76.8px] leading-[66.8px] w-full">
          Find a better card deal<br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className='font-poppins font-normal text-[18px] text-dimWhite leading-[30.6px] mt-5 max-w-[470px]'>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={card} className="w-[100%] h-[100%] object-contain" alt='card' />
      </div>
    </section>
  )
}

export default CardDeal
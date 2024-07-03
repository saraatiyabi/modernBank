import React from 'react'
import Button from './Button'

const CTA = () => (
  <section className="flex md:flex-row flex-col justify-center items-center bg-black-gradient-2 sm:px-16 px-6 sm:py-12 py-4 rounded-[20px] box-shadow sm:my-16 my-6">
    <div className='flex-1 flex flex-col mb-8 md:mb-0 mr-8 md:mr-0'>
      <h2 className='text-white font-poppins font-semibold text-[30px] ss:text-[40px] sm:text-[48px] xs:leading-[76.8px] leading-[66.8px]'>Let’s try our service now!</h2>
      <p className='text-dimWhite font-poppins font-normal text-[18px] leading-[28.8px] mt-5 max-w-[500px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <Button />
  </section>
)

export default CTA
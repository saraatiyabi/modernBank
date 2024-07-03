import React from 'react'
import Button from './Button'
import { features } from '../constants'
import FeatureCard from './FeatureCard'

const Business = () => (
  <section className="w-full flex flex-col md:flex-row py-16 sm:py-6" id="features">
    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="w-full font-poppins text-white font-semibold text-[40px] xs:text-[48px] xs:leading-[76.8px] leading-[66.8px]">
        You do the business,
        <br className="sm:block hidden" />
        we’ll handle the money.
      </h2>
      <p className='font-poppins font-normal text-[18px] text-dimWhite leading-[30.8px] max-w-[470px] mt-5'>
        With the right credit card,
        you can improve your financial life by building credit,
        earning rewards and saving money.
        But with hundreds of credit cards on the market.
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className='flex-1 flex justify-center items-start flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative'>
      {
        features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))
      }
    </div>
  </section>
)

export default Business
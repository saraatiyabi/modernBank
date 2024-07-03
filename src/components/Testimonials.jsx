import React from 'react'
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id="clients" className="flex justify-center items-center flex-col relative py-6 sm:py-16 px-6">
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40 overflow-x-hidden" />

    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center z-[1] sm:mb-16 mb-6 relative">
      <h2 className="flex-1 font-poppins font-semibold text-white text-[40px] sm:text-[48px] xs:leading-[76.8px] leading-[66.8px] w-full mb-8 md:mb-0 mr-0 md:mr-8">
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <p className="flex-1 font-poppins font-normal text-dimWhite text-[18px] leading-[32.4px] text-left max-w-[450px]">
        Everything you need to accept
        card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className='w-full flex flex-col gap-4 sm:flex-row flex-wrap sm:justify-start justify-center items-center relative feedback-container z-[1]'>
      {
        feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))
      }
    </div>
  </section>
)

export default Testimonials;
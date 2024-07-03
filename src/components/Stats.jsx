import React from 'react'
import { stats } from '../constants';

const Stats = () => (
  <section className="w-full flex flex-row justify-around md:items-center mb-6 sm:mb-20 flex-wrap">
    {
      stats.map((stat) => (
        <div className="flex-1 flex flex-col md:flex-row md:items-center lg:justify-center m-3 md:gap-3 flex-wrap" key={stat.id}>
          <h4 className="text-white font-poppins font-semibold text-[18px] xs:text-[30px] sm:text-[35px] md:text-[40px]">{stat.value}</h4>
          <p className="text-gradient font-poppins font-normal text-[15px] xs:text-[18px] sm:text-[20px] uppercase">{stat.title}</p>
        </div>
      ))
    }
  </section>
)

export default Stats
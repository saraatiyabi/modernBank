import React from 'react'
import { arrowUp } from '../assets'
const GetStarted = () => (
    <div className="w-[140px] h-[140px] flex justify-center items-center cursor-pointer rounded-full bg-blue-gradient p-[2px]">
        <div className="w-[100%] h-[100%] rounded-full bg-primary flex flex-col justify-center items-center">
            <div className="w-full rounded-full flex flex-row justify-center items-center">
                <span className="text-gradient font-poppins text-[18px] mr-1">Get</span>
                <img src={arrowUp} alt='arrow' className="w-[23px] h-[23px] object-contain" />
            </div>
            <span className='text-gradient font-poppins text-[18px] mr-1'>Started</span>
        </div>
    </div>
)

export default GetStarted
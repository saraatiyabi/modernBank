import React from 'react'
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => (
    <div className="flex-1 flex flex-col px-10 py-12 rounded-[20px] feedback-card max-w-[370px] my-5 sm:mr-5 mr-0 md:mr-10 min-w-[230px]">
        <img src={quotes} alt='quates' className="w-[42.6px] h-[26.6px] object-contain" />
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[32.4px] my-10">{content}</p>

        <div className='flex flex-row items-center gap-3 mt-8'>
            <img src={img} alt='person' className='w-[48px] h-[48px] rounded-full' />
            <div className='flex flex-col ml-4'>
                <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32.4px]">{name}</h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
            </div>
        </div>
    </div>
)

export default FeedbackCard
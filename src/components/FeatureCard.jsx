import React from 'react'
import { features } from '../constants';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex-1 flex flex-row items-center p-6 rounded-[20px] gap-3 ${index - 1 !== features.length ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className='w-[64px] h-[64px] flex justify-center items-center bg-dimBlue rounded-full'>
            <img className='w-[50%] h-[50%] object-contain' src={icon} />
        </div>
        <div className='flex-1 flex flex-col'>
            <h4 className="text-white font-poppins font-semibold text-[18px] leading-[23.4px] mb-1">{title}</h4>
            <p className="font-poppins text-dimWhite font-normal text-[16px] leading-[24px]">{content}</p>
        </div>
    </div>
)

export default FeatureCard
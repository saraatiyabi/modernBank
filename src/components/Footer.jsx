import React from 'react'
import { footerLinks } from '../constants';
import { logo } from '../assets';
import { socialMedia } from '../constants';

const Footer = () => (
  <section className="w-full flex justify-center items-center flex-col py-6 sm:py-16">
    <div className="w-full flex flex-col justify-center items-start md:flex-row md:justify-between">
      <div className="flex-1 flex flex-col mb-10 md:mb-0 mr-0 md:mr-10">
        <img src={logo} alt="hoobank_logo" className="w-[266px] h-[72.14px] object-contain mb-10" />
        <p className="font-poppins font-normal text-[18px] text-dimWhite md:max-w-[312px] leading-[30.8px]">A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="w-full flex-[1.5] flex flex-row justify-between flex-wrap">
        {
          footerLinks.map((footerLink, index) => (
            <div className='flex-1 flex flex-col min-w-[150px] mb-5' key={footerLink.title}>
              <h4 className="font-poppins font-bold text-white mb-4 text-[18px] leading-[27px]">{footerLink.title}</h4>
              <ul>
                {
                  footerLink.links.map((link) => (
                    <li key={link.name} className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] ${index !== footerLinks.length ? 'mb-3' : 'mb-0'}`}>{link.name}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
    <div className="w-full flex md:flex-row flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-8">
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[27px] mb-8 md:mb-0">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
      <div className='flex flex-row items-center justify-around'>
        {
          socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] ${index !== socialMedia.length ? 'mr-6' : 'mr-0'}`} />
          ))
        }
      </div>
    </div>
  </section>
)

export default Footer
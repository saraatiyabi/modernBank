import React, { useState } from 'react';
import { logo, menu, close } from './../assets';
import { navLinks } from './../constants/index';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='navbar w-full flex justify-between items-center sm:py-6 py-6'>
      {/* desktop menu */}
      <img src={logo} className='w-[130px] md:w-[160px]' alt='logo' />
      <ul className='list-none sm:flex justify-end items-center flex-1 hidden'>
        {
          navLinks.map((link, index) => (
            <li className={`font-poppins text-white/75 font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))
        }
      </ul>

      {/* mobile menu */}
      <div className='sm:hidden flex flex-1 justify-end items-center relative'>
        <img src={toggle ? close : menu} alt='menu' className='w-[25px] h-[25px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={` ${toggle ? 'flex' : 'hidden'} min-width-[150px] bg-black-gradient p-5 rounded-md absolute top-10 right-0`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {
              navLinks.map((link, index) => (
                <li className={`font-poppins text-white font-normal cursor-pointer ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'}`} key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
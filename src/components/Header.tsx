import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import navigations from '../data/navigations'
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import classNames from 'classnames';

function Header() {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  return (
    <div className='flex flex-wrap justify-between items-center py-6 relative'>
      <IoHomeOutline size={28} className='cursor-pointer hover:text-yellow-theme' />

      <div className='block sm:hidden cursor-pointer z-20' onClick={() => setOpenNavigation((curr) => !curr)}>
        {openNavigation ? <IoMdClose size={28} className='hover:text-yellow-theme' /> : <GiHamburgerMenu size={28} className='hover:text-yellow-theme' />}
      </div>

      {/* Mobile Navigation with Transition */}
      <div
        className={classNames(
          'w-full sm:hidden absolute top-full left-0 transition-all duration-300 ease-in-out overflow-hidden bg-white z-10',
          openNavigation ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <ul className='flex flex-col items-center py-4'>
          {navigations.navigations.map(({ name, link }) => (
            <li key={link} className='py-2 list-none cursor-pointer hover:text-yellow-theme'>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex sm:w-1/2 justify-between items-center'>
        {navigations.navigations.map(({ name, link }) => (
          <li key={link} className='list-none cursor-pointer hover:text-yellow-theme'>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header

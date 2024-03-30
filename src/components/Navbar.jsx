import Link from 'next/link';
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";

function Navbar() {
  return (
    <nav className='w-full p-3 bg-gray-100 flex items-center px-10'>
      <ul className='flex items-center gap-x-5'>
        <li>
          <Link className='font-bold text-xl text-black' href={'/'}>
            Market uz
          </Link>
        </li>
        <li>
          <div className='flex items-center gap-x-3'>
            <div className='w-32 p-1.5 flex items-center gap-x-2 justify-center text-white bg-green-700 rounded-lg'>
              <RxDashboard />
              <h2>Katalog</h2>
            </div>
            <div className='w-[650px] flex items-center px-2 rounded-lg h-9 border border-green-700'>
              <div className='flex w-full gap-x-2 items-center'>
                <IoIosSearch className='w-5 h-5' />
                <input className='bg-transparent w-full outline-none ' type="text" placeholder='Mahsulot va toifalarni qidirish...' />
              </div>
              <div className='w-8 h-8 flex items-center justify-center bg-green-700 rounded-full'>
                <MdKeyboardVoice className='text-white w-5 h-5' />
              </div>

            </div>

          </div>
        </li>
        <li>
          <div className='flex cursor-pointer flex-col items-center'>
            <SlBasketLoaded />
            <Link href={'/basket'}>
            <span className='text-sm'>savat</span>
            </Link>
          </div>


        </li>
        <li>
          <div className='flex cursor-pointer flex-col items-center'>
            <IoMdHeartEmpty />
            <Link href={'/like'}>
            <span className='text-sm'>Tanlanganlar</span>
            </Link>
          </div>
        </li>
        <li>
          <Link className='cursor-pointer' href={'/login'}>
            <button className='p-1.5 border border-green-700 w-32 rounded-lg'>Kirish</button>
          </Link>

        </li>
      </ul>

    </nav>
  )
}

export default Navbar;
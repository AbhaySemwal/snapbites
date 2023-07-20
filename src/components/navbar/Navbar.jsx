"use client"
import React, { useReducer, useState } from 'react'
import Link from 'next/link'
import { Home, Explore,Storefront,Email,EmojiEmotions,Search,Bolt,Person,Create} from '@mui/icons-material'
import { usePathname } from 'next/navigation';

const icons=[
    {
        id:1,
        link:"/",
        text:<Home/>,
    },
    {
        id:2,
        link:"/explore",
        text:<Explore/>,
    },
    {
        id:3,
        link:"/store",
        text:<Storefront/>,
    },
    {
        id:4,
        link:"/email",
        text:<Email/>,
    },
    {
        id:5,
        link:"/emoji",
        text:<EmojiEmotions/>,
    },
    {
        id:6,
        link:"/info",
        text:<Bolt/>,
    },
    {
        id:7,
        link:"/new",
        text:<Person/>,
    },
]

const Navbar = () => {

    const path=usePathname();
  return (
    <div className='text-white mb-10 flex h-[55px] px-5 items-center justify-between font-montserrat border-gray-800 border-b-[1px]'>
        <div className='w-[50%] flex items-center gap-5'>
            <Link href="/" ><p className="font-bold hover:-rotate-12 hover:text-blue-400 cursor-pointer transition delay-100 ease-in-out hover:transform text-4xl">SB</p></Link>
            <div className='flex h-[35px] bg-[#514949] items-center w-[60%] px-2 rounded-md gap-1'>
                <span className='text-gray-300 flex transform scale-[1.10]'><Search/></span>
                <input className='font-sans w-full bg-[#514949] outline-none  text-sm font-normal placeholder-gray-300' placeholder='Search SnapBites...'></input>
            </div>
        </div>  
        <div className='w-[50%] gap-8 flex items-center justify-end text-gray-500 '>
            {icons.map(i=>(
                <Link key={i.id} href={i.link} className={`${i.link===path&&"text-white"} transform scale-[1.20]`}>{i.text}</Link>
                ))
            }
            <Link href="/" className='transform scale-[1.20] text-black px-2 py-0.5 bg-blue-400 rounded-md'><Create/></Link>
        </div>
    </div>
  )
}

export default Navbar
"use client"
import { BlogpageContext } from '@/context/BlogpageContext';
import { Favorite,HelpOutlineRounded, Redeem, Settings, StarBorderOutlined } from '@mui/icons-material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import LogoutModal from '../logoutmodal/LogoutModal';

const AccountModal = () => {
  const blogpage=useContext(BlogpageContext).blogpage[0];
  const [open,setOpen]=useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
}, [open]);
  return (
    <>
      {
        open&&<LogoutModal setOpen={setOpen}/>
      }
      <div className='font-sans absolute top-8 -left-[110px] w-[200px] bg-[#272424]'>
        <div className='h-[30px] items-center bg-[#3b3636] p-2 text-xs flex justify-between text-gray-300'>
          <h3>Account</h3>
          <p onClick={()=>{setOpen(!open)}}>Log out</p>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-between hover:bg-[#464040] p-2 h-[35px]'>
            <div className='flex gap-2 text-xs items-center'>
              <Favorite fontSize='small' className='text-gray-400'/>
              Likes
            </div>
            <p className='text-xs text-gray-400'>0</p>
          </div>
          <div className='flex justify-between hover:bg-[#464040] p-2 h-[35px]'>
            <div className='flex gap-2 text-xs items-center'>
              <AccountBoxIcon fontSize='small' className='text-gray-400'/>
              Following
            </div>
            <p className='text-xs text-gray-400'>0</p>
          </div>
          <Link href={"/settings/"+blogpage?.displayName} className='flex hover:bg-[#464040] p-2 h-[35px]'>
            <div className='flex gap-2 text-xs items-center'>
              <Settings fontSize='small' className='text-gray-400'/>
              Settings
            </div>
          </Link>
          <div className='flex hover:bg-[#464040] p-2 h-[35px]'>
            <div className='flex gap-2 text-xs items-center'>
              <Redeem fontSize='small' className='text-gray-400'/>
              Gifts
            </div>
          </div>
          <div className='flex hover:bg-[#464040] p-2 h-[35px]'>
            <div className='flex gap-2 text-xs items-center'>
              <StarBorderOutlined fontSize='small' className='text-gray-400'/>
              What's new
            </div>
          </div>
          <div className='flex hover:bg-[#464040] p-2 h-[35px]'>
            <div className='flex gap-2 text-xs items-center'>
              <HelpOutlineRounded fontSize='small' className='text-gray-400'/>
              Help
            </div>
          </div>
        </div>
        <div className='h-[30px] items-center bg-[#3b3636] p-2 text-xs flex justify-between text-gray-300'>
          <h3>Blogs</h3>
          <p>+ New</p>
        </div>
        <div className='flex flex-col pb-1'>
          <Link href={"/"+blogpage?.displayName} className='flex justify-between hover:bg-[#464040] p-2 h-[45px]'>
            <div className='flex gap-2 text-xs items-center'>
              <Image className='rounded-sm' height={30} width={30} src={blogpage?.profilePicture?blogpage?.profilePicture:'/pyramid_closed_96.png'} alt=''></Image>
              <div className='text-[11px]'>
                <p>{blogpage?.name}</p>
                <p className='text-gray-300'>{blogpage?.desc}</p>
              </div>
            </div>
          </Link>
          <div className="ml-12 text-[11px]">
            <p className='hover:bg-[#464040] p-0.5'>Posts</p>
            <p className='hover:bg-[#464040] p-0.5'>Followers</p>
            <p className='hover:bg-[#464040] p-0.5'>Activity</p>
          </div>
        </div>
        <div className='bg-[#3b3636] flex gap-3 text-gray-300 text-[10px] px-2 py-1'>
          <Link href="/">About</Link>
          <Link href="/">Apps</Link>
          <Link href="/">Legal</Link>
          <Link href="/">Privacy</Link>
        </div>
      </div>
    </>
  )
}

export default AccountModal
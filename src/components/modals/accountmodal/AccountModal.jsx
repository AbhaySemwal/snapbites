import { Favorite,HelpOutlineRounded, Redeem, Settings, StarBorderOutlined } from '@mui/icons-material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const AccountModal = () => {
  return (
    <div className='font-sans absolute top-8 -left-[110px] w-[200px] bg-[#272424]'>
      <div className='h-[30px] items-center bg-[#3b3636] p-2 text-xs flex justify-between text-gray-300'>
        <h3>Account</h3>
        <p onClick={signOut} >Log out</p>
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
        <div className='flex hover:bg-[#464040] p-2 h-[35px]'>
          <div className='flex gap-2 text-xs items-center'>
            <Settings fontSize='small' className='text-gray-400'/>
            Settings
          </div>
        </div>
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
        <div className='flex justify-between hover:bg-[#464040] p-2 h-[45px]'>
          <div className='flex gap-2 text-xs items-center'>
            <Image className='rounded-sm' height={30} width={30} src='/pyramid_closed_96.png' alt=''></Image>
            <div className='text-[11px]'>
              <p>Loremname</p>
              <p className='text-gray-300'>Untitled</p>
            </div>
          </div>
        </div>
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
  )
}

export default AccountModal
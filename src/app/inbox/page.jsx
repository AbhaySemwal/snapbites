import React from 'react'
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import { Email } from '@mui/icons-material';
import Navbar from '@/components/navbar/Navbar';

const Inbox = () => {
  return (
    <>
      <Navbar/>
      <div className='text-white flex gap-8 font-sans mt-10'>
        <div className='w-[60%] flex justify-end'>
          <div className='bg-[#181515] w-[60%] rounded-sm py-24 flex flex-col items-center'>
            <SpeakerNotesOffIcon className='text-gray-400 text-8xl'/>
            <p className='text-gray-400 font-semibold text-xl my-2'>You have no messages</p>
            <p className='text-gray-500 text-sm cursor-pointer'>Learn more.</p>
          </div>
        </div>
        <div className='w-[40%]'>
          <div className='flex flex-col w-[50%]'>
            <div className='bg-[#181515] flex h-[40px] gap-2 items-center px-2 rounded-t-sm'><Email/><h2>All Messages</h2></div>
            <div className='hover:bg-[#181515] h-[40px] flex items-center px-2 mb-2 rounded-b-sm'><h3>Untitled</h3></div>
            <div className='bg-[#181515] h-[50px] flex items-center px-2 rounded-sm'><p className='text-xs'>Your Inbox is an aggregate view of questions and submissions that any of your blogs receive.</p></div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Inbox;
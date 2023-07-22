import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkIcon from '@mui/icons-material/Link';
import ChatIcon from '@mui/icons-material/Chat';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VideocamIcon from '@mui/icons-material/Videocam';
import Image from 'next/image';

const CreatePost = () => {
  return (
    <div className='w-[70%] font-sans flex justify-end gap-5 mb-10'>
        <div className='w-[10%]'>
            <Image className='cursor-pointer rounded-md' src="/pyramid_closed_96.png" width={75} height={75} alt=''></Image>
        </div>
        <div className='w-[90%] cursor-pointer rounded-sm px-5 flex justify-between items-center h-[100px] bg-[#272424]'>
            <div className='group flex flex-col items-center'>
                <p className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-4xl font-bold'>Aa</p>
                <p>Text</p>
            </div>
            <div className='group flex flex-col items-center'>
                <CameraAltIcon className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-red-600 text-4xl font-bold'/>
                <p>Photo</p>
            </div>
            <div className='group flex flex-col items-center'>
                <FormatQuoteIcon className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-orange-500 text-4xl font-bold'/>
                <p>Qoute</p>
            </div>
            <div className='group flex flex-col items-center'>
                <LinkIcon className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-green-500 text-4xl font-bold'/>
                <p>Link</p>
            </div>
            <div className='group flex flex-col items-center'>
                <ChatIcon className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-blue-400 text-4xl font-bold'/>
                <p>Chat</p>
            </div>
            <div className='group flex flex-col items-center'>
                <HeadphonesIcon className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-blue-700 text-4xl font-bold'/>
                <p>Audio</p>
            </div>
            <div className='group flex flex-col items-center'>
                <VideocamIcon className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-pink-500 text-4xl font-bold'/>
                <p>Video</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
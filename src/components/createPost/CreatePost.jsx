import React, { useContext, useState } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkIcon from '@mui/icons-material/Link';
import ChatIcon from '@mui/icons-material/Chat';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VideocamIcon from '@mui/icons-material/Videocam';
import Image from 'next/image';
import PostModal from "@/components/modals/postmodal/PostModal"
import { BlogpageContext } from '@/context/BlogpageContext';


const CreatePost = () => {
        
const [open,setOpen]=useState(false);
const blogpage=useContext(BlogpageContext).blogpage[0];

return (
    <div className='w-[70%] font-sans flex justify-end gap-5 mb-5'>
        <div className='w-[10%]'>
            <Image className='cursor-pointer rounded-md' src={blogpage?.profilePicture?blogpage?.profilePicture:"/pyramid_closed_96.png"} width={100} height={100} alt=''></Image>
        </div>
        <div className='w-[90%] cursor-pointer rounded-sm px-5 flex justify-between items-center h-[100px] bg-[#272424]'>
            <div className='group flex flex-col items-center mb-[2.5px]' onClick={()=>setOpen(!open)}>
                <p className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-3xl font-bold'>Aa</p>
                <p>Text</p>
            </div>
            <div className='group flex flex-col items-center'>
                <CameraAltIcon fontSize='large' className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-red-600 font-bold'/>
                <p>Photo</p>
            </div>
            <div className='group flex flex-col items-center'>
                <FormatQuoteIcon fontSize='large' className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-orange-500 font-bold'/>
                <p>Qoute</p>
            </div>
            <div className='group flex flex-col items-center'>
                <LinkIcon fontSize='large' className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-green-500 font-bold'/>
                <p>Link</p>
            </div>
            <div className='group flex flex-col items-center'>
                <ChatIcon fontSize='large' className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-blue-400 font-bold'/>
                <p>Chat</p>
            </div>
            <div className='group flex flex-col items-center'>
                <HeadphonesIcon fontSize='large' className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-blue-700 font-bold'/>
                <p>Audio</p>
            </div>
            <div className='group flex flex-col items-center'>
                <VideocamIcon fontSize='large' className='group-hover:-translate-y-1 ease-in-out transition-all duration-400 text-pink-500 font-bold'/>
                <p>Video</p>
            </div>
        </div>
        {open&&<PostModal setOpen={setOpen}/>}
    </div>
  )
}

export default CreatePost
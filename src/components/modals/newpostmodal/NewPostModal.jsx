import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkIcon from '@mui/icons-material/Link';
import ChatIcon from '@mui/icons-material/Chat';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VideocamIcon from '@mui/icons-material/Videocam';

const NewPostModal = () => {
  
  return (
    <div className='font-sans absolute flex justify-center right-0 items-center top-0 h-[82vh] bg-transparent/80 text-white w-screen'>
        <div className='relative flex left-32 gap-16'>
          <div className='flex'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div className=' text-black font-semibold flex transform scale-[2] rounded-full bg-white px-3.5 py-3'>
                <p className='transform transition duration-500  hover:rotate-left-right'>Aa</p>
              </div>
              <h1 className=''>Text</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div className='text-black flex transform scale-[2] rounded-full bg-red-600 p-3'>
                <CameraAltIcon className='transform transition duration-500 hover:rotate-left-right'/>
              </div>
              <h1>Photo</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div className='text-black flex transform scale-[2] rounded-full bg-orange-400 p-3'>
                <FormatQuoteIcon className='transform transition duration-500 hover:rotate-left-right'/>
              </div>
              <h1>Quote</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div className='text-black flex transform scale-[2] rounded-full bg-green-500 p-3'>
                <LinkIcon className='transform transition duration-500 hover:rotate-left-right'/>
              </div>
              <h1>Link</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div className='text-black flex transform scale-[2] rounded-full bg-blue-400 p-3'>
                <ChatIcon className='transform transition duration-500 hover:rotate-left-right'/>
              </div>
              <h1>Chat</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div className='text-black flex transform scale-[2] rounded-full bg-blue-500 p-3'>
                <HeadphonesIcon className='transform transition duration-500 hover:rotate-left-right'/>
              </div>
              <h1>Audio</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <div className='text-black flex transform scale-[2] rounded-full bg-pink-500 p-3'>
                <VideocamIcon className='transform transition duration-500 hover:rotate-left-right'/>
              </div>
              <h1>Video</h1>
            </div>
          </div>
        </div>
    </div>
  );

};

export default NewPostModal;
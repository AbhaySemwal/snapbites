import Image from 'next/image'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const data=[
  {
    id:1,
    name:"anxietyproblem",
    desc:"Anxiety Problem",
    img:"/cropped-1920-1080-1314003.png",
  },
  {
    id:2,
    name:"anxietyproblem",
    desc:"Anxiety Problem",
    img:"/cropped-1920-1080-1314003.png",
  },
  {
    id:3,
    name:"anxietyproblem",
    desc:"Anxiety Problem",
    img:"/cropped-1920-1080-1314003.png",
  },
  {
    id:4,
    name:"anxietyproblem",
    desc:"Anxiety Problem",
    img:"/cropped-1920-1080-1314003.png",
  },
]
const Rightbar = () => {
  return (
    <div className='w-[40%] flex flex-col font-sans'>
        <div className='w-[50%]'>
          <div className='border-gray-800 border-b-[1px] pb-2.5 px-1.5 mb-3'>
            <h2 className='text-xl font-semibold'>Check out these blogs</h2>
          </div>
          <div>
            {
              data.slice(0,4).map(d=>(
                <div key={d.id} className='flex p-2 justify-between items-center h-[60px] cursor-pointer hover:bg-[#0e0e0e]'>
                  <div className='flex items-center gap-3'>
                    <Image className='h-[35px] w-[35px] rounded-sm object-cover' src={d.img} alt='' height={32} width={32}/>
                    <div className='text-sm font-semibold'>
                      <p>{d.name}</p>
                      <p className='font-normal text-gray-400'>{d.desc}</p>
                    </div>
                  </div>
                  <div className='flex items-center text-sm  gap-3'>
                      <p className='text-blue-400'>Follow</p>
                      <CloseIcon className='text-gray-500' fontSize='20'/>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='w-[50%] my-5 p-2 text-base'>
          <Link className='text-blue-500 hover:underline' href="/explore/today">Explore all of Snapbites</Link>
        </div>
        <div className='w-[50%] flex flex-col'>
            <div className='border-gray-600 border-b-[1px] pb-2.5 px-1.5 mb-3'>
              <h2 className='text-xl font-semibold'>Radar</h2>
            </div>
            <div className='flex flex-col '>
            <div className='flex flex-col cursor-pointer '>
              <div className='h-[60px] bg-[#272424] flex items-center px-5 rounded-t-sm justify-between'>
                <div className='text-sm font-semibold flex gap-2'>
                  <p>Joy</p>
                  <p className='text-blue-500 hover:underline'>Follow</p>
                </div>
                <div className='text-gray-500 cursor-pointer'><MoreHorizIcon/></div>
              </div>
              <div className='-z-10 relative min-h-[500px] max-h-[600px]'>
                <Image className='object-cover' src="/cropped-1920-1080-1314003.png" fill={true} alt=''></Image>
              </div>
              <div className='h-fit py-3 px-5 bg-[#272424] flex flex-col items-center rounded-b-sm justify-between'>
                <div className='text-sm font-semibold flex border-gray-600 border-b-[1px] gap-2 py-3'>
                  <p className=''>Glasswinged butterflies are a South American species known for their transparent wings</p>
                </div>
                <div className='w-full flex justify-between items-center py-3'>
                  <button className='border-[1px] border-gray-500 rounded-full flex items-end py-1.5 px-3 gap-1'><p className='font-[400]'>100</p><p className='text-base text-gray-400'>notes</p></button>
                  <div className='flex gap-5 items-center'>
                    <ShareIcon className='text-blue-300 transform scale-110'/>
                    <ChatBubbleOutlineIcon className='text-green-400 transform scale-110'/>
                    <FavoriteBorderIcon className='text-red-400 transform scale-110'
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Rightbar
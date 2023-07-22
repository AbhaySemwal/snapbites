import React from 'react'
import Image from 'next/image'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Yourtags = () => {

    const data=[
        {
          id:1,
          img:"/pyramid_closed_96.png",
          postimg:"/cropped-1920-1080-1314003.png",
          desc:"Glasswinged butterflies are a South American species known for their transparent wings",
          name:"Joy",
          notes:"100"
        },
        {
          id:2,
          img:"/pyramid_closed_96.png",
          postimg:"/cropped-1920-1080-1314003.png",
          desc:"Glasswinged butterflies are a South American species known for their transparent wings",
          name:"Joy",
          notes:"100"
        },
        {
          id:3,
          img:"/pyramid_closed_96.png",
          postimg:"/cropped-1920-1080-1314003.png",
          desc:"Glasswinged butterflies are a South American species known for their transparent wings",
          name:"Joy",
          notes:"100"
        },
        {
          id:4,
          img:"/pyramid_closed_96.png",
          postimg:"/cropped-1920-1080-1314003.png",
          desc:"Glasswinged butterflies are a South American species known for their transparent wings",
          name:"Joy",
          notes:"100"
        },
        {
          id:5,
          img:"/pyramid_closed_96.png",
          postimg:"/cropped-1920-1080-1314003.png",
          desc:"Glasswinged butterflies are a South American species known for their transparent wings",
          name:"Joy",
          notes:"100"
        },
      ]

  return (
    <>
        {
      data?.map(d=>(
      <div key={d.id} className='w-[70%] gap-5 flex mb-5'>
        <div className='w-[10%] h-full'>
            <Image className= "cursor-pointer rounded-md" src={d.img} width={75} height={75} alt=''></Image>
        </div>
        <div className='w-[90%] flex flex-col '>
            <div className='flex flex-col cursor-pointer '>
              <div className='h-[60px] bg-[#272424] flex items-center px-5 rounded-t-sm justify-between'>
                <div className='text-sm font-semibold flex gap-2'>
                  <p>{d.name}</p>
                  <p className='text-blue-500 hover:underline'>Follow</p>
                </div>
                <div className='text-gray-500 cursor-pointer'><MoreHorizIcon/></div>
              </div>
              <div className='relative min-h-[500px] max-h-[600px] '>
                <Image className='object-cover' src={d.postimg} fill={true} alt=''></Image>
              </div>
              <div className='h-fit py-3 px-5 bg-[#272424] flex flex-col items-center rounded-b-sm justify-between'>
                <div className='text-sm font-semibold flex border-gray-600 border-b-[1px] gap-2 py-3'>
                  <p className=''>{d.desc}</p>
                </div>
                <div className='w-full flex justify-between items-center py-3'>
                  <button className='border-[1px] border-gray-500 rounded-full flex items-end py-1.5 px-3 gap-1'><p className='font-[400]'>{d.notes}</p><p className='text-base text-gray-400'>notes</p></button>
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
      ))
    }
    </>
  )
}

export default Yourtags
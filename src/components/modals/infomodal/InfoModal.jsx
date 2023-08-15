import { Bolt } from '@mui/icons-material'
import React from 'react'

const InfoModal = ({blogpage}) => {
  return (
    <div className='absolute top-8 font-sans -right-28 bg-[#272424] w-[330px]'>
      <div className='flex p-3 border-b-[1px] border-gray-700'>
        <h2 className='text-gray-400 font-semibold text-xs'>{blogpage?.displayName}</h2>
      </div>
      <div className='bg-[#272424] h-[32px] flex text-xs  text-gray-400 font-semibold justify-between'>
        <div className='w-1/4 flex justify-center items-center border-b-[2px] border-blue-400'>
          <span>All</span>
        </div>
        <div className='w-1/4 flex justify-center items-center'>
          <span>Mentions</span>
        </div>
        <div className='w-1/4 flex justify-center items-center'>
          <span>Reblogs</span>
        </div>
        <div className='w-1/4 flex justify-center items-center'>
          <span>Replies</span>
        </div>
      </div>
      <div className='text-xs font-normal h-24 px-5 text-center bg-[#332f2f] items-center justify-center text-gray-400 flex flex-col gap-1'>
        <span><Bolt/></span>
        Check out this tab when you make a post to see Likes, Reblogs, and new followers.
      </div>
    </div>
  )
}

export default InfoModal
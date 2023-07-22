import React from 'react'


const BotModal = () => {
  return (
    <div className='absolute top-8 font-sans -right-28 bg-[#272424] w-[240px]'>
      <div className='flex justify-between p-2 border-b-[1px] border-gray-700'>
        <h2 className='text-xs'>LoremIpsum</h2>
        <p className='text-xs text-blue-400'>New Message</p>
      </div>
      <div className='text-xs h-14 items-center justify-center text-gray-400 flex'>
        No Chats Yet!
      </div>
    </div>
  )
}

export default BotModal
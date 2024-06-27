import Image from 'next/image'
import React from 'react'
import RedeemIcon from '@mui/icons-material/Redeem';

const StoreModal = () => {
  return (
    <div className='overflow-y-scroll scrollbar flex flex-col font-sans absolute top-8 -right-36 h-[500px] w-[300px] bg-[#272424] px-3 pb-2 rounded-lg'>
      <div className='fixed w-[280px] flex flex-col bg-[#272424] z-10 p-2'>
        <h2 className='text-sm font-medium mb-4'>SnapMart</h2>
        <div className='flex gap-2 text-xs font-medium text-gray-300'>
          <button className='py-2 px-3 border-gray-500 border-[1px] bg-blue-500 text-[#272424] flex justify-center items-center rounded-full'>All</button>
          <button className='py-2 px-3 hover:bg-gray-600  border-gray-500 border-[1px] flex justify-center items-center rounded-full'>Merch</button>
          <button className='py-2 px-3 hover:bg-gray-600 border-gray-500 border-[1px] flex justify-center items-center rounded-full'>Gifts</button>
          <button className='py-2 px-3 hover:bg-gray-600 border-gray-500 border-[1px] flex justify-center items-center rounded-full'>Badges</button>
        </div>
      </div>
      <div className='flex flex-col mt-24'>
        <div className='flex justify-center border-2 overflow-hidden border-solid border-r-4 border-b-4 bg-black rounded-lg border-orange-500'>
          <div className='relative h-[200px] w-[70%] mb-5'>
              <div className='-rotate-45 py-1 absolute bg-orange-400 top-4 -left-[70px] text-black w-[110px] flex justify-center items-center font-medium text-sm'>NEW !</div>
              <Image src="/card_web.png" fill={true}></Image>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex my-2 gap-6 items-center'>
            <Image className='border-solid border-2 h-[80px] w-[80px] border-r-4 border-b-4 border-blue-400 rounded-lg' src="/management_thumbnail@3x.png" width={80} height={80}></Image>
            <div className='border-b-[1px] border-gray-700 py-2 flex flex-col gap-5'>
              <div>
                <h1 className='text-xs font-medium'>Important Blue Internet Checkmarks</h1>
                <p className='text-xs font-light'>Important just got colorful!</p>
              </div>
              <div className='flex gap-2 text-xs text-blue-500'>
                <button className='rounded-full bg-[#3a4b6b] px-2 py-1'>Shop</button>
                <button className='bg-[#3a4b6b] p-1 rounded-full'><RedeemIcon fontSize='small'/></button>
              </div>
            </div>
          </div>
          <div className='flex my-2 gap-6 items-center'>
            <Image className='border-solid border-2 h-[80px] w-[80px] border-r-4 border-b-4 border-blue-400 rounded-lg' src="/management_thumbnail@3x(1).png" width={80} height={80}></Image>
            <div className='border-b-[1px] border-gray-700 py-2 flex flex-col gap-5'>
              <div>
                <h1 className='text-xs font-medium'>SnapBites Horse Friend</h1>
                <p className='text-xs font-light'>Get busy scoopin&apos;, or get busy dyin&apos;</p>
              </div>
              <div className='flex gap-2 text-xs text-blue-500'>
                <button className='rounded-full bg-[#3a4b6b] px-2 py-1'>Shop</button>
                <button className='bg-[#3a4b6b] p-1 rounded-full'><RedeemIcon fontSize='small'/></button>
              </div>
            </div>
          </div>
          <div className='flex my-2 gap-6 items-center'>
            <Image className='border-solid border-2 h-[80px] w-[80px] border-r-4 border-b-4 border-orange-400 rounded-lg' src="/management_thumbnail@3x(2).png" width={80} height={80}></Image>
            <div className='border-b-[1px] border-gray-700 py-2 flex flex-col gap-5'>
              <div>
                <h1 className='text-xs font-medium'>SnapBites Dashboard Crabs</h1>
                <p className='text-xs font-light'>Crabs! Crabs everywhere! Catch &apos;em all.</p>
              </div>
              <div className='flex gap-2 text-xs text-blue-500'>
                <button className='bg-[#3a4b6b] py-1 px-2 rounded-full gap-1 items-center justify-center'><RedeemIcon fontSize='small'/> Gift</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreModal
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';

const data1=[
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
  {
    id:4,
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
  {
    id:4,
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

const Explore = ({children}) => {

  const pathname=usePathname();
  return (
    <div className='flex'>
        <div className='flex flex-col items-end font-sans text-white w-[60%] border-r-[1px] px-3 border-gray-800'>
          <div className='w-[61%] flex border-gray-800 mt-10 border-b-[1px] gap-3 font-semibold text-lg mb-5'>
            <Link className={`h-10 ${pathname==="/explore/today" && "border-blue-400 border-solid  text-blue-400 border-b-2"}`} href="/explore/today"><span className='px-5'>Today</span></Link>
            <Link className={`h-10 ${pathname==="/explore/foryou" && "border-blue-400 border-solid  text-blue-400 border-b-2"}`} href="/explore/foryou"><span className='px-5'>For You</span></Link>
            <Link className={`h-10 ${pathname==="/explore/trending" && "border-blue-400 border-solid  text-blue-400 border-b-2"}`} href="/explore/trending"><span className='px-5'>Trending</span></Link>
          </div>
          {children}
      </div>
      <div className='w-[40%] mt-8 text-white font-sans px-3 '>
        <div className='w-[55%] bg-[#191717] flex flex-col justify-center py-3 px-4'>
            <h2 className='text-lg font-semibold mb-2'>Let's get personal</h2>
            <p className='text-sm text-gray-400 mb-5'>Whatever you're into, Snapbites has it. Follow tags that matter to you, and the things you love will show up here.</p>
            <button className='text-sm py-3 text-[#191717] rounded-sm bg-blue-500 mb-2 font-semibold'>Let's follow some tags</button>
            <button className='text-sm py-3 text-gray-400 rounded-sm border-2 border-gray-400 font-semibold'>Maybe later</button>
        </div>
        <div className='w-[55%] my-5 border-gray-700 border-b-[1px]'></div>
        <div className='w-[55%] bg-[#191717]'>
            <div className='border-gray-700 border-b-[1px] py-2.5 px-2 mb-2'>
              <h2 className='text-lg font-semibold'>Check out these blogs</h2>
            </div>
            <div className='px-2 border-gray-700 border-b-[1px]'>
              {
                data1.slice(0,4).map(d=>(
                  <div key={d.id} className='flex p-2 justify-between items-center h-[60px] cursor-pointer hover:bg-[#393838]'>
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
            <div className='cursor-pointer py-4 text-center'><p className='text-blue-400 hover:underline'>Show more blogs</p></div>
          </div>

          <div className='w-[55%] my-5 border-gray-700 border-b-[1px]'></div>
        </div>
    </div>
  )
}

export default Explore
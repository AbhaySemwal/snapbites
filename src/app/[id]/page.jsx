import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import RedeemIcon from '@mui/icons-material/Redeem';
import { AddCommentOutlined } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Close } from '@mui/icons-material';
import Link from 'next/link';

const data=[
  {
    id:1,
    postimg:"/cropped-1920-1080-1314003.png",
    desc:"Glasswinged butterflies are a South American species known for their transparent wings",
    name:"Joy",
    notes:"100"
  },
  {
    id:2,
    postimg:"/cropped-1920-1080-1314003.png",
    desc:"Glasswinged butterflies are a South American species known for their transparent wings",
    name:"Joy",
    notes:"100"
  },
  {
    id:3,
    postimg:"/cropped-1920-1080-1314003.png",
    desc:"Glasswinged butterflies are a South American species known for their transparent wings",
    name:"Joy",
    notes:"100"
  },
  {
    id:4,
    postimg:"/cropped-1920-1080-1314003.png",
    desc:"Glasswinged butterflies are a South American species known for their transparent wings",
    name:"Joy",
    notes:"100"
  },
  {
    id:5,
    postimg:"/cropped-1920-1080-1314003.png",
    desc:"Glasswinged butterflies are a South American species known for their transparent wings",
    name:"Joy",
    notes:"100"
  },
];
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
]
const Id = ({params}) => {
  return (
    <div className='text-white font-sans'>
        <Navbar/>
        <div className='flex flex-col items-center mt-10 '>
          <div className='bg-[#9fc6bd] flex gap-5 w-[65%] rounded-md p-5'>
            <div className='w-[63%] rounded-md bg-[#e8d2e1]'>
              <div className=''>
                <Image className='relative rounded-t-md w-full h-[325px] object-cover' src="/cropped-1920-1080-1314003.png" height={100} width={1000}></Image>
                <Image className='absolute border-4 border-solid top-96 left-[540px] rounded-full h-[100px] w-[100px] object-cover' src="/cropped-1920-1080-1314003.png" height={100} width={1000}></Image>
              </div>
              <div className='flex flex-col items-center justify-center mt-12 gap-2 text-amber-900'>
                <h3 className='text-2xl font-semibold'>Lorem Ipsum</h3>
                <h4 className='text-base font-medium'>@Loremipsum</h4>
              </div>
              <div>
                <p className='text-center px-12 font-medium text-amber-900 text-sm my-5'> latino antártico. Mi existencia es el desafío constante a todo lo establecido. My existence is the constant challenge to everything established.</p>
              </div>
              <div className='flex justify-center w-full mb-10'>
                <div className='flex justify-between w-[65%] items-center'>
                  <button className='bg-amber-900 text-white rounded-full px-3 py-2 text-base font-medium'>Ask me anything</button>
                  <button className='bg-amber-900 text-white rounded-full px-3 py-2 text-base font-medium'>Follow</button>
                  <button className='border-[2px] rounded-full border-gray-400 text-amber-900 p-1'><RedeemIcon/></button>
                  <button className='border-[2px] rounded-full border-gray-400 text-amber-900 p-1'><AddCommentOutlined/></button>
                  <button className='border-[2px] rounded-full border-gray-400 text-amber-900 p-1'><MoreHorizIcon/></button>
                </div>
              </div>
              <div className='w-full flex flex-col px-5'>
                <div className='border-b-[1px] border-amber-900 w-full mb-5'><span className='text-amber-900 font-semibold border-b-[2px] px-2 border-amber-900'>Posts</span></div>
                {
                data?.map(d=>(
                  <div key={d.id} className='flex flex-col border-[1px] rounded-md border-gray-300 mb-5'>
                      <div className='flex flex-col cursor-pointer border-[1px] border-gray-300 rounded-md'>
                        <div className='h-[60px] bg-white flex items-center border-b-[1px] border-gray-400 px-5 rounded-t-sm justify-between'>
                          <div className='text-sm font-semibold flex gap-2'>
                            <p className='text-black'>{d.name}</p>
                            <p className='text-blue-500 hover:underline'>Follow</p>
                          </div>
                          <div className='text-gray-500 cursor-pointer'><MoreHorizIcon/></div>
                        </div>
                        <div className='h-full'>
                          <Image className='object-cover min-h-[500px] max-h-[600px] ' src={d.postimg} width={1000} height={1000} alt=''></Image>
                        </div>
                        <div className='h-fit py-3 px-5 bg-white flex flex-col items-center rounded-b-sm justify-between'>
                          <div className='text-sm font-semibold flex border-gray-400 border-b-[1px] gap-2 py-3'>
                            <p className='text-black'>{d.desc}</p>
                          </div>
                          <div className='w-full flex justify-between items-center py-3'>
                            <button className='border-[1px] border-gray-300 rounded-full flex items-end py-1.5 px-3 gap-1'><p className='text-black font-semibold'>{d.notes}</p><p className='text-base text-gray-500'>notes</p></button>
                            <div className='flex gap-5 items-center text-gray-600'>
                              <ShareIcon className='transform scale-110'/>
                              <ChatBubbleOutlineIcon className='transform scale-110'/>
                              <FavoriteBorderIcon className='transform scale-110'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                ))
              }
              </div>
            </div>
            <div className='w-[35%] '>
              <div className='bg-[#e8d2e1] rounded-md text-black'>
                  <div className='border-slate-200 border-b-[1px] py-2.5 px-4 mb-3 flex '>
                    <h2 className='text-lg font-semibold'>Blogs like this one</h2>
                  </div>
                  <div>
                    {
                      data1.slice(0,4).map(d=>(
                        <div key={d.id} className='flex p-2 px-4 text-amber-900 justify-between items-center h-[60px] cursor-pointer'>
                          <div className='flex items-center gap-3'>
                            <Image className='h-[35px] w-[35px] rounded-sm object-cover' src={d.img} alt='' height={1000} width={1000}/>
                            <div className='text-sm font-semibold'>
                              <p className='text-black'>{d.name}</p>
                              <p className='font-normal text-gray-800'>{d.desc}</p>
                            </div>
                          </div>
                          <div className='flex items-center text-sm  gap-3'>
                              <p className='text-amber-900 font-medium'>Follow</p>
                              <Close className='text-gray-500' fontSize='20'/>
                          </div>
                        </div>
                      ))
                    }
                    <div className='my-5 rounded-b-md border-t-slate-200 border-[1px] p-2 text-base flex justify-center items-center'>
                  <Link className='text-amber-900 font-medium hover:underline' href="/explore/today">Show more Blogs</Link>
                </div>
                </div>
              </div>
              <div>
                <div className='border-slate-200 border-b-[1px] py-2 mb-5'><span className='text-black text-xl font-medium'>More like this</span></div>
                <div className='flex flex-wrap rounded-md overflow-hidden'>
                    {
                      data1.map(d=>(
                        <Image  className='cursor-pointer h-[100px] w-1/3 object-cover border-[1px] border-white' src={d.img} height={1000} width={1000}></Image>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Id
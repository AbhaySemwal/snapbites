import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { usePathname } from 'next/navigation';
import { Close } from '@mui/icons-material';
import { BlogpageContext } from '@/context/BlogpageContext';


const Feed = () => {
 
  const blogpage=useContext(BlogpageContext).blogpage[0];
  const [data,setData]=useState([]);
  useEffect(()=>{
   const getData=async()=>{
    const res=await fetch("http://localhost:3000/api/blogpost",{
    // next:{revalidate:10}
    cache:"no-store",
    });
    if(!res.ok)
    throw new Error("Failed to fetch data");
    const x=await res.json();
    setData(x.sort((p1,p2)=>{
      return new Date(p2.createdAt)-new Date(p1.createdAt);
    }));
   }
   getData();
  },[]);
    const [clicked,setClicked]=useState(false);
    const pathname=usePathname();

  return (
      <div className='w-full flex flex-col items-end font-sans'>
        <div className='font-sans w-[61%] flex border-gray-800 border-b-[1px] font-semibold text-lg mb-5'>
              <Link className={`h-12 flex items-center ${(pathname==="/"||pathname==="/dashboard/foryou") ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/dashboard/foryou"><span className='px-5  '>For you</span></Link>
              <Link className={`h-12 flex items-center ${pathname==="/dashboard/following" ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/dashboard/following"><span className='px-5'>Following</span></Link>
              <Link className={`h-12 flex items-center ${pathname==="/dashboard/yourtags" ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/dashboard/yourtags"><span className='px-5'>Your tags</span></Link>
          </div>
      {
        data?.map(d=>(
        <div key={d._id} className='w-[70%] gap-5 flex mb-5'>
          <div className='w-[10%] h-full'>
              <Link href={"/"+d?.displayName}>
                <Image className= "cursor-pointer rounded-md" src="/pyramid_closed_96.png" width={75} height={75} alt=''></Image>
              </Link>
          </div>
          <div className='w-[90%] flex flex-col '>
              <div className='flex flex-col cursor-pointer '>
                <div className='h-[60px] bg-[#272424] flex items-center px-5 rounded-t-sm justify-between'>
                  <div className='text-sm font-semibold flex gap-2'>
                    <Link href={"/"+d?.displayName} >{d?.displayName}</Link>
                    {d?.displayName!==blogpage?.displayName&&<p className='text-blue-500 hover:underline'>Follow</p>}
                  </div>
                  <div className='text-gray-500 cursor-pointer'><MoreHorizIcon/></div>
                </div>
                {d?.image&&<div className='-z-10 relative min-h-[500px] max-h-[600px] '>
                  <Image className='object-cover' src={d?.image} fill={true} alt=''></Image>
                </div>}
                <div className='h-fit w-full py-3 px-5 bg-[#272424] flex flex-col items-center rounded-b-sm justify-between'>
                  <div className='text-sm w-full font-semibold flex border-gray-600 border-b-[1px] gap-2 py-3'>
                    <p className=''>{d?.desc}</p>
                  </div>
                  <div className='w-full flex justify-between items-center py-3'>
                    {!clicked?<button onClick={()=>{setClicked(!clicked)}} className='border-[1px] border-gray-500 rounded-full flex items-end py-1.5 px-3 gap-1'><p className='font-[400]'>100</p><p className='text-base text-gray-400'>notes</p></button>:
                    <button onClick={()=>{setClicked(!clicked)}} className='text-gray-200 bg-gray-500 rounded-full flex items-center py-1.5 px-3 gap-1'><Close fontSize='small'/><p className='font-[400]'>Close</p><p className='text-base'>notes</p></button>}
                    <div className='flex gap-5 items-center'>
                      <ShareIcon className='text-blue-300 scale-110'/>
                      <ChatBubbleOutlineIcon onClick={()=>{setClicked(!clicked)}} className='text-green-400 scale-110'/>
                      <FavoriteBorderIcon className='text-red-400 scale-110'
                      />
                    </div>
                  </div>
                  {clicked&&<div className='h-[100px]'>
                    Notes
                  </div>}
                </div>
              </div>
          </div>
        </div>
        ))
      }

      </div>
  )
}

export default Feed
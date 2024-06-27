"use client"
import React, { useContext,useState,useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import { useSession } from 'next-auth/react';
import ExploreCheckout from '@/components/exploreCheckout/ExploreCheckout';
import { BlogpageContext } from '@/context/BlogpageContext';

const Explore = ({children}) => {

  const session=useSession();
  const router=useRouter();
  if(session.status==="unauthenticated")
  router?.push("/login")
  const pathname=usePathname();
  const blogpage=useContext(BlogpageContext).blogpage[0];
  const [loading,setLoading]=useState(false);

  const [checkout, setCheckout]=useState([]);
  useEffect(()=>{
    const getData=async()=>{
      setLoading(true);
    const res=await fetch("http://localhost:3000/api/blogpage",{
      // next:{revalidate:10}
    cache:"no-store",
  });
    if(!res.ok)
    throw new Error("Failed to fetch data");
    const x=await res.json();
    const y=x?.filter((i)=>{
      return (((!blogpage?.following?.includes(i?._id))&&(blogpage?._id!==i?._id)));
    })
    setCheckout(y);
    if(blogpage)
    setLoading(false);
    }
    getData();
  },[blogpage]);
  return (
    <>
      <Navbar/>
      <div className='flex'>
          <div className='flex flex-col items-end font-sans text-white w-[60%] border-r-[1px] px-3 border-gray-800'>
            <div className='w-[61%] flex border-gray-800 mt-10 border-b-[1px] font-semibold text-lg mb-5'>
              <Link className={`h-12 flex items-center ${pathname==="/explore/today"? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/explore/today"><span className='px-5'>Today</span></Link>
              <Link className={`h-12 flex items-center ${pathname==="/explore/foryou" ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/explore/foryou"><span className='px-5'>For You</span></Link>
              <Link className={`h-12 flex items-center ${pathname==="/explore/trending" ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/explore/trending"><span className='px-5'>Trending</span></Link>
            </div>
            {children}
        </div>
        <div className='w-[40%] mt-8 text-white font-sans px-3 '>
          <div className='w-[55%] bg-[#191717] flex flex-col justify-center py-3 px-4'>
              <h2 className='text-lg font-semibold mb-2'>Let&apos;s get personal</h2>
              <p className='text-sm text-gray-400 mb-5'>Whatever you&apos;re into, Snapbites has it. Follow tags that matter to you, and the things you love will show up here.</p>
              <button className='text-sm py-3 text-[#191717] rounded-sm bg-blue-500 mb-2 font-semibold'>Let&apos;s follow some tags</button>
              <button className='text-sm py-3 text-gray-400 rounded-sm border-2 border-gray-400 font-semibold'>Maybe later</button>
          </div>
          <div className='w-[55%] my-5 border-gray-700 border-b-[1px]'></div>
          <div className='w-[55%] bg-[#191717]'>
              <div className='border-gray-700 border-b-[1px] py-2.5 px-2 mb-2'>
                <h2 className='text-lg font-semibold'>Check out these blogs</h2>
              </div>
              <div className='px-2 border-gray-700 border-b-[1px]'>
                {loading?<p className='my-2'>Loading...</p>:
                  checkout.slice(0,4).map((d,index)=>(
                    <ExploreCheckout key={index} d={d} blogpage={blogpage} checkout={checkout} setCheckout={setCheckout}/>
                  ))
                }
              </div>
              <div className='cursor-pointer py-4 text-center'><p className='text-blue-400 hover:underline'>Show more blogs</p></div>
            </div>

            <div className='w-[55%] my-5 border-gray-700 border-b-[1px]'></div>
          </div>
      </div>
    </>
  )
}

export default Explore
"use client"
import React, { useContext, useEffect, useState } from 'react'
import Post from '@/components/post/Post';
import { BlogpageContext } from '@/context/BlogpageContext';


const Trending = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  const blogpage=useContext(BlogpageContext).blogpage[0];
  

  useEffect(()=>{
   const getData=async()=>{
    setLoading(true);
    const res=await fetch("/api/blogpost",{
    // next:{revalidate:10}
    cache:"no-store",
    });
    if(!res.ok)
    throw new Error("Failed to fetch data");
    const x=await res.json();
    setData(x.sort((p1,p2)=>{
      return (p2.comments?.length+p2?.likes?.length)-(p1.comments?.length+p1?.likes?.length);
    }));
    if(blogpage)
    setLoading(false);
   }
   getData()
  },[blogpage]);

  return (
      <div className='w-full flex flex-col items-end font-sans'>
        {loading?<p className='w-[70%] flex justify-center mt-10'>Loading...</p>:
          data?.map(d=>(
            <Post key={d?._id} blogpage={blogpage} d={d}/>
          ))
        }
      </div>
  )
}

export default Trending
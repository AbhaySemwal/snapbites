"use client"
import React, { useContext, useEffect, useState } from 'react'
import Post from '@/components/post/Post';
import { BlogpageContext } from '@/context/BlogpageContext';

const Foryou = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  const blogpage=useContext(BlogpageContext).blogpage[0];
  

  useEffect(()=>{
   const getData=async()=>{
    setLoading(true);
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

export default Foryou
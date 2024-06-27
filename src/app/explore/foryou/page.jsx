"use client"
import React, { useContext,useState,useEffect } from 'react'
import Post from '@/components/post/Post';
import { BlogpageContext } from '@/context/BlogpageContext';

const Foryou = () => {
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
      return new Date(p2.createdAt)-new Date(p1.createdAt);
    }));
    if(blogpage)
    setLoading(false);
   }
   getData()
  },[blogpage]);

  return (
    <>
    {loading?<p className='flex w-[70%] justify-center'>Loading...</p>:
        data?.map(d=>(        
          <Post key={d?._id} blogpage={blogpage} d={d}/>
        ))
      }
    </>
  )
}

export default Foryou
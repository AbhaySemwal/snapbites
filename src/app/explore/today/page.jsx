"use client"
import React, { useContext,useState,useEffect } from 'react'
import Post from '@/components/post/Post';
import { BlogpageContext } from '@/context/BlogpageContext';

const Today = () => {
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
    const today=new Date()
    const date = today.getFullYear() + '-' +((today.getMonth() + 1)<10?('0'+(today.getMonth()+1)):(today.getMonth()+1)) + '-' + ((today.getDate()<10)?('0'+today.getDate()):today.getDate());
    const y=x.filter(i=>{
      return (((i.createdAt).toString().substr(0,10))===date);
    })
    
    setData(y.sort((p1,p2)=>{
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

export default Today
"use client"
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import RedeemIcon from '@mui/icons-material/Redeem';
import { AddCommentOutlined } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';
import { BlogpageContext } from '@/context/BlogpageContext';
import { notFound } from 'next/navigation';
import PagePost from '@/components/pagePost/PagePost';
import PageRecc from '@/components/pageRecc/PageRecc';
import SendMessageModal from '@/components/modals/SendMessageModal';

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
    id:5,
    name:"anxietyproblem",
    desc:"Anxiety Problem",
    img:"/cropped-1920-1080-1314003.png",
  },
  {
    id:6,
    name:"anxietyproblem",
    desc:"Anxiety Problem",
    img:"/cropped-1920-1080-1314003.png",
  },
]

const Id = ({params}) => {
  const [err,setErr]=useState(false)
  const {blogpage}=useContext(BlogpageContext);
  const [bp,setBp]=useState([]);
  const [data,setData]=useState([]);
  const [flag,setFlag]=useState(false);
  const [loading,setLoading]=useState(true);
  const [followed,setFollowed]=useState(false)
  const [checkout, setCheckout]=useState([]);
  const [open,setOpen]=useState(false);
  
  useEffect(()=>{
    setFollowed(blogpage[0]?.following?.includes(bp?._id))
  },[bp]);
  
  useEffect(()=>{
    const getData=async()=>{
      setLoading(true);
    const res=await fetch("/api/blogpage",{
      // next:{revalidate:10}
    cache:"no-store",
  });
    if(!res.ok)
    throw new Error("Failed to fetch data");
    const x=await res.json();
    const y=x?.filter((i)=>{
      return (((!blogpage[0]?.following?.includes(i?._id))&&(blogpage[0]?._id!==i?._id)));
    })
    setCheckout(y);
    if(blogpage[0])
    setLoading(false);
    }
    getData();
  },[params.id,blogpage]);

  useEffect(()=>{
    const getUser=async()=>{
      setLoading(true);
      const res=await fetch(`/api/blogpage?displayName=${params.id}`,{
        // next:{revalidate:10}
        cache:"no-store",
        });
        if(!res.ok)
        throw new Error("Failed to fetch data");

        const x=await res.json();
        if(!x[0])
        setFlag(true);
        else 
        setFlag(false);
        setLoading(false)
        setBp(x[0]);
      }
      
      const getUserPosts=async()=>{
        setLoading(true);
        const res=await fetch(`/api/blogpost?displayName=${params.id}`,{
          // next:{revalidate:10}
          cache:"no-store",
          });
          if(!res.ok)
          throw new Error("Failed to fetch data");
          const x= await res.json();
          setData(x);
          setLoading(false);
      }
      if(!flag)
      getUserPosts();
      getUser();
  },[params.id]);

  if(flag)
  return notFound();

  const handleFollow=async(userId)=>{
    if(followed)
    {
      try{
        setFollowed(false);
         blogpage[0]?.following?.filter(function(item) {
          return item !== userId
      })
        const res=await fetch(`/api/blogpage/unfollow/${userId}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            id:blogpage[0]?._id
          })
        });
      }catch(err){
        setErr(true);
      }
    }
    else
    {
      try{
        setFollowed(true);
        blogpage?.following?.push(d?.userId);
        const res=await fetch(`/api/blogpage/follow/${userId}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            id:blogpage[0]?._id
          })
        });
      }catch(err){
        setErr(true);
      }
    }
  }
  return (
    <div className='text-white font-sans'>
        <Navbar fixed={true}/>
        <div className={`theme${bp?.theme} flex flex-col items-center mt-16`}>
            {loading?<p>Loading...</p>:<div className={`bg1 flex gap-5 w-[65%] rounded-md p-5`}>
            <div className={`w-[63%] rounded-md bg2`}>
                <Image className='relative rounded-t-md w-full h-[325px] object-cover' src={bp?.coverPicture?bp?.coverPicture:"/cropped-1920-1080-1314003.png"} height={1000} width={1000} alt=''></Image>
                <Image className='absolute border-4 border-solid top-[360px] left-[35%] rounded-full h-[100px] w-[100px] object-cover' src={bp?.profilePicture?bp?.profilePicture:"/pyramid_closed_96.png"} height={100} width={1000} alt=''></Image>
              <div className='flex flex-col items-center justify-center mt-12 gap-2 text-amber-900'>
                <h3 className={`text-2xl font-semibold name`} >{bp?.name}</h3>
                <Link href={"/"+bp?.displayName}><h4 className={`text-base font-medium displayname`}>@{bp?.displayName}</h4></Link>
              </div>
              <div>
                <p className={`text-center px-12 font-medium text-sm my-5 desc`}>{bp?.desc}</p>
              </div>
              <div className='flex justify-center w-full mb-10'>
                <div className='flex justify-between gap-2 items-center'>
                  <button className={`buttonbg text-white rounded-full px-3 py-2 text-base font-medium`} onClick={()=>{setOpen(!open)}}>Ask me anything</button>
                  {bp?.displayName!==blogpage[0]?.displayName&&<button className='buttonbg text-white rounded-full px-3 py-2 text-base font-medium' onClick={()=>handleFollow(bp?._id)}>{followed?"Following":"Follow"}</button>}
                  <button className={`border-[2px] rounded-full border-gray-400 p-1 desc`}><RedeemIcon/></button>
                  <button className={`border-[2px] rounded-full border-gray-400 desc p-1`}><AddCommentOutlined/></button>
                  <button className={`border-[2px] rounded-full border-gray-400 desc p-1`}><MoreHorizIcon/></button>
                </div>
                {open&&<SendMessageModal setOpen={setOpen} receiver={bp} blogpage={blogpage}/>}
              </div>
              <div className='w-full flex flex-col px-5'>
                <div className={`border-b-[1px] borderpost w-full mb-5`}><span className={`displayname borderpost font-semibold border-b-[2px] px-2`}>Posts</span></div>
                {
                  data?.map((d,index)=>(
                        <PagePost key={index} d={d} bp={bp} blogpage={blogpage[0]} followed={followed} handleFollow={handleFollow}/>
                  ))
                }
              </div>
            </div>
            <div className='w-[35%] '>
              <div className={`bg2 rounded-md text-black`}>
                  <div className='border-slate-200 border-b-[1px] py-2.5 px-4 mb-3 flex '>
                    <h2 className={`othertext text-xl font-semibold`}>Blogs like this one</h2>
                  </div>
                  <div>
                    {
                      checkout.slice(0,4).map((d,index)=>(
                        <PageRecc key={index} d={d} blogpage={blogpage} bp={bp} checkout={checkout} setCheckout={setCheckout}/>
                      ))
                    }
                    <div className='my-5 rounded-b-md border-t-slate-200 border-[1px] p-2 text-base flex justify-center items-center'>
                  <Link className={`displayname font-medium hover:underline`} href="/explore/today">Show more Blogs</Link>
                </div>
                </div>
              </div>
              <div>
                <div className='border-slate-200 border-b-[1px] py-2 mb-5'><span className={`othertext text-xl font-medium`}>More like this</span></div>
                <div className='flex flex-wrap gap-[2px] rounded-lg overflow-hidden'>
                    {
                      data1.map((d,index)=>(
                        <Image key={index}  className='cursor-pointer h-[100px] w-[32.9%] object-cover' src={d.img} height={1000} width={1000} alt=''></Image>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>}
        </div>
    </div>
  )
}

export default Id
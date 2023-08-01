"use client"
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import RedeemIcon from '@mui/icons-material/Redeem';
import { AddCommentOutlined } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Close } from '@mui/icons-material';
import Link from 'next/link';
import { BlogpageContext } from '@/context/BlogpageContext';
import { notFound } from 'next/navigation';

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
  const [err,setErr]=useState(false)
  const {blogpage}=useContext(BlogpageContext);
  const [bp,setBp]=useState([]);
  const [data,setData]=useState([]);
  const [flag,setFlag]=useState(false);
  const [loading,setLoading]=useState(true);
  const [followed,setFollowed]=useState(false)
  useEffect(()=>{
    setFollowed(blogpage[0]?.following.includes(bp._id))
  },[bp]);
  useEffect(()=>{
    const getUser=async()=>{
      setLoading(true);
      const res=await fetch(`http://localhost:3000/api/blogpage?displayName=${params.id}`,{
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
        const res=await fetch(`http://localhost:3000/api/blogpost?displayName=${params.id}`,{
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
        const res=await fetch(`http://localhost:3000/api/blogpage/unfollow/${userId}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            id:blogpage[0]._id
          })
        });
          setFollowed(false);
      }catch(err){
        setErr(true);
      }
    }
    else
    {
      try{
        const res=await fetch(`http://localhost:3000/api/blogpage/follow/${userId}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            id:blogpage[0]._id
          })
        });
        setFollowed(true)
      }catch(err){
        setErr(true);
      }
    }
  }
  return (
    <div className='text-white font-sans'>
        <Navbar fixed={true}/>
        <div className='flex flex-col items-center mt-16 '>
            {loading?<p>Loading...</p>:<div className='bg-[#9fc6bd] flex gap-5 w-[65%] rounded-md p-5'>
            <div className='w-[63%] rounded-md bg-[#e8d2e1]'>
                <Image className='relative rounded-t-md w-full h-[325px] object-cover' src={bp?.coverPicture} height={1000} width={1000} alt=''></Image>
                <Image className='absolute border-4 border-solid top-[360px] left-[35%] rounded-full h-[100px] w-[100px] object-cover' src={bp?.profilePicture} height={100} width={1000} alt=''></Image>
              <div className='flex flex-col items-center justify-center mt-12 gap-2 text-amber-900'>
                <h3 className='text-2xl font-semibold'>{bp?.name}</h3>
                <Link href={"/"+bp?.displayName}><h4 className='text-base font-medium'>@{bp?.displayName}</h4></Link>
              </div>
              <div>
                <p className='text-center px-12 font-medium text-amber-900 text-sm my-5'>{bp?.desc}</p>
              </div>
              <div className='flex justify-center w-full mb-10'>
                <div className='flex justify-between gap-2 items-center'>
                  <button className='bg-amber-900 text-white rounded-full px-3 py-2 text-base font-medium'>Ask me anything</button>
                  {bp?.displayName!==blogpage[0]?.displayName&&<button className='bg-amber-900 text-white rounded-full px-3 py-2 text-base font-medium' onClick={()=>handleFollow(bp._id)}>{followed?"Unfollow":"Follow"}</button>}
                  <button className='border-[2px] rounded-full border-gray-400 text-amber-900 p-1'><RedeemIcon/></button>
                  <button className='border-[2px] rounded-full border-gray-400 text-amber-900 p-1'><AddCommentOutlined/></button>
                  <button className='border-[2px] rounded-full border-gray-400 text-amber-900 p-1'><MoreHorizIcon/></button>
                </div>
              </div>
              <div className='w-full flex flex-col px-5'>
                <div className='border-b-[1px] border-amber-900 w-full mb-5'><span className='text-amber-900 font-semibold border-b-[2px] px-2 border-amber-900'>Posts</span></div>
                {
                data?.map(d=>(
                  <div key={d._id} className='flex flex-col border-[1px] rounded-md border-gray-300 mb-5'>
                      <div className='flex flex-col cursor-pointer border-[1px] border-gray-300 rounded-md'>
                        <div className='h-[60px] bg-white flex items-center px-5 rounded-t-sm justify-between'>
                          <div className='text-sm font-semibold flex gap-2'>
                            <p className='text-black'>{d?.name}</p>
                            {bp?.displayName!==blogpage[0]?.displayName&&<p className='text-blue-500 hover:underline' onClick={()=>handleFollow(d.userId)}>{followed?"Unfollow":"Follow"}</p>}
                          </div>
                          <div className='text-gray-500 cursor-pointer'><MoreHorizIcon/></div>
                        </div>
                        {d?.image&&<div className='border-b-[1px] border-t-[1px] border-gray-400 h-full'>
                          <Image className='object-cover min-h-[500px] max-h-[600px] ' src={d?.image} width={1000} height={1000} alt=''></Image>
                        </div>}
                        <div className='h-fit py-3 px-5 bg-white flex flex-col items-center rounded-b-sm justify-between'>
                          {d?.desc&&<div className='w-full text-sm font-semibold flex border-gray-400 border-b-[1px] gap-2 py-3'>
                            <p className='text-black'>{d?.desc}</p>
                          </div>}
                          <div className='w-full flex justify-between items-center py-3'>
                            <button className='border-[1px] border-gray-300 rounded-full flex items-end py-1.5 px-3 gap-1'><p className='text-black font-semibold'>100</p><p className='text-base text-gray-500'>notes</p></button>
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
                              {d?.name===<p className='text-amber-900 font-medium'>Follow</p>}
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
                        <Image  className='cursor-pointer h-[100px] w-1/3 object-cover border-[1px] border-white' src={d.img} height={1000} width={1000} alt=''></Image>
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
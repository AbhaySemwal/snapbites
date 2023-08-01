import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Close } from '@mui/icons-material';
import { BlogpageContext } from '@/context/BlogpageContext';

const Post = ({d}) => {
    const blogpage=useContext(BlogpageContext).blogpage[0];
    const [likes,setLikes]=useState(0);
    const [liked,setLiked]=useState(false);
    const [followed,setFollowed]=useState(false);
    useEffect(()=>{
      setLikes(d?.likes.length);
      setLiked(d?.likes.includes(blogpage._id));
    },[d]);
    useEffect(()=>{
        setFollowed(blogpage?.following.includes(d.userId))
    },[d]);
    const handleFollow=async(d)=>{
        try{
          const res=await fetch(`http://localhost:3000/api/blogpage/follow/${d?.userId}`,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              id:blogpage._id
            })
          });
         setFollowed(true)
        }catch(err){
          setErr(true);
        }
    }
    const handleLikes=async(d)=>{
      var n=1;
        try{
          if(d?.likes.includes(blogpage._id)||liked)
          n=-1;
          const res=await fetch(`http://localhost:3000/api/blogpost/like/${d?._id}`,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              id:blogpage._id
            })
          });
         
          setLiked(!liked);
          setLikes(likes+n);
        }catch(err){
          setErr(true);
        }
    }
      const [clicked,setClicked]=useState(false);
    
  return (
    <div className='w-[70%] gap-5 flex mb-5'>
    <div className='w-[10%] h-full'>
        <Link className='sticky -z-10 top-3' href={"/"+d?.displayName}>
          <Image className= "cursor-pointer rounded-md" src={d?.userProfile} width={75} height={75} alt=''></Image>
        </Link>
    </div>
    <div className='w-[90%] flex flex-col '>
        <div className='flex flex-col cursor-pointer '>
          <div className='h-[60px] bg-[#272424] flex items-center px-5 rounded-t-sm justify-between'>
            <div className='text-sm font-semibold flex gap-2'>
              <Link href={"/"+d?.displayName} >{d?.displayName}</Link>
              {d?.displayName!==blogpage?.displayName&&<p className='text-blue-500 hover:underline' onClick={()=>handleFollow(d)}>{!followed&&"follow"}</p>}
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
                <ShareIcon fontSize='medium' className='text-blue-300'/>
                <ChatBubbleOutlineIcon fontSize='medium' onClick={()=>{setClicked(!clicked)}} className='text-green-400'/>
                <div onClick={()=>handleLikes(d)}>
                  {liked?<FavoriteIcon  fontSize='medium' className='text-red-400'
                  />:<FavoriteBorderIcon  fontSize='medium' className='text-red-400'
                  />}
                </div>
              </div>
            </div>
            {clicked&&<div className='h-[100px]'>
              {likes}
            </div>}
          </div>
        </div>
    </div>
  </div>
  )
}

export default Post
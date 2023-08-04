"use client"
import Image from 'next/image'
import React, { useState,useEffect,useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Close } from '@mui/icons-material';
import { BlogpageContext } from '@/context/BlogpageContext';
import Checkout from '../checkout/Checkout';

const Rightbar = () => {
  const [clicked,setClicked]=useState(false);

  const [err,setErr]=useState(false);
  const [liked,setLiked]=useState(false);
  const [followed,setFollowed]=useState(false);
  
  const [loading,setLoading]=useState(false);
  const blogpage=useContext(BlogpageContext).blogpage[0];
  const [d,setD]=useState({});

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
  },[d,blogpage]);
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
    x.forEach(i=>{
      if((i?.userId!==blogpage?._id)&&(!(blogpage?.following?.includes(i?.userId))))
      setD(i);
    })
    if(setD==={})
    setD(x[0]);
    if(blogpage)
    setLoading(false);
    }
    getData();

  },[blogpage]);
  
  const [likes,setLikes]=useState([]);
  useEffect(()=>{
    setLikes(d?.likes)
  },[d])
  
  useEffect(()=>{
    d?.likes?.forEach(element => {
      if(element?._id===blogpage?._id)
      setLiked(true);
    });
  },[blogpage,d]);

  useEffect(()=>{
      setFollowed(blogpage?.following?.includes(d?.userId))
  },[d]);

  const handleFollow=async(d)=>{
      try{
        setFollowed(true);
        blogpage?.following?.push(d?.userId);
        const res=await fetch(`http://localhost:3000/api/blogpage/follow/${d?.userId}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            id:blogpage?._id
          })
        });
      }catch(err){
        setErr(true);
      }
  }
  
  const handleLikes=async(d)=>{
      try{
        if(liked)
        {
          const x=likes;
          setLikes([]);
          x.forEach((e)=>{
            if(e._id!==blogpage._id)
            {
              setLikes((prev)=>[...prev,e]);
            }
          })
        }
        else
        {
          likes.push({displayName:blogpage?.displayName,profilePicture:blogpage?.profilePicture,_id:blogpage?._id});
        }
        setLiked(!liked);
        const res=await fetch(`http://localhost:3000/api/blogpost/like/${d?._id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            _id:blogpage?._id,
            displayName:blogpage?.displayName,
            profilePicture:blogpage?.profilePicture,
          })
        });
       
      }catch(err){
        setErr(true);
      }
    }
    const [commentclicked,setCommentClicked]=useState(true);
    const [likesclicked,setLikesClicked]=useState(false);
  
    const handleNotes=()=>{
      setClicked(!clicked);
      clicked&&(setCommentClicked(true));
      clicked&&(setLikesClicked(false))
    }

    const handleCommentClicked=()=>{
      setCommentClicked(true);
      setLikesClicked(false);
    }

    const handleLikesClicked=()=>{
      setCommentClicked(false);
      setLikesClicked(true);
    }
    
    const [comments,setComments]=useState([]);
    useEffect(()=>{
      setComments(d?.comments)
    },[d]) 

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const text=e.target[0].value;
      const profilePicture=blogpage?.profilePicture;
      const displayName=blogpage?.displayName;
      const userId=blogpage?._id;
      setComments((prev)=>([...prev,{
            userId:blogpage._id,
            text:text,
            profilePicture:profilePicture,
            displayName:displayName}]))
            e.target[0].value="";
            try{
              if(text!=''||text!=' ')
              {
                await fetch(`http://localhost:3000/api/blogpost/comment/${d?._id}`,{
                  method:"PUT",
                  body:JSON.stringify({
              text:text,
              profilePicture:profilePicture,
              displayName:displayName,
              userId:userId
            }),
          }); 
          
        }
      }
      catch(err){
        console.log(err)
      }
    }
  return (
    <div className='w-[40%] flex flex-col font-sans'>
        <div className='w-[50%]'>
          <div className='border-gray-800 border-b-[1px] pb-2.5 px-1.5 mb-3'>
            <h2 className='text-xl font-semibold'>Check out these blogs</h2>
          </div>
          <div>
            {loading?<p>Loading...</p>:
              checkout.slice(0,4).map(d=>(
                <Checkout key={d._id} setCheckout={setCheckout} checkout={checkout} blogpage={blogpage} d={d}/>
              ))
            }
          </div>
        </div>
        <div className='w-[50%] my-5 p-2 text-base'>
          <Link className='text-blue-500 hover:underline' href="/explore/today">Explore all of Snapbites</Link>
        </div>
        <div className='w-[50%] flex flex-col'>
            <div className='border-gray-600 border-b-[1px] pb-2.5 px-1.5 mb-3'>
              <h2 className='text-xl font-semibold'>Radar</h2>
            </div>
            {(loading||!d?.displayName)?<p>Loading...</p>:<div className='flex flex-col '>
            <div className='flex flex-col cursor-pointer '>
              <div className='h-[60px] bg-[#272424] flex items-center px-5 rounded-t-sm justify-between'>
                <div className='text-sm font-semibold flex gap-2 items-center'>
                  <Image className='h-[30px] w-[30px] object-cover rounded-md' src={d?.userProfile} height={1000} width={1000}></Image>
                  <Link href={"/"+d?.displayName} >{d?.displayName}</Link>
                  {d?.displayName!==blogpage?.displayName&&<p className='text-blue-500 hover:underline' onClick={()=>handleFollow(d)}>{!followed&&"follow"}</p>}
                </div>
                <div className='text-gray-500 cursor-pointer'><MoreHorizIcon/></div>
              </div>
              {d?.image&&<div className='-z-10 relative min-h-[500px] max-h-[600px]'>
                <Image className='object-cover' src={d?.image} fill={true} alt=''></Image>
              </div>}
              <div className='h-fit w-full py-3 px-5 bg-[#272424] flex flex-col items-center rounded-b-sm justify-between'>
                {d?.desc&&<div className='w-full text-sm font-semibold flex border-gray-600 border-b-[1px] gap-2 py-3'>
                  <p className=''>{d?.desc}</p>
                </div>}
                <div className='w-full flex justify-between items-center py-3'>
                {!clicked?<button onClick={()=>{setClicked(!clicked)}} className='border-[1px] border-gray-500 rounded-full flex items-end py-1.5 px-3 gap-1'><p className='font-[400]'>{comments?.length}</p><p className='text-base text-gray-400'>notes</p></button>:
                  <button onClick={()=>{setClicked(!clicked)}} className='text-gray-200 bg-gray-500 rounded-full flex items-center py-1.5 px-3 gap-1'><Close fontSize='small'/><p className='font-[400]'>Close</p><p className='text-base'>notes</p></button>}
                  <div className='flex gap-3 items-center'>
                <ShareIcon fontSize='medium' className='text-blue-300'/>
                <ChatBubbleOutlineIcon fontSize='medium' onClick={handleNotes} className='text-green-400'/>
                <div onClick={()=>handleLikes(d)}>
                  {liked?<FavoriteIcon  fontSize='medium' className='text-red-400'
                  />:<FavoriteBorderIcon  fontSize='medium' className='text-red-400'
                  />}
                </div>
              </div>
                </div>
              </div>
            </div>
        </div>}
                {clicked&&<div className='cursor-pointer rounded-b-sm bg-[#272424] w-full h-[400px] border-t-[1px] border-gray-600'>
              <>
                <div className='px-2 flex text-gray-300 items-center h-10 border-b-[1px] border-gray-600'>
                  <div className={`px-3 h-10 flex gap-1 font-medium items-center justify-center border-b-2 ${commentclicked?" border-blue-500 text-blue-500":"border-transparent "}`} onClick={handleCommentClicked}><ChatBubbleOutlineIcon fontSize='small'/><p className='mb-[2px]'>{comments?.length}</p></div> 
                  <div className={`px-3 h-10 flex font-medium items-center justify-center gap-1 border-b-2 ${likesclicked?"border-red-500 text-red-500":"border-transparent"}`} onClick={handleLikesClicked}><FavoriteBorderIcon fontSize='small'/>{likes?.length}</div> 
                </div>
                {commentclicked&&<form className='flex items-center gap-2 mt-3 px-2' onSubmit={(e)=>handleSubmit(e)}>
                  <Image className='h-8 w-8 rounded-full' src={blogpage?.profilePicture} width={1000} height={1000} alt=''></Image>
                  <div className='border-[1px] border-gray-700 rounded-full w-full px-2 flex items-center'>
                    <input placeholder='Write something here...' className='h-10 text-sm placeholder:text-gray-500 w-full bg-transparent outline-none'></input>
                  <button className='text-gray-300 text-xs' type='submit'>Reply</button>
                  </div>
                </form>}
                <div className={`${commentclicked?"h-[305px]":"h-[359px]"} overflow-y-scroll`}>
                  {commentclicked&&
                    (comments?.length!==0?
                    comments?.map((comment)=>(
                    <div key={comment._id} className='flex w-fit max-w-[90%] gap-2 my-3 px-2'>
                      <Image className='h-8 w-8 rounded-full' src={comment?.profilePicture} width={1000} height={1000} alt=''></Image>
                      <div className='border-[1px] border-gray-700 rounded-lg p-2 h-fit'>
                        <Link href={"/"+comment?.displayName}><h1 className='mb-1.5 text-xs font-semibold'>{comment?.displayName}</h1></Link>
                        <p className='text-sm'>{comment?.text}</p>
                      </div>
                    </div>
                  )):
                  <div className='h-full w-full text-gray-500 flex flex-col gap-2 items-center justify-center'>
                      <div><ChatBubbleOutlineIcon fontSize='large'/></div>
                      <p>No comments yet</p>
                  </div>
                  )}
                  {
                    likesclicked&&
                    (likes?.length>0?
                    likes?.map((user)=>(
                      <div key={user._id} className='flex w-fit items-center max-w-[90%] gap-2 my-3 px-2'>
                      <Image className='h-8 w-8 rounded-full' src={user?.profilePicture} width={1000} height={1000}alt=''></Image>
                        <Link href={"/"+user?.displayName}><h1 className='mb-1.5 text-xs font-semibold'>{user?.displayName}</h1></Link>
                    </div>
                    )):
                      <div className='h-full w-full text-gray-500 flex flex-col gap-2 items-center justify-center'>
                      <div><FavoriteBorderIcon fontSize='large'/></div>
                        <p>No Likes yet</p>
                      </div>
                    )
                  }
                </div>
              </>
            </div>}
        </div>
    </div>
  )
}

export default Rightbar
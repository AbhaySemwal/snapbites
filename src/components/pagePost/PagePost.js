import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Close } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from 'next/link';
import PageComment from '../pageComment/PageComment';
import PageLike from '../pageLike/PageLike';

const PagePost = ({d,bp,blogpage,followed,handleFollow}) => {
    const [err,setErr]=useState(false);
    const [likes,setLikes]=useState(d?.likes);
    const [liked,setLiked]=useState(false);

    useEffect(()=>{
        d?.likes.forEach(element => {
          if(element?._id===blogpage?._id)
          setLiked(true);
        });
      },[blogpage,d]);

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
            likes.push({displayName:blogpage?.displayName,_id:blogpage?._id});
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
            })
          });
         
        }catch(err){
          setErr(true);
        }
      }
      const [clicked,setClicked]=useState(false);
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
      
      const [comments,setComments]=useState(d?.comments); 
      const handleSubmit=async(e)=>{
        e.preventDefault();
        const text=e.target[0].value;
        const displayName=blogpage?.displayName;
        const userId=blogpage?._id;
        setComments((prev)=>([...prev,{
              userId:blogpage._id,
              text:text,
              displayName:displayName}]))
              e.target[0].value="";
              try{
                if(text!=''||text!=' ')
                {
                  await fetch(`http://localhost:3000/api/blogpost/comment/${d?._id}`,{
                    method:"PUT",
                    body:JSON.stringify({
                text:text,
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
    <>
        <div key={d._id} className='flex flex-col border-[1px] rounded-md text-black border-gray-300 mb-5'>
            <div className='flex flex-col cursor-pointer border-[1px] border-gray-300 rounded-md'>
            <div className='h-[60px] bg-white flex items-center px-5 rounded-t-sm justify-between'>
                <div className='text-sm font-semibold flex gap-2'>
                <Link href={"/"+d?.displayName}><p className='text-black'>{d?.name}</p></Link>
                {bp?.displayName!==blogpage?.displayName&&<p className='text-blue-500 hover:underline' onClick={()=>handleFollow(d?.userId)}>{!followed&&"Follow"}</p>}
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
                <div className='w-full flex justify-between items-center py-4'>
              {!clicked?<button onClick={handleNotes} className='border-[1px] border-gray-500 rounded-full flex items-end py-1 px-2 gap-1'><p className='font-[400]'>{comments?.length}</p><p className='text-base text-gray-700'>notes</p></button>:
              <button onClick={handleNotes} className='text-white bg-gray-400 rounded-full flex items-center py-1 px-2 gap-0.5'><Close fontSize='small'/><p className='font-[400]'>Close</p><p className='text-base'>notes</p></button>}
              <div className='flex gap-5 items-center'>
                <ShareIcon fontSize='medium' className='text-gray-500'/>
                <ChatBubbleOutlineIcon fontSize='medium' onClick={handleNotes} className='text-gray-500'/>
                <div onClick={()=>handleLikes(d)}>
                  {liked?<FavoriteIcon  fontSize='medium' className='text-gray-500'
                  />:<FavoriteBorderIcon  fontSize='medium' className='text-gray-500'
                  />}
                </div>
              </div>
            </div>
            </div>
            </div>
            {clicked&&<div className='cursor-pointer rounded-b-sm bg-white w-full h-[400px] border-t-[1px] border-gray-500'>
              <>
                <div className='px-5 flex text-gray-500 items-center h-10 border-b-[1px] border-gray-500'>
                  <div className={`px-3 h-10 flex gap-1 font-medium items-center justify-center border-b-2 ${commentclicked?" border-blue-500 text-blue-500":"border-transparent "}`} onClick={handleCommentClicked}><ChatBubbleOutlineIcon fontSize='small'/><p className='mb-[2px]'>{comments.length}</p></div> 
                  <div className={`px-3 h-10 flex font-medium items-center justify-center gap-1 border-b-2 ${likesclicked?"border-red-500 text-red-500":"border-transparent"}`} onClick={handleLikesClicked}><FavoriteBorderIcon fontSize='small'/>{likes.length}</div> 
                </div>
                {commentclicked&&<form className='flex items-center gap-2 mt-3 px-5' onSubmit={(e)=>handleSubmit(e)}>
                  <Image className='h-8 w-8 rounded-full' src={blogpage?.profilePicture} width={1000} height={1000} alt=''></Image>
                  <div className='border-[1px] border-gray-700 rounded-full w-full px-3 flex items-center'>
                    <input placeholder='Write something nice here...' className='h-10 text-sm placeholder:text-gray-500 text-black w-full bg-transparent outline-none'></input>
                  <button className='text-black' type='submit'>Reply</button>
                  </div>
                </form>}
                <div className={`${commentclicked?"h-[305px]":"h-[359px]"} overflow-y-scroll`}>
                  {commentclicked&&
                    (comments.length!==0?
                    comments.map((comment)=>(
                    <div key={comment._id}>
                      <PageComment comment={comment}/>
                    </div>
                  )):
                  <div className='h-full w-full text-gray-500 flex flex-col gap-2 items-center justify-center'>
                      <div><ChatBubbleOutlineIcon fontSize='large'/></div>
                      <p>No comments yet</p>
                  </div>
                  )}
                  {
                    likesclicked&&
                    (likes.length>0?
                    likes?.map((user)=>(
                      <div key={user._id} >
                        <PageLike user={user}/>
                    </div>
                    )):
                      <div className='h-full w-full text-gray-500 flex flex-col gap-2 items-center justify-center'>
                      <div className='text-gray-500'><FavoriteBorderIcon fontSize='large'/></div>
                        <p>No Likes yet</p>
                      </div>
                    )
                  }
                </div>
              </>
            </div>}
        </div>
    </>
  )
}

export default PagePost
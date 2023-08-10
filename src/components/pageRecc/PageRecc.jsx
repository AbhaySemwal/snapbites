import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { Close } from '@mui/icons-material';
import Image from 'next/image';

const pageRecc = ({d,checkout,setCheckout,blogpage,bp}) => {
  const [followed,setFollowed]=useState(false);
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
  return (
    <div className='flex p-2 px-4 bg2hover justify-between items-center h-[60px] cursor-pointer'>
        <div className='flex items-center gap-3'>
        <Image className='h-[35px] w-[35px] rounded-sm object-cover' src={d?.profilePicture} alt='' height={1000} width={1000}/>
        <div className='text-sm font-semibold'>
            <Link href={"/"+d?.displayName}><p className={`reccdisplayname`}>{d?.displayName}</p></Link>
            <p className='font-normal text-gray-500'>{d?.name}</p>
        </div>
        </div>
        <div className='flex items-center text-sm  gap-3'>
            <p className={`displayname font-medium hover:underline`} onClick={()=>handleFollow(d)}>{!followed&&"Follow"}</p>
            <Close onClick={()=>{
            setCheckout(checkout.filter((i)=>{
                return(d._id!==i._id)
            }))
            }} className='text-gray-500 m-1' fontSize='20'/>
        </div>
    </div>
  )
}

export default pageRecc
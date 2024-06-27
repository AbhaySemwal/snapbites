import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Comment = ({comment}) => {
    const [u,setU]=useState([]);
    useEffect(()=>{
        const getUser=async()=>{
            try{
              const res=await fetch(`/api/blogpage/${comment?.userId}`,{
                  method:"GET",
                  headers:{
                    "Content-Type":"application/json",
                  },
                });
                const x=await res.json();
                setU(x);
            }
            catch(err)
            {
              console.log(err)
            }
          }
        getUser();
    },[])
    
  return (
    <div className='flex w-fit max-w-[90%] gap-2 my-3 px-5'>
        <Image className='h-8 w-8 rounded-full' src={u?.profilePicture?u?.profilePicture:"/pyramid_closed_96.png"} width={1000} height={1000} alt=''></Image>
        <div className='border-[1px] border-gray-700 rounded-lg p-2 h-fit'>
        <Link href={"/"+comment?.displayName}><h1 className='mb-1.5 text-xs font-semibold'>{comment?.displayName}</h1></Link>
        <p className='text-sm'>{comment?.text}</p>
        </div>
    </div>
  )
}

export default Comment
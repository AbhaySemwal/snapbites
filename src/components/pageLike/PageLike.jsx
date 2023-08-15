import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const PageLike = ({user}) => {
    const [u,setU]=useState([]);
    useEffect(()=>{
        const getUser=async()=>{
            try{
              const res=await fetch(`http://localhost:3000/api/blogpage/${user?._id}`,{
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
    <div className='flex w-fit items-center max-w-[90%] gap-2 my-3 px-5'>
        <Image className='h-8 w-8 rounded-full' src={u?.profilePicture?u?.profilePicture:"/pyramid_closed_96.png"} width={1000} height={1000}alt=''></Image>
        <Link href={"/"+user?.displayName}><h1 className='mb-1.5 text-xs font-semibold'>{user?.displayName}</h1></Link>
    </div>
  )
}

export default PageLike
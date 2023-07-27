"use client"
import React, { useState } from "react";
import Link from 'next/link'
import { Search } from '@mui/icons-material'
import Image from 'next/image'
import { Google } from '@mui/icons-material'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
    const session =useSession();
  const router=useRouter();
  if(session.status==="loading")
  return<p>Loading...</p>;
  if(session.status==="authenticated")
  router?.push("/auth");

  const handleSubmit=async(e)=>{

    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
    signIn("credentials",{email,password})

  }
  return (
    <div className='font-sans text-white '>
        <Image className='w-screen h-screen relative' src="/cropped-1920-1080-1314003.png" height={1000} width={1000} alt=""></Image>
        <div className='absolute top-0 h-screen w-screen bg-transparent/50'>
            <div className='flex justify-between p-2'>
                <div className=' w-[50%] flex items-center gap-5'>
                    <Link href="/" ><p className="font-montserrat font-bold hover:-rotate-12 text-red-400 hover:text-blue-400 cursor-pointer transition delay-100 ease-in-out hover:transform text-3xl">SB</p></Link>
                    <div className='flex h-[35px] bg-transparent/20 items-center w-[60%] px-2 rounded-md gap-1'>
                        <span className='text-gray-300 flex transform scale-[1.10]'><Search/></span>
                        <input className='font-sans w-full bg-transparent outline-none  text-sm font-normal placeholder-gray-300' placeholder='Search SnapBites...'></input>
                    </div>
                </div>
                <Link href="/register"><button className='bg-blue-500 text-black text-sm p-2 font-medium rounded-md flex justify-center items-center'>Sign Up</button>  </Link>
            </div>
            <div className='flex flex-col items-center h-[calc(100vh-60px)] justify-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-semibold mb-8'>SnapBites</h1>
                    <form className='flex flex-col gap-2 w-[400px]' onSubmit={handleSubmit}>
                        <input className='text-black outline-none rounded-md h-10 p-2' placeholder='Email' type='email'></input>
                        <input className='text-black outline-none rounded-md h-10 p-2' placeholder='Password' type='password'></input>
                        <button className='bg-blue-400 text-black rounded-md h-10 font-semibold'>Log in</button>
                    </form>
                    <div className='flex items-center justify-center w-full my-2'>
                        <div className='border-b-[1px] w-full'></div>
                        <p className='mx-2'>or</p>
                        <div className='border-b-[1px] w-full'></div>
                    </div>
                    <button className='flex items-center gap-2 justify-center w-full bg-white h-10 text-black font-medium rounded-md' onClick={()=>signIn("google")}><Google fontSize='small'/>Continue with Google</button>
                    <p className='flex text-sm mt-2'>New to SnapBites? <Link href="/register" className='cursor-pointer underline'>Sign up</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
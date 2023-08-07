"use client"
import { BlogpageContext } from '@/context/BlogpageContext'
import Navbar from '@/components/navbar/Navbar'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit';

const Settings = ({params}) => {
    const blogpage=useContext(BlogpageContext).blogpage[0];

    const [isCurr,setIsCurr]=useState(false);
    useEffect(()=>{
        const handleCurrUser=()=>{
            if(blogpage?.displayName===params.id)
            setIsCurr(true);
        }
        handleCurrUser();
    },[blogpage])

    return (
        <>
        {
            isCurr?
            <>
                <Navbar fixed={true}/>
                <div className='text-white mt-24 flex gap-8'>
                    <div className='w-[60%] flex flex-col items-end'>
                        <form className='bg-white'>
                            <div className='relative w-full h-[325px] '>
                                <Image className='object-cover h-full w-full' src={blogpage?.coverPicture} height={1000} width={1000} alt=''></Image>
                                <input className='hidden' type='file' id='coverPicture'></input>
                                <label htmlFor='coverPicture' className='absolute top-2 right-2 rounded-md cursor-pointer text-gray-300  bg-transparent/30 p-0.5 w-fit'>
                                    <EditIcon/>
                                </label>
                            </div>
                            <div className='relative'>
                                <div className='absolute border-4 border-solid -top-12 left-[41%] rounded-full h-[100px] w-[100px] object-cover'>
                                    <Image className='h-full w-full object-cover rounded-full overflow-hidden' src={blogpage?.profilePicture} height={1000} width={1000} alt=''></Image>
                                    <input className='hidden' type='file' id='profilePicture'></input>
                                    <label htmlFor='profilePicture' className='absolute top-8 left-8 rounded-md cursor-pointer text-gray-300 bg-transparent/30 p-0.5 w-fit'>
                                        <EditIcon/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center mt-16 gap-2 text-black'>
                            <div className='flex justify-center'>
                                <input placeholder={blogpage?.name} className='placeholder-black text-center text-2xl outline-none font-semibold'></input>
                            </div>
                            <h4 className='text-base font-medium'>@{blogpage?.displayName}</h4>
                            </div>
                            <div className='w-full flex justify-center'>
                                <input placeholder={blogpage.desc?blogpage?.desc:"Add Description"} className=' text-center px-12 w-fit font-medium text-black text-sm my-5 placeholder-black   outline-none'></input>
                            </div>
                            <div className='w-full bg-[#272424] flex flex-col items-start'>
                                <div className='relative w-full px-5 py-2 mt-2 font-semibold'>Change theme of your blogpage</div>
                                <div className='flex flex-wrap justify-center px-2 gap-2 cur my-2 w-full'>
                                    <div className='h-[300px] cursor-pointer py-2 w-[49%] bg-black flex justify-center border-[1px] border-white rounded-md'>
                                        <div className='w-[80%] bg-[#272424] flex justify-center py-2 rounded-md '>
                                            <div className='w-[90%] flex justify-center gap-1.5 '>
                                                <div className='bg-black w-[60%] rounded-md'>
                                                    <div className='relative h-[50px] border-b-[1px] border-white'></div>
                                                    <div className='relative -top-2.5 left-[42%] h-[20px] w-[20px] rounded-full bg-white'></div>
                                                    <div className='w-full flex flex-col items-center'>
                                                        <p className='text-[10px] '>name</p>
                                                        <p className='text-[6px]'>@displayName</p>
                                                        <p className='text-[8px]'>desc</p>
                                                        <button className='my-2 bg-gray-500 flex items-center justify-center rounded-md p-[2px] text-white text-[8px] h-[10px]'>button</button>
                                                    </div>
                                                    <div>
                                                    <div className='h-[100px] px-1'>
                                                        <div className='bg-white text-black flex h-full justify-center items-center'>
                                                            Post
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className='bg-black w-[40%] h-[30%] rounded-md items-center flex flex-col'>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-[300px] cursor-pointer py-2 w-[49%] bg-black flex justify-center border-[1px] border-white rounded-md'>
                                        <div className='w-[80%] bg-[#272424] flex justify-center py-2 rounded-md '>
                                            <div className='w-[90%] flex justify-center gap-1.5 '>
                                                <div className='bg-black w-[60%] rounded-md'>
                                                    <div className='relative h-[50px] border-b-[1px] border-white'></div>
                                                    <div className='relative -top-2.5 left-[42%] h-[20px] w-[20px] rounded-full bg-white'></div>
                                                    <div className='w-full flex flex-col items-center'>
                                                        <p className='text-[10px] '>name</p>
                                                        <p className='text-[6px]'>@displayName</p>
                                                        <p className='text-[8px]'>desc</p>
                                                        <button className='my-2 bg-gray-500 flex items-center justify-center rounded-md p-[2px] text-white text-[8px] h-[10px]'>button</button>
                                                    </div>
                                                    <div>
                                                    <div className='h-[100px] px-1'>
                                                        <div className='bg-white text-black flex h-full justify-center items-center'>
                                                            Post
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className='bg-black w-[40%] h-[30%] rounded-md items-center flex flex-col'>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-[300px] cursor-pointer py-2 w-[49%] bg-black flex justify-center border-[1px] border-white rounded-md'>
                                        <div className='w-[80%] bg-[#272424] flex justify-center py-2 rounded-md '>
                                            <div className='w-[90%] flex justify-center gap-1.5 '>
                                                <div className='bg-black w-[60%] rounded-md'>
                                                    <div className='relative h-[50px] border-b-[1px] border-white'></div>
                                                    <div className='relative -top-2.5 left-[42%] h-[20px] w-[20px] rounded-full bg-white'></div>
                                                    <div className='w-full flex flex-col items-center'>
                                                        <p className='text-[10px] '>name</p>
                                                        <p className='text-[6px]'>@displayName</p>
                                                        <p className='text-[8px]'>desc</p>
                                                        <button className='my-2 bg-gray-500 flex items-center justify-center rounded-md p-[2px] text-white text-[8px] h-[10px]'>button</button>
                                                    </div>
                                                    <div>
                                                    <div className='h-[100px] px-1'>
                                                        <div className='bg-white text-black flex h-full justify-center items-center'>
                                                            Post
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className='bg-black w-[40%] h-[30%] rounded-md items-center flex flex-col'>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-[300px] cursor-pointer py-2 w-[49%] bg-black flex justify-center border-[1px] border-white rounded-md'>
                                        <div className='w-[80%] bg-[#272424] flex justify-center py-2 rounded-md '>
                                            <div className='w-[90%] flex justify-center gap-1.5 '>
                                                <div className='bg-black w-[60%] rounded-md'>
                                                    <div className='relative h-[50px] border-b-[1px] border-white'></div>
                                                    <div className='relative -top-2.5 left-[42%] h-[20px] w-[20px] rounded-full bg-white'></div>
                                                    <div className='w-full flex flex-col items-center'>
                                                        <p className='text-[10px] '>name</p>
                                                        <p className='text-[6px]'>@displayName</p>
                                                        <p className='text-[8px]'>desc</p>
                                                        <button className='my-2 bg-gray-500 flex items-center justify-center rounded-md p-[2px] text-white text-[8px] h-[10px]'>button</button>
                                                    </div>
                                                    <div>
                                                    <div className='h-[100px] px-1'>
                                                        <div className='bg-white text-black flex h-full justify-center items-center'>
                                                            Post
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className='bg-black w-[40%] h-[30%] rounded-md items-center flex flex-col'>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                   <p>--------</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
            :
            <div className='text-white w-full h-screen flex items-center justify-center font-semibold'>Something sucks</div>
        }
        </>
    )
}

export default Settings
"use client"
import { BlogpageContext } from '@/context/BlogpageContext'
import Navbar from '@/components/navbar/Navbar'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit';
import Theme from '@/components/theme/Theme'

const Settings = ({params}) => {
    const blogpage=useContext(BlogpageContext).blogpage[0];
    const [err,setErr]=useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [imageSrc2, setImageSrc2] = useState(null);
    const [uploadData, setUploadData] = useState();
    const [uploadData2, setUploadData2] = useState();
    const [warn,setWarn]=useState(false);

    const [isCurr,setIsCurr]=useState(false);
    useEffect(()=>{
        const handleCurrUser=()=>{
            if(blogpage?.displayName===params.id)
            setIsCurr(true);
        }
        handleCurrUser();
    },[blogpage]);

    function handleOnChange(changeEvent) {
        const reader = new FileReader();
    
        reader.onload = function(onLoadEvent) {
          setImageSrc(onLoadEvent.target.result);
          setUploadData(undefined);
          
        }
        setWarn(false)
        reader.readAsDataURL(changeEvent.target.files[0]);
      }
    function handleOnChange2(changeEvent) {
        const reader = new FileReader();
    
        reader.onload = function(onLoadEvent) {
          setImageSrc2(onLoadEvent.target.result);
          setUploadData2(undefined);
          
        }
        setWarn(false)
        reader.readAsDataURL(changeEvent.target.files[0]);
      }
      const [theme,setTheme]=useState(blogpage?.theme);
      const themeSelect=[
        {
            id:0,
            n:"0"
        },
        {
            id:1,
            n:"1"
        },
        {
            id:2,
            n:"2"
        },
        {
            id:3,
            n:"3"
        },
        {
            id:4,
            n:"4"
        },
      ]
      const [saved,setSaved]=useState(true);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setSaved(false);
        const desc=e.target[2].value!==""?e.target[2].value:blogpage?.desc;

        try{
            if(imageSrc!==null)
            {
            const form = e.currentTarget;
            const fileInput = Array.from(form.elements).find(({ name }) => name === 'file2')
            const formData = new FormData();
    
            for ( const file of fileInput.files ) {
            formData.append('file2', file);
            }
            formData.append('upload_preset', 'my-upload');
            const data = await fetch('https://api.cloudinary.com/v1_1/dgav9ohkf/image/upload', {
            method: 'POST',
            body: formData
            }).then(r => r.json());
            console.log(data)
            setImageSrc2(data.url);
            setUploadData2(data);
            }
            if(imageSrc2!==null)
            {
            const form = e.currentTarget;
            const fileInput = Array.from(form.elements).find(({ name }) => name === 'file')
            const formData = new FormData();
    
            for ( const file of fileInput.files ) {
            formData.append('file', file);
            }
            formData.append('upload_preset', 'my-upload');
            const data = await fetch('https://api.cloudinary.com/v1_1/dgav9ohkf/image/upload', {
            method: 'POST',
            body: formData
            }).then(r => r.json());
            console.log(data)
            setImageSrc(data.url);
            setUploadData(data);
            }
            const coverPicture=(imageSrc==null?blogpage?.coverPicture:imageSrc);
            const profilePicture=(imageSrc2==null?blogpage?.profilePicture:imageSrc2);
            const res=await fetch(`/api/blogpage/${blogpage?._id}`,{
              method:"PUT",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify({
                desc,
                coverPicture,
                profilePicture,
                theme
              })
            });
            setSaved(true);
          }catch(err){
            setErr(true);
          }
        window.location.reload();
    }
    const desc=useRef();
    const handleCancel=(e)=>{
        desc.current.value="";
        setTheme(blogpage?.theme);
    }
    return (
        <>
        {
            isCurr?
            <>
                <Navbar fixed={true}/>
                <div className={`theme${theme} text-white mt-24 flex gap-8`}>
                    <div className='w-full flex flex-col items-center'>
                        <form className='bg2' onSubmit={handleSubmit}>
                            <div className='relative w-full h-[325px] '>
                                <Image className='object-cover h-full w-full' src={imageSrc!==null?imageSrc:blogpage?.coverPicture} height={1000} width={1000} alt=''></Image>
                                <input className='hidden' id='coverPicture' type="file" name="file" onChange={handleOnChange}></input>
                                <label htmlFor='coverPicture' className='absolute top-2 right-2 rounded-md cursor-pointer text-gray-300  bg-transparent/30 p-0.5 w-fit'>
                                    <EditIcon/>
                                </label>
                            </div>
                            <div className='relative'>
                                <div className='absolute border-4 border-solid -top-12 left-[41%] rounded-full h-[100px] w-[100px] object-cover'>
                                    <Image className='h-full w-full object-cover rounded-full overflow-hidden' src={imageSrc2!=null?imageSrc2:blogpage?.profilePicture} height={1000} width={1000} alt=''></Image>
                                    <input className='hidden' type='file' name='file2' id='profilePicture' onChange={handleOnChange2}></input>
                                    <label htmlFor='profilePicture' className='absolute top-8 left-8 rounded-md cursor-pointer text-gray-300 bg-transparent/30 p-0.5 w-fit'>
                                        <EditIcon/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center mt-16 gap-2 text-black'>
                            <div className='flex justify-center'>
                                <p className='text-center name text-2xl outline-none font-semibold'>{blogpage?.name}</p>
                            </div>
                                <p className='text-center displayname text-medium outline-none font-semibold'>{"@"+blogpage?.displayName}</p>
                            </div>
                            <div className='w-full flex justify-center'>
                                <input ref={desc} placeholder={blogpage?.desc?blogpage?.desc:"Add Description"} className='desc bg-transparent placeholder:text-gray-500 text-center px-12 w-fit font-medium text-black text-sm my-5 placeholder-black   outline-none'></input>
                            </div>
                            <div className='w-full bg-[#272424] flex flex-col items-start'>
                                <div className='relative w-full px-5 py-2 mt-2 font-semibold'>Choose theme for your blogpage</div>
                                <div className='flex flex-wrap justify-center px-2 gap-2 cur my-2 w-full'>
                                {
                                    themeSelect.map(t=>(
                                        <Theme key={t.id} t={t} setTheme={setTheme} theme={theme}/>
                                    ))
                                }
                                </div>
                                <div className='flex gap-2 mx-2 my-3'>
                                    <button className='rounded-md text-black p-1 bg-yellow-300' type='button' onClick={handleCancel}>Cancel</button>
                                    <button className='rounded-md text-black p-1 bg-green-300' type='submit'>{saved?"Save":"Saving..."}</button>
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
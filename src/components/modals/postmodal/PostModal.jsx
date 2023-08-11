import Image from 'next/image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useEffect, useRef, useState } from 'react';
import { Close } from '@mui/icons-material';
import { useSession } from 'next-auth/react';

export default function PostModal({setOpen} ) {
  const session=useSession();
  const [button,setButton]=useState("Post")
  const [imageSrc, setImageSrc] = useState(null);
  const [uploadData, setUploadData] = useState();
  const [hide,setHide]=useState(true);
  const [warn,setWarn]=useState(false);
  const text=useRef();
  const Img=useRef();
  const Icon=useRef();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
      
    }
    setWarn(false)
    reader.readAsDataURL(changeEvent.target.files[0]);
  }
  const [blogpage,setBlogpage]=useState([]);
  useEffect(()=>{
    const getUser=async()=>{
      const res=await fetch(`http://localhost:3000/api/blogpage?name=${session.data?.user.name}`,{
      // next:{revalidate:10}
      cache:"no-store",
      });
      if(!res.ok)
      throw new Error("Failed to fetch data");
      const x=await res.json();
      setBlogpage(x);
     }
     getUser();
    },[session.data?.user]);

 const handlePictureIcon=()=>{
    if(text.current.value=="")
    setHide(true)
    else
    setHide(false);
 }
console.log()
  async function handleOnSubmit(event) {
    event.preventDefault();
    setButton("Posting...");
    if(text.current.value===""&&imageSrc===null)
    setWarn(true);
    else
    {
        if(imageSrc!==null)
        {
          const form = event.currentTarget;
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
          setImageSrc(data.secure_url);
          setUploadData(data);
        }
        try{
          const desc=text.current.value;
          const image=imageSrc;
          await fetch("/api/blogpost",{
            method:"POST",
            body:JSON.stringify({
              desc,
              image,
              name: session.data.user.name,
              displayName:blogpage[0]?.displayName,
              userId:blogpage[0]?._id,
              userProfile:blogpage[0]?.profilePicture,
            }),
          }); 
        }
        catch(err){
          console.log(err)
        }
        window.location.reload();
        setOpen(false);
    }
   
  }

  const handleClose=()=>{
    setImageSrc(null);
    Img.current.value=null;
  }

  return (
    <div className="z-40 text-white absolute h-[400px] flex gap-5 top-40 rounded-md left-[450px] ">
        <div className=''>
            <Image className='shadow-slate-100 shadow-2xl h-[60px] w-[60px] rounded-sm' src={blogpage[0]?.profilePicture?blogpage[0]?.profilePicture:"/pyramid_closed_96.png"} height={1000} width={1000} alt=''></Image>
        </div>
        <div className='bg-[#272424] w-[500px] shadow-slate-100 shadow-2xl flex flex-col h-full'>
            <div className='text-sm font-semibold h-[40px] px-5 flex items-center'>{blogpage[0]?.displayName}</div>
            <form className="h-full w-full flex flex-col justify-between" method="post" onSubmit={handleOnSubmit}>
                {imageSrc&&
                <div className='relative'>
                    <Image className='h-[250px] object-cover' src={imageSrc} height={1000} width={1000} alt=''/>
                    <p onClick={handleClose} className='absolute top-0 right-0'><Close/></p>
                </div>}
                <div className='flex flex-col justify-between px-5'>
                    <div className='flex'>
                        <input ref={text} onChange={handlePictureIcon} className='w-full outline-none  bg-transparent' placeholder='Add a description...'></input>
                        <input ref={Img} id='file' className='hidden' type="file" name="file" onChange={handleOnChange}/>
                        {hide&&<label ref={Icon} className='cursor-pointer' htmlFor='file'><AddPhotoAlternateIcon className='text-red-500'/></label>}
                    </div>
                    {warn&&<p className='flex justify-end text-xs text-red-500'>*Please add an image or text to post</p>}
                </div>
                <div className='px-5 border-t-[1px] h-[60px] border-gray-700 w-full items-center flex justify-between'>
                    <button className='p-3 flex h-8 rounded-full items-center justify-center bg-[#6d6767]' type='button' onClick={()=>setOpen(false)}>close</button>
                    <button className='p-3 flex h-8 rounded-full items-center justify-center border-2 border-[#6d6767]'  type='submit'>{button}</button>
                </div>
            </form>
        </div>
    </div>
  )
}
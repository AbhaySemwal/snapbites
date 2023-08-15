import Image from 'next/image';
import { useRef, useState } from 'react';

const SendMessageModal = ({setOpen,receiver,blogpage}) => {
  const [button,setButton]=useState("Send")
  const [warn,setWarn]=useState(false);
  const txt=useRef();

  async function handleOnSubmit(event) {
    event.preventDefault();
    setButton("Sending...");
    if(txt.current.value==="")
    setWarn(true);
    else
    {
        try{
          const text=String(txt.current.value);
          const senderId=String(blogpage[0]?._id);
          const receiverId=String(receiver?._id)
          const conversationId=String((senderId>receiverId)?(senderId+receiverId):(receiverId+senderId));
          await fetch("/api/message",{
            method:"POST",
            body:JSON.stringify({
                text,
                senderId,
                conversationId,  
            }),
          }); 
        }
        catch(err){
          console.log(err)
        }
        setOpen(false);
    }
   
  }
    return (
        <div className="z-40 text-white absolute h-[400px] flex gap-5 top-40 rounded-md left-[450px] ">
            <div className=''>
                <Image className='shadow-slate-100 shadow-2xl h-[60px] w-[60px] rounded-sm' src={blogpage[0]?.profilePicture?blogpage[0]?.profilePicture:"/pyramid_closed_96.png"} height={1000} width={1000} alt=''></Image>
            </div>
            <div className='bg-[#272424] w-[500px] shadow-slate-100 shadow-2xl flex flex-col h-full'>
                <div className='text-sm font-semibold h-[40px] px-5 flex items-center'>{blogpage[0]?.displayName}</div>
                <form className="h-full w-full flex flex-col justify-between" method="post" onSubmit={handleOnSubmit}>
                    <div className='flex flex-col justify-between px-5'>
                        <div className='flex'>
                            <input ref={txt} className='w-full outline-none  bg-transparent' placeholder='Send a message...'></input>
                        </div>
                        {warn&&<p className='flex justify-end text-xs text-red-500'>*Please write something to send message</p>}
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
export default SendMessageModal;
import React from 'react'

const Theme = ({t,setTheme,theme}) => {
  return (
    <div onClick={()=>{setTheme(t.n)}} className={`h-[300px] themet${t.id} cursor-pointer py-2 w-[49%] bg-black flex justify-center ${t.n===theme&&"border-white border-[2px] "} rounded-md`}>
        <div className={`bgt1 w-[80%] flex justify-center py-2 rounded-md`}>
            <div className='w-[90%] flex justify-center gap-1.5 '>
                <div className={`bgt2 w-[60%] rounded-md`}>
                    <div className='relative h-[50px] border-b-[1px] border-white'></div>
                    <div className='relative -top-2.5 left-[42%] h-[20px] w-[20px] rounded-full bg-white'></div>
                    <div className='w-full flex flex-col items-center'>
                        <p className={`text-[10px] namet`}>name</p>
                        <p className={`text-[6px] displaynamet`}>@displayName</p>
                        <p className={`text-[8px] desct`}>desc</p>
                        <button className={`my-2 flex items-center justify-center rounded-md p-[2px] text-white text-[8px] h-[10px] buttonbgt`}>button</button>
                    </div>
                    <div>
                    <div className='h-[100px] px-1'>
                        <div className='bg-white text-black flex h-full justify-center items-center'>
                            Post
                        </div>
                    </div>
                    </div>
                </div>
                <div className={`bgt2 w-[40%] h-[35%] rounded-md items-center flex flex-col`}>
                <span className='flex gap-1'>-------<p className={`followt`}>-</p></span>
                <span className='flex gap-1'>-------<p className={`followt`}>-</p></span>
                <span className='flex gap-1'>-------<p className={`followt`}>-</p></span>
                <p className={`followt`}>------</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Theme
import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutModal = ({setOpen}) => {
  return (
    <div className='z-40 font-sans absolute flex justify-center -right-[200px] items-center -top-[60px] h-[100vh] bg-transparent/80 text-white w-screen'>
        <div className='flex flex-col justify-center gap-5 items-center'>
            <h2 className='font-semibold text-xl'>Are you sure you want to log out?</h2>
            <div className='flex justify-center gap-2 text-sm'>
                <button className='bg-pink-300 px-2 py-0.5 text-black rounded-md' onClick={signOut}>Ok</button>
                <button className='bg-yellow-300 px-1 py-0.5 text-black rounded-md' onClick={()=>{setOpen(false)}}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default LogoutModal
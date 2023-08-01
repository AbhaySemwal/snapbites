"use client"
import React, { useRef, useState,useEffect } from 'react'
import Link from 'next/link'
import { Home, Explore,Storefront,Email,EmojiEmotions,Search,Bolt,Person,Create} from '@mui/icons-material'
import { usePathname, useRouter } from 'next/navigation';
import StoreModal from '../modals/storemodal/StoreModal';
import ChatModal from '../modals/chatmodal/ChatModal';
import InfoModal from '../modals/infomodal/InfoModal';
import AccountModal from '../modals/accountmodal/AccountModal';
import NewPostModal from "../modals/newpostmodal/NewPostModal"

const Navbar = ({fixed}) => {

const [storeClicked,setStoreClicked]=useState(false);
const [botClicked,setBotClicked]=useState(false);
const [infoClicked,setInfoClicked]=useState(false);
const [accountClicked,setAccountClicked]=useState(false);
const [newClicked,setNewClicked]=useState(false);
const componentRef = useRef(null);
const componentRef1 = useRef(null);
const componentRef2 = useRef(null);
const componentRef3 = useRef(null);
const componentRef4 = useRef(null);
const handleClickOutside = (event) => {
  if (componentRef.current && !componentRef.current.contains(event.target)) {
    setStoreClicked(false);
  }
  if (componentRef1.current && !componentRef1.current.contains(event.target)) {
    setBotClicked(false);
  }
  if (componentRef2.current && !componentRef2.current.contains(event.target)) {
    setInfoClicked(false);
  }
  if (componentRef3.current && !componentRef3.current.contains(event.target)) {
    setAccountClicked(false);
  }
  if (componentRef4.current && !componentRef4.current.contains(event.target)) {
    setNewClicked(false);
  }
};
useEffect(() => {
  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, []);

useEffect(() => {
    document.body.style.overflow = newClicked ? "hidden" : "unset";
}, [newClicked]);

const path=usePathname();

  return (
    <nav className={`text-white z-40 w-full flex h-[55px] px-5 items-center justify-between font-montserrat border-gray-800 border-b-[1px] ${fixed?"fixed top-0 bg-black" :""}`}>
        <div className='w-[50%] flex items-center gap-5'>
            <Link href="/" ><p className="font-bold hover:-rotate-12 text-red-400 hover:text-blue-400 cursor-pointer transition delay-100 ease-in-out hover:transform text-3xl">SB</p></Link>
            <div className='flex h-[35px] bg-[#514949] items-center w-[60%] px-2 rounded-md gap-1'>
                <span className='text-gray-300 flex transform scale-[1.10]'><Search/></span>
                <input className='font-sans w-full bg-[#514949] outline-none  text-sm font-normal placeholder-gray-300' placeholder='Search SnapBites...'></input>
            </div>
        </div>  
        <div className='w-[50%] gap-8 flex items-center justify-end text-gray-500 '>

            <Link href="/" className={`${("/"===path||"/dashboard"===path.substring(0,10))&&"text-white"} transform scale-[1.20]`}><Home/></Link>
            <Link href="/explore/today" className={`${"/explore"===path.substring(0,8)&&"text-white"} transform scale-[1.20]`}><Explore/></Link>
            <div ref={componentRef} className={`${storeClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
                <Storefront onClick={()=>{setStoreClicked(!storeClicked)}}/>
                {storeClicked&&<StoreModal/>}
            </div>
            <Link href="/inbox" className={`${"/inbox"===path&&"text-white"} transform scale-[1.20]`}><Email/></Link>
            <div ref={componentRef1}  className={`${botClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
                <EmojiEmotions onClick={()=>{setBotClicked(!botClicked)}}/>
                {botClicked&&<ChatModal/>}
            </div>
            <div ref={componentRef2} className={`${infoClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
                <Bolt onClick={()=>{setInfoClicked(!infoClicked)}}/>
                {infoClicked&&<InfoModal/>}
            </div>
            <div ref={componentRef3} className={`${accountClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
                <Person onClick={()=>{setAccountClicked(!accountClicked)}} />
                {accountClicked&&<AccountModal />}
            </div>
            <div ref={componentRef4} className={`cursor-pointer transform scale-[1.20] text-black px-2 py-0.5 bg-blue-400 rounded-md`}>
                {/* <Link href='/new'> */}
                <Create onClick={()=>{setNewClicked(!newClicked)}} />
                {newClicked&&<NewPostModal setNewClicked={setNewClicked}/>}
                {/* </Link> */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
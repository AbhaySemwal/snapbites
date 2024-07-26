"use client"
import React, { useRef, useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Home, Explore, Storefront, Email, EmojiEmotions, Search, Bolt, Person, Create, Menu } from '@mui/icons-material'
import { usePathname } from 'next/navigation';
import StoreModal from '../modals/storemodal/StoreModal';
import ChatModal from '../modals/chatmodal/ChatModal';
import InfoModal from '../modals/infomodal/InfoModal';
import AccountModal from '../modals/accountmodal/AccountModal';
import NewPostModal from "../modals/newpostmodal/NewPostModal"
import { BlogpageContext } from '@/context/BlogpageContext';
import Image from 'next/image';

const Navbar = ({fixed}) => {
  const [storeClicked, setStoreClicked] = useState(false);
  const [botClicked, setBotClicked] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);
  const [accountClicked, setAccountClicked] = useState(false);
  const [newClicked, setNewClicked] = useState(false);
  const [suggestionClicked, setSuggestionClicked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const componentRef = useRef(null);
  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);
  const componentRef5 = useRef(null);
  const blogpage = useContext(BlogpageContext).blogpage[0];

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
  if (componentRef5.current && !componentRef5.current.contains(event.target)) {
    setSuggestionClicked(false);
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
const [page,setPage]=useState([]);
useEffect(()=>{
  const getPages=async()=>{
    const res=await fetch("/api/blogpage",{
  cache:"no-store",
  });
  if(!res.ok)
  throw new Error("Failed to fetch data");
  const x=await res.json();
  setPage(x);
  }
  getPages();
},[])
const [suggestion,setSuggestion]=useState([]);
const handleSearch=(e)=>{
  setSuggestionClicked(true)
  const text=e.target.value;
  if(text==="")
  setSuggestion([]);
  else{
    setSuggestion(page.filter(i=>{
      const x=(i.displayName).toLowerCase();
      const y=(i.name).toLowerCase();
      const txt=text.toLowerCase();
      return x.includes(txt)||y.includes(txt);
    }))
  }
}
const toggleMobileMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
}
  return (
    <nav className={`text-white z-40 w-full flex flex-col md:flex-row h-auto md:h-[55px] px-5 items-center justify-between font-montserrat border-gray-800 border-b-[1px] ${fixed ? "fixed top-0 bg-black" : ""}`}>
    <div className='w-full md:w-[50%] flex items-center justify-between md:justify-start gap-5 py-3 md:py-0'>
      <Link href="/" ><p className="font-bold hover:-rotate-12 text-gray-200 hover:text-blue-400 cursor-pointer transition delay-100 ease-in-out hover:transform text-3xl">SB</p></Link>
      <div className='md:hidden cursor-pointer' onClick={toggleMobileMenu}>
        <Menu />
      </div>
      <div className='hidden md:flex h-[35px] bg-[#393333] items-center w-[60%] px-2 rounded-md gap-1'>
        <span className='text-gray-300 flex transform scale-[1.10]'><Search/></span>
        <input onChange={handleSearch} className='font-sans w-full bg-[#393333] outline-none  text-sm font-normal placeholder-gray-300' placeholder='Search SnapBites...'></input>
        {suggestion[0] && suggestionClicked && 
          <div ref={componentRef5} className='absolute top-16 py-2 max-h-[400px] overflow-y-scroll w-[500px] bg-[#393333]'>
                      {suggestion.map((s)=>(
                        <Link href={"/"+s?.displayName} key={s._id} className='flex flex-col p-2 hover:bg-[#544b4b]'>
                          <div className='flex gap-2 items-center'>
                            <Image className='h-[50px] w-[50px] rounded-md' height={100} width={100} src={s?.profilePicture}></Image>
                            <div className='flex flex-col gap-0.5'>
                              <h2 className='font-semibold'>{s?.displayName}</h2>
                              <h2 className='font-normal text-sm text-gray-300'>{s?.name}</h2>
                            </div>
                          </div>
                        </Link>
                      ))}
                </div>}
            </div>
        </div>  
        <div className={`w-full md:w-[50%] gap-8 ${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center justify-center md:justify-end text-gray-400 py-3 md:py-0`}>
        <Link href="/" className={`${("/"===path||"/dashboard"===path.substring(0,10))&&"text-white"} transform scale-[1.20]`}><Home/></Link>
        <Link href="/explore/today" className={`${"/explore"===path.substring(0,8)&&"text-white"} transform scale-[1.20]`}><Explore/></Link>
        <div ref={componentRef} className={`${storeClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
          <Storefront onClick={()=>{setStoreClicked(!storeClicked)}}/>
          {storeClicked&&<StoreModal/>}
        </div>
        <Link href="/inbox" className={`${"/inbox"===path&&"text-white"} transform scale-[1.20]`}><Email/></Link>
        <div ref={componentRef1}  className={`${botClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
          <EmojiEmotions onClick={()=>{setBotClicked(!botClicked)}}/>
          {botClicked&&<ChatModal blogpage={blogpage}/>}
        </div>
        <div ref={componentRef2} className={`${infoClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
          <Bolt onClick={()=>{setInfoClicked(!infoClicked)}}/>
          {infoClicked&&<InfoModal blogpage={blogpage}/>}
        </div>
        <div ref={componentRef3} className={`${accountClicked&&"text-white"} transform scale-[1.20] cursor-pointer`}>
          <Person onClick={()=>{setAccountClicked(!accountClicked)}} />
          {accountClicked&&<AccountModal blogpage={blogpage} />}
        </div>
        <div ref={componentRef4} className={`cursor-pointer text-black px-2 py-0.5 bg-blue-400 rounded-md`}>
          <Create onClick={()=>{setNewClicked(!newClicked)}} />
          {newClicked&&<NewPostModal setNewClicked={setNewClicked}/>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
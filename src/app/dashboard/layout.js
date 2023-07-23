"use client"
import CreatePost from "@/components/createPost/CreatePost";
import Rightbar from "@/components/rightbar/Rightbar";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

export default function Home({children}) {
  const pathname=usePathname();
  return (
    <>
      <Navbar/>
      <div className="font-sans text-white mt-10 flex gap-8">
        <div className="w-[60%] flex flex-col items-end">
          <CreatePost/>
          <div className='font-sans w-[61%] flex border-gray-800 border-b-[1px] font-semibold text-lg mb-5'>
              <Link className={`h-12 flex items-center ${(pathname==="/"||pathname==="/dashboard/foryou") ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/dashboard/foryou"><span className='px-5  '>For you</span></Link>
              <Link className={`h-12 flex items-center ${pathname==="/dashboard/following" ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/dashboard/following"><span className='px-5'>Following</span></Link>
              <Link className={`h-12 flex items-center ${pathname==="/dashboard/yourtags" ? "border-blue-400 border-solid  text-blue-400 border-b-2":"hover:bg-[#272424]"}`} href="/dashboard/yourtags"><span className='px-5'>Your tags</span></Link>
          </div>
          {children}
        </div>
        <Rightbar/>
      </div>
    </>
  )
}

"use client"
import CreatePost from "@/components/createPost/CreatePost";
import Feed from "@/components/feed/Feed";
import Navbar from "@/components/navbar/Navbar";
import Rightbar from "@/components/rightbar/Rightbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const session=useSession();
  const router=useRouter();
  if(session.status==="unauthenticated")
  router?.push("/login")
  return (
    <>
    <Navbar/>
    <div className="text-white mt-10 flex gap-8">
      <div className="w-[60%] flex flex-col items-end">
        <CreatePost/>
        <Feed/>
      </div>
      <Rightbar/>
    </div>
    </>
  )
}

export default Home;
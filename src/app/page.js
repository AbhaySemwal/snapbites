import CreatePost from "@/components/createPost/CreatePost";
import Feed from "@/components/feed/Feed";
import Navbar from "@/components/navbar/Navbar";
import Rightbar from "@/components/rightbar/Rightbar";
import React from "react";

export default function Home() {
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

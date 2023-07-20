import CreatePost from "@/components/createPost/CreatePost";
import Feed from "@/components/feed/Feed";
import Rightbar from "@/components/rightbar/Rightbar";
import React from "react";

export default function Home() {
  return (
    <div className="text-white flex gap-8">
      <div className="w-[60%] flex flex-col items-end">
        <CreatePost/>
        <Feed/>
      </div>
      <Rightbar/>
    </div>
  )
}

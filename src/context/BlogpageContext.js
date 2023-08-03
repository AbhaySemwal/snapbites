"use client"
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const BlogpageContext=createContext();

const BlogpageContextProvider=({children})=>{
    const [blogpage,setBlogpage]=useState([]);
    const session=useSession();
  useEffect(()=>{
   const getData=async()=>{
    const res=await fetch(`http://localhost:3000/api/blogpage?name=${session.data?.user.name}`,{
    // next:{revalidate:10}
    cache:"no-store",
    });
    if(!res.ok)
    throw new Error("Failed to fetch data");
    const x=await res.json();
    setBlogpage(x);
   }
   getData();
  },[session?.data?.user]);
  
    return(
    <BlogpageContext.Provider value={{blogpage}}>
        {children}
    </BlogpageContext.Provider>
    );
};

export default BlogpageContextProvider;
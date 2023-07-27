"use client"
import { CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Auth = () => {
    const session=useSession();
    const router=useRouter();
    if(session.status==="unauthenticated")
    router?.push("/login")
    if(session.status==="authenticated")
    {
      const sign=async()=>{
        const name=session.data?.user.name;
        const email=session.data?.user.email;
        const displayName=(name.replaceAll(' ','')).toLowerCase();
        try{
          const r=await fetch("/api/blogpage",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              name,email,displayName,
            })
          });
          r.status
        }catch(err){
          setErr(true);
        }  
      }
       sign();
      router?.push("/");
    }
  return (
    <div className="text-white h-screen w-screen flex flex-col gap-4 items-center justify-center"><p>Loading</p><CircularProgress/></div>
  )
}

export default Auth
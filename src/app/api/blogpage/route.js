import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blogpage from "@/models/Blogpage";

export const POST =async(request)=>{
    const {name,email,displayName}=await request.json();
    await connect();
    const newBlogPage=new Blogpage({
        name,
        email,
        displayName,
    })

    try{
       await newBlogPage.save();
       return new NextResponse("Blogpage has been created",{
        status:201. 
       })
    }catch(err){
        return new NextResponse(err.message,{
            status:500,
        })
    }
}

export const GET = async (request) => {
    const url = new URL(request.url);
  
    const name = url.searchParams.get("name");
    if(name)
    {
        try {
          await connect();
      
          const blogpage = await Blogpage.find(name && { name });
      
          return new NextResponse(JSON.stringify(blogpage), { status: 200 });
        } catch (err) {
          return new NextResponse("Database Error", { status: 500 });
        }
    }
    else
    {
        const displayName = url.searchParams.get("displayName");
        try {
            await connect();
        
            const blogpage = await Blogpage.find(displayName && { displayName });
        
            return new NextResponse(JSON.stringify(blogpage), { status: 200 });
          } catch (err) {
            return new NextResponse("Database Error", { status: 500 });
          }
    }
};


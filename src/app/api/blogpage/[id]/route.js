import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blogpage from "@/models/Blogpage";

export const PUT =async(request,{params})=>{
    const {theme,coverPicture,profilePicture,desc}=await request.json()
    const post = await Blogpage.findById(params.id);
    try{
        await connect();
        await post.updateOne( {desc:desc, coverPicture:coverPicture,profilePicture:profilePicture,theme:theme} );
        return new NextResponse("Profile updated",{status:201});
    }catch(err)
    {
        return new NextResponse("Database error",{status:500});
    }
  }

  export const GET = async (request,{params}) => {
    try {
      await connect();
  
      const blogpage = await Blogpage.findById(params.id);
  
      return new NextResponse(JSON.stringify(blogpage), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
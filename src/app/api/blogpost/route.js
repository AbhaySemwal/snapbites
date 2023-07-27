import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Blogpost from "@/models/Blogpost"

export const GET = async (request) => {
    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    try {
      await connect();
  
      const blogposts = await Blogpost.find(name && { name });
  
      return new NextResponse(JSON.stringify(blogposts), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
export const POST = async(request)=>{
    const body=await request.json()
    const newblogPost =new Blogpost(body);
    try{
        await connect();
        await newblogPost.save();
        return new NextResponse("Post has been created",{status:201});
    }catch(err)
    {
        return new NextResponse("Database error",{status:500});
    }
}

import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Blogpost from "@/models/Blogpost"

export const PUT =async(request,{params})=>{
    const {displayName,profilePicture,text,userId}=await request.json()
    const post = await Blogpost.findById(params.id);
    try{
        await connect();
        await post.updateOne({ $push: { comments:[{userId:userId,displayName:displayName,profilePicture:profilePicture,text:text}] } });
        return new NextResponse("Comment has been added",{status:201});
    }catch(err)
    {
        return new NextResponse("Database error",{status:500});
    }
}

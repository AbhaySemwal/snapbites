import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blogpost from "@/models/Blogpost";

export const PUT =async(request,{params})=>{
    const {_id,displayName,profilePicture}=await request.json();
    await connect();
  
    try{
        const post=await Blogpost.findById(params.id);
        var f=0;
        post.likes.forEach(element => {
            if(element._id===_id)
            f=1;
        });
        if(!f)
        {   
            await post.updateOne({$push:{likes:{_id,displayName,profilePicture}}});
            res.status(200).json("Post has been liked")
        }
        else
        {
            await post.updateOne({$pull:{likes:{_id,displayName,profilePicture}}});
            return new NextResponse("Blogpage has been updated",{
                status:201. 
            })
        }
    }
    catch(err){
        return new NextResponse(err.message,{
            status:500,
        })
    }
  }
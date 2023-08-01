import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blogpost from "@/models/Blogpost";

export const PUT =async(request,{params})=>{
    const {id}=await request.json();
    await connect();
  
    try{
        const post=await Blogpost.findById(params.id);
        if(!post.likes.includes(id))
        {   
            await post.updateOne({$push:{likes:id}});
            res.status(200).json("Post has been liked")
        }
        else
        {
            await post.updateOne({$pull:{likes:id}});
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
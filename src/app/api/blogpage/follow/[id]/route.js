import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blogpage from "@/models/Blogpage";

export const PUT =async(request,{params})=>{
    const {id}=await request.json();
    await connect();
  
    if(id!==params.id)
    {
        try{
            const user = await Blogpage.findById(params.id);
            const currentUser = await Blogpage.findById(id);
            if (!user.followers.includes(id)) {
                await user.updateOne({ $push: { followers: id } });
                await currentUser.updateOne({ $push: { following: params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you already follow this user");
            }
           return new NextResponse("Blogpage has been updated",{
            status:201. 
           })
        }catch(err){
            return new NextResponse(err.message,{
                status:500,
            })
        }
    }
    else
    {
        return new NextResponse("You cannot follow your blogpage",{
        status:500, 
        });
    }
  }
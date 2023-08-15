import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Message from "@/models/Message"

export const POST = async(request)=>{
    const body=await request.json()
    const newMessage =new Message(body);
    try{
        await connect();
        await newMessage.save();
        return new NextResponse("Message has been sent",{status:201});
    }catch(err)
    {
        return new NextResponse("Database error",{status:500});
    }
}

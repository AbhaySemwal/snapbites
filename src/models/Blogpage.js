import mongoose from "mongoose";

const { Schema } = mongoose;

const blogPageSchema = new Schema(
  {
    name: {
      type:String,
      required: true,
    },
    email: {
      type:String,
      unique: true,
      required: true,
    },
    displayName: {
      type:String,
      unique: true,
      required:true,
    },
    profilePicture:{
        type:String,
        default:"/pyramid_closed_96.png",
    },
    coverPicture:{
        type:String,
        default:"/cropped-1920-1080-1314003.png",
    },
    followers:{
        type:Array,
        default:[]  
    },
    following:{
        type:Array,
        default:[]
    },
    desc:{
        type:String,
        max:50,
        default:""
    },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Blogpage", blogPageSchema);

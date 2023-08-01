import mongoose from "mongoose";

const { Schema } = mongoose;

const blogpostSchema = new Schema(
  {
    desc: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    displayName:{
      type:String,
      required:true,
    },
    userId:{
      type:String,
      required:true,
    },
    userProfile:{
      type:String,
      required:true,
    },
    likes:{
      type:Array,
      default:[]
    },
    comments:[
      {
        accountName:{
          type:String
        },
        userProfile:{
          type:String
        },
        text:{
          type:String
        }
      }
    ]
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Blogpost", blogpostSchema);

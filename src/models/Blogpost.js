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
    likes:[
        {
          _id:{
            type:String,
            unique:true,
            required:true
          },
          displayName:{
            type:String,
            unique:true,
            required:true
          },
          profilePicture:{
            type:String,
            unique:true,
            required:true
          },
        }
      ],
    comments:[
      {
        userId:{
          type:String,
          required:true
        },
        displayName:{
          type:String,
          required:true
        },
        profilePicture:{
          type:String,
          required:true
        },
        text:{
          type:String,
          required:true
        }
      },
    ],
    
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Blogpost", blogpostSchema);

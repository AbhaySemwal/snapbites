import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    conversationId:
    {
      type:String,
      required:true,
    },
    senderId:{
        type:String,
        required:true,
    },
    text:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Message", messageSchema);

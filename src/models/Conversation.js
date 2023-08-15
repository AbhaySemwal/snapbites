import mongoose from "mongoose";

const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    members:{
        type:Array,
        required:true,
    }
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Conversation", conversationSchema);

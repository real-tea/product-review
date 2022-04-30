import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types; 
const review = new mongoose.Schema({
    productId : {
        type : Number,
        requird : true
    }, 
    review : {
        type : String,
        required : true
    },
    user : {
        type : ObjectId,
        ref: "user"
    }
})

export default mongoose.model("review",review);
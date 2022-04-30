import mongoose from "mongoose";
const user = new mongoose.Schema({
    name : {
        firstName : {
            type : String,
            required : true,
        },
        SecondName : {
            type : String,
            required:true
        },
    },
    imageUrl : {
        type : String,
        required : true,
    }
},{timestamps : true}
);

export default mongoose.model("user",user);
import mongoose from 'mongoose';

const URL = "mongodb+srv://Akash:akash@0707@cluster0.w1wyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

function db() {
    mongoose.connect(URL,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });

    mongoose.connection.on("connected",()=>{
        console.log("Connected");
    })

    mongoose.connection.on("error",(error)=>{
        console.log(error);
    })
}

export default db;
import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 10000
        })
        console.log("db connect");
    }catch(error){
        console.error(`db error: ${error.message}`)
        throw error
    }
}

export default connectDb
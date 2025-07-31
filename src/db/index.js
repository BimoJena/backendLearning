import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() =>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MongoDB connected !!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Failed ",error);
        // throw error; //this is also valid
        process.exit(1);
    }
}


export default connectDB;
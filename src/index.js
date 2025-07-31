// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();








/*
import express from "express"
const app = express();

// ()() iffee concept function (functionlikha)(turant execute ho gya)

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error",(error)=>{
            console.log("application is unable to connect with DB", error);
            throw error; 
        })

        app.listen(process.env.PORT, ()=>{
            console.log("app is running at port: ", process.env.PORT);
        })
    } catch (error) {
        console.error("ERROR ",error);
        throw error;
    }
})()

*/
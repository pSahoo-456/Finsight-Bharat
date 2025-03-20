import mongoose from "mongoose";
// import { ENV_VARS } from "./envVars";
 import { ENV_VARS } from "./envVar.js";

export const connectDB = async () => {
    try {
        console.log("Heyyy")
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log('mongoDb Connected to -->', conn.connection.host)
    } catch (err) {
        console.log('Error Message -->', err.message)
        process.exit(1)// 1 means there was an error , 0 means success
    }
}

import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
// const uri =  'mongodb://localhost:27017/Scissor_App'

const uri = 'mongodb://localhost:27017/Scissor_App'
// const Uri = MongoDB_URI;

 export const connectDB = async (): Promise<typeof mongoose> => {
    try {
        const connection = await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};
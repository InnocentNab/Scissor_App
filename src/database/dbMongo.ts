import mongoose from "mongoose";
const uri = 'mongodb://localhost:27017/Scissor_App'
// const uri = process.env.MongoDB_URI;

export const connectDB = async (): Promise<typeof mongoose> => {
    try {
        const connection = await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
        return connection;
    } catch (error: any) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
};




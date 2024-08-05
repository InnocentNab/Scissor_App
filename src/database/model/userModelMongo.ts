import mongoose from "mongoose";

 interface IUser {
    email: string;
    password: string;
    updatedAt?: Date;
  }

const userSchema =new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
})

const User = mongoose.model('User', userSchema);
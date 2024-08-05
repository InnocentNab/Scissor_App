import mongoose from "mongoose";
interface IUrl {
    originalUrl: string;
    shortUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  const urlSchema =new mongoose.Schema<IUrl>({
    originalUrl: {
        type: String,
        required: true,
        trim: true,
      },
      shortUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
  })

  
const Url = mongoose.model('Url', urlSchema);
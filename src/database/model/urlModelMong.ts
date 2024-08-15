import mongoose from "mongoose";
interface IUrl {
  originalUrl: string;
  shortUrl: string;
  alias: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const shortUrlSchema = new mongoose.Schema<IUrl>({
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
    sparse: true
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


const Url = mongoose.model<IUrl>('Url', shortUrlSchema);
export default Url
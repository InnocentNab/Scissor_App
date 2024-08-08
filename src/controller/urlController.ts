import { nanoid } from "nanoid";
import Url from "../database/model/urlModelMong.ts"
export const shortUrl = async (req: any, res: any) => {
    const { originalUrl } = req.body;

    // if (!originalUrl) {
    //     return res.status(400).json({ message: 'Original URL is required' });
    // }

    // const shortId = nanoid(8);
    // console.log(shortId)
    // const newUrl = new URL({ originalUrl, shortId });

    // try {
    //     await newUrl.save();
    //     res.status(201).json({ shortId });
    // } catch (error) {
    //     res.status(500).json({ message: 'Error creating shortened URL', error });
    // }
}
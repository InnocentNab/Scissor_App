import Url from "../database/model/urlModelMong.ts"
import client from "../integration/redis.ts"
export const shortenUrl = async (req: any, res: any) => {

    const { originalUrl, shortUrl } = (req.body)
    if (!originalUrl) {
        throw new Error("Url must be provided")
    }
    try {
        let verified_alias: string = "";
        if (shortUrl) {
            const existingUrl = await Url.findOne({ shortUrl })
            if (existingUrl) {
                throw new Error("Alias already exists");
            }
            verified_alias = shortUrl
        } else {
            const getCustomUrl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'z', 'y', 'x', 'w', 's', 'r', 'q', 'p', 'o', 'n', 'm']
            let custom_url = ''
            for (let i = 0; i < 5; i++) {
                custom_url += getCustomUrl[Math.floor(Math.random() * getCustomUrl.length)];
            }
            verified_alias = custom_url
            console.log(verified_alias, originalUrl);
        }
        if (!verified_alias) {
            throw new Error("Failed to generate a valid short URL alias");
        }

        const newUrl = new Url({ shortUrl: verified_alias, originalUrl });
        await newUrl.save()
        res.status(200).send(newUrl)


    } catch (error: any) {
        res.status(500).send(error.message)
    }
}




export const getAllUrl = async (req: any, res: any) => {
    const cachekey = "/URL";
    const data = await client.get(cachekey);
    if (data) {
        console.log("returning links from cache");
        return res.status(200).send({
            data: JSON.parse(data),
            error: false,
        });
    }
    console.log("returning data from database");
    const links = await Url.find({});
    // set cache
    await client.setEx(cachekey, 10 * 60, JSON.stringify(links));
    res.status(200).send({
        AllPost: links,
    });
}
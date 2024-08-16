import { createClient } from "redis";
import dotenv from "dotenv"
dotenv.config()
const client = createClient({
  url: process.env.redisUri
});

client.on("connect", () => {
  console.log("connected to redis server successfully");
});

client.on("error", (error: any) => {
  console.log("Error " + error);
});
client.on('disconnect', (error: any) => {
  console.log("Error " + error)
})
export default client;

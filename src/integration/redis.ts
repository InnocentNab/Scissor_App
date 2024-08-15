import { createClient } from "redis";
const client = createClient({
  url: 'redis://127.0.0.1:6379',
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

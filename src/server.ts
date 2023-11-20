import app from "./app/app";
import http from "http";
import mongoose from "mongoose";
import config from "./app/config";
const server = http.createServer(app);
const PORT = config.port || 4000;

async function main(uri: string): Promise<void> {
  await mongoose.connect(uri);
  server.listen(PORT, () => {
    console.log(`Server listening port is ${PORT}`);
  });
}

main(config.databaseURI as string).catch((err: Error) => {
  console.log(err.message);
});

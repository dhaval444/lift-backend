import { connect } from "mongoose";
import { config } from "../config/index.js";

const connectMongoDb = async () => {
  try {
    if (!config.DB_URL) throw new Error("mongoDbUrl not found");
    await connect(config.DB_URL);
    console.log("mongoDb Connected !");
  } catch (error) {
    console.log("[DB] mongoDb couldn't connect : " + error.message);
  }
};

export { connectMongoDb };

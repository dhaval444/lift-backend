import express from "express";
import { connectMongoDb } from "./database/index.js";
import cors from "cors";
import dotenv from "dotenv";
import { LiftTravesalRoutes } from "./routes/index.js";

dotenv.config();
connectMongoDb();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(LiftTravesalRoutes);
app.get("/test", (req, res) => {
  res.send("test 🏓");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

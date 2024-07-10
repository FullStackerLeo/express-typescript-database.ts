// url = https://github.com/changchup/lightci-assess.git
import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";

dotenv.config();

const app: Express = express();
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/", apiRoutes);  // Mounting API routes

const port = process.env.PORT||3001;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// url = https://github.com/changchup/lightci-assess.git
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { database } from "./db";

dotenv.config();

const app: Express = express();
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.json(database);
});


const port = process.env.PORT||3001;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

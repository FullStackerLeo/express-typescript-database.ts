import express from "express";
import hotelRoutes from "./routes/hotel.routes";

const app = express();

app.use(express.json())
app.use("/", hotelRoutes);  // Mounting API routes

const port = process.env.PORT||3001;
app.listen(port, () => {console.log(`⚡️[server]: Server is running at http://localhost:${port}`);});























// url = https://github.com/changchup/lightci-assess.git
// import bodyParser from "body-parser";
// app.use(bodyParser.json({ limit: "100mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// import dotenv from "dotenv";
// dotenv.config();

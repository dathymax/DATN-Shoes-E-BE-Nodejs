import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import compression from "compression";
import cookieParser from "cookie-parser";
import routers from "./routers";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log("Server is running on port 8000");
});

const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@shoes-e.ynjs1u7.mongodb.net`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => {
    console.log(error);
})

app.use("/api/v1", routers());

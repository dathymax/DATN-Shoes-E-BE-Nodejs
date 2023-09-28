import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import compression from "compression";
import cookieParser from "cookie-parser";
import routers from "./routers";
import mongoose from "mongoose";

const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials: true
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

const MONGO_URL = "mongodb+srv://nguyenvandat:nguyenvandat@shoes-e.ynjs1u7.mongodb.net";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => {
    console.log(error);
})

app.use("/api/v1", routers());

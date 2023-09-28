import crypto from "crypto";
import IUser from "models/user/IUser";
import fs from "fs";
import path from "path";
import JWT from "jsonwebtoken";

const SECRET = "JTADD-REST-API";

export const random = () => crypto.randomBytes(128).toString("base64");

export const authentication = (salt: string, password: string) => {
    return crypto.createHmac("sha256", [salt, password].join("/")).update(SECRET).digest("hex");
}
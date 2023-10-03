import { Document } from "mongoose";

export default interface IImages extends Document {
    fileName?: string;
    fileType?: string;
    fileSize?: number;
    filePath?: string;
}
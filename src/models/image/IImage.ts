import { Document } from "mongoose";

export default interface IImage extends Document {
    fileName?: string;
    fileType?: string;
    fileSize?: number;
    filePath?: string;
}
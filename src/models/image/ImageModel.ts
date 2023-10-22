import mongoose from "mongoose";
import IImage from "./IImage";

const ImageSchema = new mongoose.Schema<IImage>(
    {
        fileName: {
            type: String,
            required: true
        },
        fileType: {
            type: String,
            required: true
        },
        fileSize: {
            type: Number,
            required: true
        },
        filePath: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const ImageModel = mongoose.model("Image", ImageSchema);
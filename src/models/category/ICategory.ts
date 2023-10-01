import { Document } from "mongoose";

export default interface ICategory extends Document {
    name: string;
    description?: string;
    status?: string;
    thumbnail?: string;
}

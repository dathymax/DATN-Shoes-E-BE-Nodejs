import { Document } from "mongoose";

export default interface ISize extends Document {
    size?: number;
}

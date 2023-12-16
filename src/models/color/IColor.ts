import { Document } from "mongoose";

export default interface IColor extends Document {
    name?: string;
}

import { Document } from "mongoose";

export default interface IUser extends Document {
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
    phoneNumber?: string;
    address?: string;
    addressLabel?: string;
    country?: string;
    province?: string;
    district?: string;
    postalCode?: string;
    city?: string;
    avatar?: string;
    updatedAt?: Date | string;
}

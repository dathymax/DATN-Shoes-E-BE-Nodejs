import { Document } from "mongoose";

export interface IAuthentication {
    password?: string;
    salt?: string;
    sessionToken?: string;
}

export default interface IUser extends Document {
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    authentication?: IAuthentication;
    role?: string,
    phoneNumber?: string,
    address?: string,
    addressLabel?: string,
    country?: string,
    province?: string,
    district?: string,
    postalCode?: string,
    city?: string,
    avatar?: string
}

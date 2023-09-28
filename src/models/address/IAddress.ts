import { Document } from "mongoose";

export enum EAddressLabel {
    HOME = "home",
    OFFICE = "office"
}

export default interface IAddress extends Document {
    addressLabel?: EAddressLabel,
    country?: string,
    address?: string,
    province?: string,
    city?: string,
    district?: string,
    postalCode?: string
}
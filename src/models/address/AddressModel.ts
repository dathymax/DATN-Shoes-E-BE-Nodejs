import mongoose from "mongoose";
import IAddress from "./IAddress";

const AddressSchema = new mongoose.Schema<IAddress>({
    addressLabel: { type: String, required: false },
    address: { type: String, required: false },
    country: { type: String, required: false },
    city: { type: String, required: false },
    province: { type: String, required: false },
    district: { type: String, required: false },
    postalCode: { type: String, required: false },
})

export const AddressModel = mongoose.model("Address", AddressSchema);
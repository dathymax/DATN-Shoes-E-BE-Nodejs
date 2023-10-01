import mongoose from "mongoose";
import IAddressShipping from "./IAddressShipping";

const AddressShippingSchema = new mongoose.Schema<IAddressShipping>({
    addressLabel: { type: String, required: false },
    address: { type: String, required: false },
    country: { type: String, required: false },
    city: { type: String, required: false },
    province: { type: String, required: false },
    district: { type: String, required: false },
    postalCode: { type: String, required: false },
    userId: { type: String, required: false }
})

export const AddressShippingModel = mongoose.model("AddressShipping", AddressShippingSchema);
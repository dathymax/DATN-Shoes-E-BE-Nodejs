import mongoose from "mongoose";
import IPromoCode from "./IPromoCode";

const PromoCodeSchema = new mongoose.Schema<IPromoCode>({
    name: { type: String, required: true },
    discount: { type: Number, required: true },
    isExpired: { type: Boolean, required: false },
    spendTime: { type: Number, required: false },
    createDate: { type: Date, required: false },
    modifiedDate: { type: Date, required: false },
});

export const PromoCodeModel = mongoose.model("PromoCode", PromoCodeSchema);

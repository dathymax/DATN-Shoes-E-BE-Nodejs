import mongoose from "mongoose";
import IPromoCode from "./IPromoCode";

const PromoCodeSchema = new mongoose.Schema<IPromoCode>({
    name: { type: String, required: true },
});

export const PromoCodeModel = mongoose.model("PromoCode", PromoCodeSchema);

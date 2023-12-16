import { Document } from "mongoose";

export default interface IPromoCode extends Document {
    name: string;
    discount: number;
    spendTime?: number;
    isExpired?: boolean;
    createDate?: Date;
    modifiedDate?: Date;
}

import { countDays } from "../../helpers";
import IPromoCode from "../../models/promo-code/IPromoCode";

export const mapPromoCodes = (promoCodes: IPromoCode[]): IPromoCode[] => {
    return promoCodes.map((promoCode) => {
        const isExpired =
            countDays(new Date(promoCode.createDate), new Date()) -
                promoCode.spendTime ===
            0;
        return {
            ...promoCode.toObject(),
            isExpired,
        } as IPromoCode;
    });
};

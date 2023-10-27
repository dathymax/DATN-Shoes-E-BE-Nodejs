import IPromoCode from "../../models/promo-code/IPromoCode";
import IPromoCodeServices from "./IPromoCodeServices";
import { IResponseEntity } from "../../common/IResponseEntity";
import { PromoCodeModel } from "../../models/promo-code/PromoCodeModel";
import { mapPromoCodes } from "../../mapper/promo-code";

class PromoCodeServices implements IPromoCodeServices<IPromoCode> {
    getAll = async (): Promise<IResponseEntity<IPromoCode>> => {
        try {
            const promoCodes = await PromoCodeModel.find();

            const updatedPromoCodes = mapPromoCodes(promoCodes);

            return {
                data: updatedPromoCodes,
                status: 200,
                message: "Get all promo code success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all promo code failed!",
            };
        }
    };

    getById = async (id: string): Promise<IResponseEntity<IPromoCode>> => {
        try {
            const promoCode = await PromoCodeModel.findById(id);

            if (!promoCode) {
                return {
                    data: null,
                    status: 400,
                    message: "Get promo code by id failed!",
                };
            }

            return {
                data: promoCode,
                status: 200,
                message: "Get promo code by id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get promo code by id failed!",
            };
        }
    };

    getByUserId = async (
        userId: string
    ): Promise<IResponseEntity<IPromoCode>> => {
        try {
            const promoCode = await PromoCodeModel.find({ userId });

            return {
                data: promoCode,
                status: 200,
                message: "Get promo code by userId success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get promo code by userId failed!",
            };
        }
    };

    create = async (
        values: Record<string, any>
    ): Promise<IResponseEntity<IPromoCode>> => {
        try {
            const promoCode = new PromoCodeModel(values);

            promoCode.save();

            return {
                data: promoCode,
                status: 200,
                message: "Create promo code success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create promo code failed!",
            };
        }
    };

    update = async (
        id: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<IPromoCode>> => {
        try {
            const promoCode = await PromoCodeModel.findByIdAndUpdate(
                id,
                values,
                { new: true }
            );

            return {
                data: promoCode,
                status: 200,
                message: "Update promo code success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update promo code failed!",
            };
        }
    };

    delete = async (id: string): Promise<IResponseEntity<IPromoCode>> => {
        try {
            await PromoCodeModel.findByIdAndDelete({ _id: id });

            return {
                data: null,
                status: 200,
                message: "Delete promo code success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete promo code failed!",
            };
        }
    };
}

export default PromoCodeServices;

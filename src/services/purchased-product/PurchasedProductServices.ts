import IPurchasedProduct from "../../models/purchased-product/IPurchasedProduct";
import IPurchasedProductServices from "./IPurchasedProductServices";
import { IResponseEntity } from "../../common/IResponseEntity";
import { PurchasedProductModel } from "../../models/purchased-product/PurchasedProductModel";

class PurchasedProductServices
    implements IPurchasedProductServices<IPurchasedProduct>
{
    getAll = async (): Promise<IResponseEntity<IPurchasedProduct>> => {
        try {
            const products = await PurchasedProductModel.find();

            if (!products) {
                return {
                    data: null,
                    status: 400,
                    message: "Get all purchased product failed!",
                };
            }

            return {
                data: products,
                status: 200,
                message: "Get all purchased product success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all purchased product failed!",
            };
        }
    };

    getById = async (
        id: string
    ): Promise<IResponseEntity<IPurchasedProduct>> => {
        try {
            const product = await PurchasedProductModel.findById(id);

            if (!product) {
                return {
                    data: null,
                    status: 400,
                    message: "Get purchased product by id failed!",
                };
            }

            return {
                data: product,
                status: 200,
                message: "Get purchased product by id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get purchased product by id failed!",
            };
        }
    };

    getAllByTransactionId = async (
        transactionExt: string
    ): Promise<IResponseEntity<IPurchasedProduct>> => {
        try {
            const products = await PurchasedProductModel.findOne({
                transactionExt,
            });

            if (!products) {
                return {
                    data: null,
                    status: 400,
                    message: "Get by transaction failed!",
                };
            }

            return {
                data: products,
                status: 200,
                message: "Get by transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get by transaction failed!",
            };
        }
    };

    create = async (
        values: Record<string, any>
    ): Promise<IResponseEntity<IPurchasedProduct>> => {
        try {
            const product = new PurchasedProductModel(values);

            await product.save();

            return {
                data: product,
                status: 200,
                message: "Create purchase product success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create purchase product failed!",
            };
        }
    };

    update = async (
        id: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<IPurchasedProduct>> => {
        try {
            const product = await PurchasedProductModel.findByIdAndUpdate(
                id,
                values,
                { new: true }
            );

            return {
                data: product,
                status: 200,
                message: "Update purchase product success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update purchase product failed!",
            };
        }
    };

    deleteByTransactionExt = async (
        transactionExt: string
    ): Promise<IResponseEntity<IPurchasedProduct>> => {
        try {
            const deletedItems = await PurchasedProductModel.deleteMany({
                transactionExt,
            });

            console.log(deletedItems);

            return {
                data: null,
                status: 200,
                message: "Delete purchase product success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete purchase product failed!",
            };
        }
    };

    updateByTransactionExt = async (
        transactionExt: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<IPurchasedProduct>> => {
        try {
            const purchasedProduct =
                await PurchasedProductModel.findOneAndUpdate(
                    { transactionExt },
                    values,
                    { new: true }
                );

            return {
                data: purchasedProduct,
                status: 200,
                message: "Update purchased by transaction id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update purchased by transaction id failed!",
            };
        }
    };
}

export default PurchasedProductServices;

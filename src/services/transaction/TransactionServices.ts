import ITransaction from "../../models/transaction/ITransaction";
import ITransactionServices from "./ITransactionServices";
import { IResponseEntity } from "../../common/IResponseEntity";
import { TransactionModel } from "../../models/transaction/TransactionModel";
import IPurchasedProduct from "../../models/purchased-product/IPurchasedProduct";
import { PurchasedProductModel } from "../../models/purchased-product/PurchasedProductModel";
import { TransactionInstanceModel } from "../../models/transaction/TransactionInstanceModel";
import { ShoeModel } from "../../models/shoe/ShoeModel";

class TransactionServices implements ITransactionServices<ITransaction> {
    getAll = async (): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transactions = await TransactionModel.find().populate(
                "purchasedProducts"
            );

            if (!transactions) {
                return {
                    data: null,
                    status: 400,
                    message: "Get all transaction failed!",
                };
            }

            return {
                data: transactions,
                status: 200,
                message: "Get all transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all transaction failed!",
            };
        }
    };

    getAllByUserId = async (
        userId: string
    ): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transactions = await TransactionModel.find({
                userId,
            }).populate("purchasedProducts");

            if (!transactions) {
                return {
                    data: null,
                    status: 400,
                    message: "Get all transaction failed!",
                };
            }

            return {
                data: transactions,
                status: 200,
                message: "Get all transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all transaction failed!",
            };
        }
    };

    getAllReturnsTransaction = async (): Promise<
        IResponseEntity<ITransaction>
    > => {
        try {
            const transactions = await TransactionModel.find({
                status: "returns",
            }).populate("purchasedProducts");

            if (!transactions) {
                return {
                    data: null,
                    status: 400,
                    message: "Get all returns transaction failed!",
                };
            }

            return {
                data: transactions,
                status: 200,
                message: "Get all returns transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all transaction failed!",
            };
        }
    };

    getAllReturnsTransactionByUserId = async (
        userId: string
    ): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transactions = await TransactionModel.find({
                userId,
            }).populate("purchasedProducts");

            if (!transactions) {
                return {
                    data: null,
                    status: 400,
                    message: "Get all returns transaction failed!",
                };
            }

            return {
                data: transactions,
                status: 200,
                message: "Get all returns transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all transaction failed!",
            };
        }
    };

    getById = async (id: string): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transaction = await TransactionModel.findById(id).populate(
                "purchasedProducts"
            );

            if (!transaction) {
                return {
                    data: null,
                    status: 400,
                    message: "Get transaction failed!",
                };
            }

            return {
                data: transaction,
                status: 200,
                message: "Get transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get transaction failed!",
            };
        }
    };

    create = async (
        values: Record<string, any>,
        purchasedProducts: IPurchasedProduct[]
    ): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transaction = new TransactionModel(values);
            const transactionInstance = new TransactionInstanceModel(values);

            const savedTransaction = await transaction.save();
            const savedTransactionInstance = await transactionInstance.save();

            const savedPurchasedProduct =
                await PurchasedProductModel.insertMany(purchasedProducts);

            // const products = await ShoeModel.find();

            // purchasedProducts?.forEach((item1) => {
            //     const matchingItem2 = products.find(
            //         (item2) => item2._id === item1.productId
            //     );
            //     if (matchingItem2) {
            //         matchingItem2.quantity;
            //     }
            // });

            savedTransaction.purchasedProducts = savedPurchasedProduct.map(
                (product) => product?._id
            );
            savedTransactionInstance.purchasedProducts =
                savedPurchasedProduct.map((product) => product?._id);

            await savedTransaction.save();
            await savedTransactionInstance.save();

            return {
                data: savedTransaction,
                status: 200,
                message: "Get transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create transaction failed!",
            };
        }
    };

    update = async (
        id: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transaction = await TransactionModel.findByIdAndUpdate(
                id,
                values,
                { new: true }
            );

            return {
                data: transaction,
                status: 200,
                message: "Get transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update transaction failed!",
            };
        }
    };

    delete = async (id: string): Promise<IResponseEntity<ITransaction>> => {
        try {
            await TransactionModel.findByIdAndDelete({ _id: id });

            return {
                data: null,
                status: 200,
                message: "Delete transaction success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete transaction failed!",
            };
        }
    };
}

export default TransactionServices;

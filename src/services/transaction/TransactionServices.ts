import ITransaction from "models/transaction/ITransaction";
import ITransactionServices from "./ITransactionServices";
import { IResponseEntity } from "common/IResponseEntity";
import { TransactionModel } from "models/transaction/TransactionModel";

class TransactionServices implements ITransactionServices<ITransaction> {
    getAll = async (): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transactions = await TransactionModel.find();

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

    getById = async (id: string): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transaction = await TransactionModel.findById(id);

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
        values: Record<string, any>
    ): Promise<IResponseEntity<ITransaction>> => {
        try {
            const transaction = new TransactionModel(values);

            await transaction.save();

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
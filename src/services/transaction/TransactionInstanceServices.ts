import ITransactionInstance from "../../models/transaction/ITransaction";
import { IResponseEntity } from "../../common/IResponseEntity";
import ITransactionServices from "./ITransactionServices";
import { TransactionInstanceModel } from "../../models/transaction/TransactionInstanceModel";

class TransactionInstanceServices
    implements ITransactionServices<ITransactionInstance>
{
    getAll = async (): Promise<IResponseEntity<ITransactionInstance>> => {
        try {
            const transactions = await TransactionInstanceModel.find().populate(
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

    create = async (
        values: Record<string, any>
    ): Promise<IResponseEntity<ITransactionInstance>> => {
        try {
            const transaction = new TransactionInstanceModel(values);

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
}

export default TransactionInstanceServices;

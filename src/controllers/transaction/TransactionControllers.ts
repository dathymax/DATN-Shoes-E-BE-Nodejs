import { Request, Response } from "express";
import IPurchasedProduct from "models/purchased-product/IPurchasedProduct";
import PurchasedProductServices from "services/purchased-product/PurchasedProductServices";
import TransactionServices from "services/transaction/TransactionServices";

class TransactionControllers {
    _services: TransactionServices;
    _purchasedServices: PurchasedProductServices;

    constructor() {
        this._services = new TransactionServices();
        this._purchasedServices = new PurchasedProductServices();
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const transactions = await this._services.getAll();

            if (!transactions.data) {
                return res
                    .status(400)
                    .json({ message: "Get all transaction failed!" });
            }

            return res.status(200).json(transactions).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Get all transaction failed!" });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const transaction = await this._services.getById(id);

            if (!transaction.data) {
                return res
                    .status(400)
                    .json({ message: "Get transaction failed!" });
            }

            return res.status(200).json(transaction).end();
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Get transaction failed!" });
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const {
                transactionNumber,
                date,
                invoice,
                customerName,
                phoneNumber,
                status,
                receiptNumber,
                address,
                payment,
                purchasedProducts,
            } = req.body;

            const transaction = await this._services.create({
                transactionNumber,
                date,
                invoice,
                customerName,
                phoneNumber,
                status,
                receiptNumber,
                address,
                payment,
            });
            const products = await purchasedProducts.map(
                (purchasedProduct: IPurchasedProduct) =>
                    this._purchasedServices.create(purchasedProduct)
            );

            const response = {
                ...transaction,
                purchasedProducts: products,
            };

            return res.status(200).json(response).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Create transaction failed!" });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { id, transactionExt } = req.params;
            const {
                transactionNumber,
                date,
                invoice,
                customerName,
                phoneNumber,
                status,
                receiptNumber,
                address,
                payment,
                purchasedProducts,
            } = req.body;
            const transaction = await this._services.update(id, {
                transactionNumber,
                date,
                invoice,
                customerName,
                phoneNumber,
                status,
                receiptNumber,
                address,
                payment,
            });
            const products = await purchasedProducts.map(
                (purchasedProduct: IPurchasedProduct) =>
                    this._purchasedServices.updateByTransactionExt(
                        transactionExt,
                        purchasedProduct
                    )
            );

            const response = {
                ...transaction,
                purchasedProducts: products,
            };

            return res.status(200).json(response).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Update transaction failed!" });
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { id, transactionExt } = req.params;
            const deletedTransaction = await this._services.delete(id);
            await this._purchasedServices.deleteByTransactionExt(
                transactionExt
            );

            if (deletedTransaction.status !== 200) {
                return res
                    .status(400)
                    .json({ message: "Delete transaction failed!" });
            }

            return res
                .status(200)
                .json({ message: "Delete transaction success!" })
                .end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Delete transaction failed!" });
        }
    };
}

export default TransactionControllers;

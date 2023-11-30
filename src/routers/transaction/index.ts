import TransactionControllers from "../../controllers/transaction/TransactionControllers";
import { Router } from "express";
import { checkAuthentication } from "../../middlewares";

const transactionControllers = new TransactionControllers();

export default (router: Router) => {
    router.get(
        "/transactions",
        checkAuthentication,
        transactionControllers.getAll
    );
    router.get(
        "/transactions/returns",
        checkAuthentication,
        transactionControllers.getAllReturnsTransaction
    );
    router.get(
        "/transactions/:id",
        checkAuthentication,
        transactionControllers.getById
    );
    router.get(
        "/transactions",
        checkAuthentication,
        transactionControllers.create
    );
    router.post("/transactions", checkAuthentication, transactionControllers.create)
    router.patch(
        "/transactions/:id/:extCode",
        checkAuthentication,
        transactionControllers.update
    );
    router.patch("/transactions/:id", checkAuthentication, transactionControllers.updateById);
    router.delete(
        "/transactions/:id/:extCode",
        checkAuthentication,
        transactionControllers.delete
    );
    router.get("/transactions/:userId", checkAuthentication, transactionControllers.getAllByUserId);
    router.get("/transactions/returns/:userId", checkAuthentication, transactionControllers.getAllReturnsTransactionByUserId);
};

import TransactionControllers from "controllers/transaction/TransactionControllers";
import { Router } from "express";
import { checkAuthentication } from "middlewares";

const transactionControllers = new TransactionControllers();

export default (router: Router) => {
    router.get(
        "/transactions",
        checkAuthentication,
        transactionControllers.getAll
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
    router.patch(
        "/transactions/:id/:transactionExt",
        checkAuthentication,
        transactionControllers.update
    );
    router.delete(
        "/transaction/:id/:transactionExt",
        checkAuthentication,
        transactionControllers.delete
    );
};
import { isAuthenticated } from "../../middlewares";
import AddressControllers from "../../controllers/address/AddressControllers";
import { Router } from "express";

const addressControllers = new AddressControllers();

export default (router: Router) => {
    router.get("/addresses", isAuthenticated, addressControllers.getAllAddress);
}
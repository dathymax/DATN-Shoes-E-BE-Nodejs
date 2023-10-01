import AddressShippingControllers from "../../controllers/address-shipping/AddressShippingControllers";
import { Router } from "express";
import { checkAuthentication } from "../../middlewares";

const addressShippingControllers = new AddressShippingControllers();

export default (router: Router) => {
    router.post("/address-shipping", checkAuthentication, addressShippingControllers.createAddressShipping);
    router.get("/address-shipping/:userId", addressShippingControllers.getAddressByUserId);
    router.get("/address-shipping/:id", addressShippingControllers.getAddressById);
    router.patch("/address-shipping/:id", addressShippingControllers.updateAddressShippingById);
    router.delete("/address-shipping/:id", addressShippingControllers.deleteAddressShippingById);
}
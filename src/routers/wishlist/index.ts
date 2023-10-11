import WishlistControllers from "../../controllers/wishlist/WishlistControllers";
import { Router } from "express";
import { checkAuthentication } from "../../middlewares";

const wishlistController = new WishlistControllers();

export default (router: Router) => {
    router.get("/wishlist/:userId", checkAuthentication, wishlistController.getWishlistShoeByUserId);
    router.post("/wishlist", checkAuthentication, wishlistController.addWishlistByUserId);
    router.delete("/wishlist/:shoeId", checkAuthentication, wishlistController.deleteWishlistShoeByShoeId)
}
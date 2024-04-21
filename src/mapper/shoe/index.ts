import { IWishlistShoe } from "../../models/user/IUser";
import { countDays } from "../../helpers";
import IShoe from "../../models/shoe/IShoe";

export const mapShoesToUpdated = (shoes: IShoe[]): IShoe[] => {
    return shoes.map((shoe) => {
        const isNew = countDays(new Date(shoe.createDate), new Date()) <= 4;
        const isSoldOut = shoe.quantity === 0;
        return { ...shoe.toObject(), isNew, isSoldOut } as IShoe;
    });
};

export const mapWishlistShoesToUpdated = (
    shoes: IWishlistShoe[]
): IWishlistShoe[] => {
    return shoes.map((shoe) => {
        const isNew = countDays(new Date(shoe.createDate), new Date()) <= 4;
        return { ...shoe.toObject(), isNew } as IWishlistShoe;
    });
};

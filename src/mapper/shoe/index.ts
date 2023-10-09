import { countDays } from "../../helpers";
import IShoe from "../../models/shoe/IShoe";

export const shoeMapper = (shoe: IShoe) => {
    return {
        _id: shoe._id,
        name: shoe.name,
        rate: shoe.rate,
        shoeType: shoe.shoeType,
        color: shoe.color,
        size: shoe.size,
        price: shoe.price,
        description: shoe.description,
        category: shoe.category,
        status: shoe.status,
        discountType: shoe.discountType,
        setDiscount: shoe.setDiscount,
        images: shoe.images,
        createDate: shoe.createDate,
    }
}

export const mapShoesToUpdated = (shoes: IShoe[]): IShoe[] => {
    return shoes.map(shoe => {
        const isNew = countDays(new Date(shoe.createDate), new Date()) <= 5;
        return { ...shoe.toObject(), isNew } as IShoe;
    });
};
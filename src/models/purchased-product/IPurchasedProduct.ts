export default interface IPurchasedProduct {
    name?: string;
    category?: string;
    sku?: string;
    size?: string;
    color?: string;
    quantity?: number;
    price?: number | string;
    total?: number | string;
}

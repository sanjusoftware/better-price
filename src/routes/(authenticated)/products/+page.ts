import type { PageLoad } from './$types';
import Products from "$lib/data/products.json"

export const load: PageLoad = () => {
    return {
        products: Products
    }
};
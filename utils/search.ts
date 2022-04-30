import { ProductType } from '../types/Type';

export const search = (
    query : string,
    list : ProductType[]
):ProductType[] | [] =>{
    query : query.toLowerCase().trim()
    const regex = new RegExp(query);
    const arr = list.filter((item : ProductType) => {
    return regex.test(item.name.toLowerCase())
    });

    return arr;
}
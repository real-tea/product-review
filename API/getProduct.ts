import type { ProductType } from "../types/Type";
import axios from 'axios';

export const getProducts = ():ProductType[] =>{
    const data = axios
                      .get<ProductType[]>("https://fakestoreapi.com/products")
                      .then((res)=>res.data);
    

    return data;
};

import { ProductType } from "../../types/Type";

export default(product : ProductType | {} = {} ,action ) =>{
    switch(action.type){
        case "ADD_ROUTE_PRODUCT":
            return action.payload;
        default : return product;
    }
};
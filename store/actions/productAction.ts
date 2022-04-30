import { ProductType } from "../../types/Type";
import * as api from "../../API/getProduct";

export const putProducts = () => async (dispatch) => {
	try {
		const data = await api.getProducts();
		dispatch({ type: "FETCH_aLL", payload: data });
	} catch (error) {}
};

export const putRouteProduct = (data: ProductType | {}) => async (dispatch) => {
	try {
		dispatch({ type: "ADD_ROUTE_PRODUCT", payload: data });
	} catch (error) {}
};

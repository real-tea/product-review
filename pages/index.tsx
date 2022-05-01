import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainContent, Navbar } from "../components/";
import { putProducts } from "../redux/actions/productActions";
import { RootState } from "../redux/store";
import { ProductType } from "../types";
import { addUserToStore } from "../redux/actions/userActions";
import { UserType } from "../types/user/userType";
const Home: NextPage = () => {
	const dispatch = useDispatch();
	const products: ProductType[] = useSelector((state: RootState) => {
		return state.products;
	});
	const user: UserType = useSelector((state: RootState) => {
		return state.user;
	});
	useEffect(() => {
		if (!products.length) {
			dispatch(putProducts());
		}
	}, []);
	return <MainContent />;
};

export default Home;

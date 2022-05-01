import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { Layout } from "../components";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ChakraProvider>
					<Layout>
						<Head>
							<title>
								Disecto
							</title>
						</Head>
						<Component {...pageProps} />
					</Layout>
				</ChakraProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;

import { Box, Link } from "@chakra-ui/react";
import { LayoutPropsTypes } from "../../types";
import Navbar from "../Navbar/Navbar";

const Layout = (props: LayoutPropsTypes) => {
	return (
		<Box pb={"15rem"}>
			<Navbar />
			{props.children}
			{/* Footer */}
			<Box
				w={"100%"}
				mt={"2rem"}
				h={"20vh"}
				boxShadow={"lg"}
				bgColor={"gray.200"}
				position={"absolute"}
				bottom={0}
				left={0}
				textAlign={"center"}
				lineHeight={"20vh"}
			>
				Made with ♥ by{" "}
				<Link href="https://github.com/real-tea">
					Akash
				</Link>
			</Box>
		</Box>
	);
};

export default Layout;

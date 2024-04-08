import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import Container from "./Container";

const DefaultLayout = ({ children, addClass }) => {
	return (
		<>
			<Header />
			<Container addClass={addClass}>{children}</Container>
			<Footer />
		</>
	);
};

export default DefaultLayout;

import React, { useEffect } from "react";
import Header from "../components/Header";
import Background from "../components/Background";

const Calculator = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<Background />
		</>
	);
};

export default Calculator;

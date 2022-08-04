import React, { useEffect } from "react";
import Header from "../components/Header";

const Calculator = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
		</>
	);
};

export default Calculator;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Background from "../components/Background";
import { ReactComponent as CalculatorIcon } from "../static/CalculatorIcon.svg";
import { ReactComponent as CalculatorDataIcon } from "../static/CalculatorDataIcon.svg";

const Calculator = () => {
	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<IconWrapper>
					<Link to="/calcultor">
						<CalculatorIcon />
					</Link>
					<Link to="/calcultor/data">
						<CalculatorDataIcon />
					</Link>
				</IconWrapper>
			</Wrapper>
		</>
	);
};

export default Calculator;

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
	margin: 0;
	padding: 0;
`;

const IconWrapper = styled.div``;

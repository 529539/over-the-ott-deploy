import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Background from "../components/Background";

const Calculator = () => {
	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div className="inner"></div>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default Calculator;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin: 0;
	top: 0;
	position: absolute;
`;

const NotHeaderArea = styled.div`
	width: 100vw;
	height: calc(100vh - 5em);
	line-height: calc(100vh - 5em);
	top: 5em;
	padding: 0;
	position: absolute;
	overflow: hidden;
	.inner {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 10;
		width: 85vw;
		height: 80vh;
		background: rgba(255, 255, 255, 0.3);
		box-shadow: 0px 1vw 2vw rgba(0, 0, 0, 0.1);
		border-radius: 1.5vw;
	}
`;

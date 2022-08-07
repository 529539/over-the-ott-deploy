import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import Header from "../components/Header";
import Background from "../components/Background";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CalculatorData = () => {
	const [getMoment, setMoment] = useState(moment());
	const today = getMoment;
	return (
		<>
			<Header />
			<Background />
			<NotHeaderArea>
				<Wrapper>
					<div className="inner">
						<ControlBar>
							<Year>{today.format("YYYY")}</Year>
							<MonthWrapper>
								<MonthButtonWrapper
									onClick={() => {
										setMoment(getMoment.clone().subtract(1, "month"));
									}}
								>
									<FiChevronLeft size="30" />
								</MonthButtonWrapper>
								<Month>{today.format("M월")}</Month>
								<MonthButtonWrapper
									onClick={() => {
										setMoment(getMoment.clone().add(1, "month"));
									}}
								>
									<FiChevronRight size="30" />
								</MonthButtonWrapper>
							</MonthWrapper>
						</ControlBar>
					</div>
				</Wrapper>
			</NotHeaderArea>
		</>
	);
};

export default CalculatorData;

const NotHeaderArea = styled.div`
	width: 100vw;
	height: calc(100vh - 5em);
	top: 5em;
	padding: 0;
	position: absolute;
	overflow: hidden;
`;

const Wrapper = styled.div`
	width: 80vw;
	margin: 0 auto;
	margin-top: 10vh;
	.inner {
		background: rgb(1, 1, 1, 0.3);
		margin-left: 7vw;
	}
`;

const ControlBar = styled.div`
	width: 10em;
	position: relative;
`;

const Year = styled.div`
	font-size: 0.9vw;
	font-weight: 600;
	color: #fff;
	display: flex;
	justify-content: center;
`;

const MonthWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 10em;
	height: 2em;
	margin-top: 0.5em;
`;

const Month = styled.div`
	font-weight: 600;
	font-size: 1.5vw;
	color: #fff;
`;

const MonthButtonWrapper = styled.div`
	cursor: pointer;
	width: 1.5em;
	height: 1.5em;
	color: #fff;
	&:hover {
		color: gray;
	}
	margin-top: 0.4em;
`;

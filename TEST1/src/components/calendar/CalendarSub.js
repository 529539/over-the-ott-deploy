import React from "react";
import styled from "styled-components";

const SubTitle = styled.p`
	font-weight: 600;
	font-size: 27px;
`;

const CalendarSub = () => {
	return (
		<>
			<div>
				<SubTitle>구독 중인 OTT별 남은 결제일</SubTitle>
			</div>
		</>
	);
};

export default CalendarSub;

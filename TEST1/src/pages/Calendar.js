import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CalendarTable from "../components/calendar/CalendarTable";
import CalendarSub from "../components/calendar/CalendarSub";
import CalendarBackground from "../components/calendar/CalendarBackground";

const Calendar = () => {
	return (
		<>
			<Header />
			<Wrapper>
				<CalendarBackground />
				<CalendarWrapper>
					<div style={{ display: "flex" }}>
						<CalendarTable />
						<CalendarSub />
					</div>
				</CalendarWrapper>
			</Wrapper>
		</>
	);
};

export default Calendar;

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
	margin: 0;
	padding: 0;
`;

const CalendarWrapper = styled.div`
	display: flex;
	margin: 12vh 7vw 3vh 7vw;
`;

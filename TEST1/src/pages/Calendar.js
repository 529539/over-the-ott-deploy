import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CalendarTable from "../components/calendar/CalendarTable";
import CalendarSub from "../components/calendar/CalendarSub";

const Wrapper = styled.div`
	display: flex;
	margin: 8em 8em 4em 8em;
`;

const Calendar = () => {
	return (
		<>
			<Header />
			<Wrapper>
				<div style={{ display: "flex" }}>
					<CalendarTable />
					<CalendarSub />
				</div>
			</Wrapper>
		</>
	);
};

export default Calendar;

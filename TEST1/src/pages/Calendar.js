import React, { useEffect } from "react";
import Header from "../components/Header";
import CalendarTable from "../components/calendar/CalendarTable";
import CalendarSub from "../components/calendar/CalendarSub";

const Calendar = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<div style={{ display: "flex" }}>
				<CalendarTable />
				<CalendarSub />
			</div>
		</>
	);
};

export default Calendar;

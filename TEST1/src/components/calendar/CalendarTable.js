import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Wrapper = styled.div``;

const ControlBar = styled.div`
	width: 10em;
	position: relative;
`;

const Year = styled.div`
	font-size: 1em;
	font-weight: 600;
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
	font-size: 1.8em;
`;

const MonthButtonWrapper = styled.div`
	cursor: pointer;
	width: 1.5em;
	height: 1.5em;
	color: #343434;
	&:hover {
		color: gray;
	}
	margin-top: 0.4em;
`;

const TableWrapper = styled.div``;

const CalendarTable = () => {
	const [getMoment, setMoment] = useState(moment());
	const today = getMoment;
	const firstWeek = today.clone().startOf("month").week();
	const lastWeek =
		today.clone().endOf("month").week() === 1
			? 53
			: today.clone().endOf("month").week();
	const calendarArr = () => {
		let result = [];
		let week = firstWeek;
		for (week; week <= lastWeek; week++) {
			result = result.concat(
				<tr key={week}>
					{Array(7)
						.fill(0)
						.map((data, index) => {
							let days = today
								.clone()
								.startOf("year")
								.week(week)
								.startOf("week")
								.add(index, "day");
							if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
								return (
									<td key={index} style={{ backgroundColor: "red" }}>
										<span>{days.format("D")}</span>
									</td>
								);
							} else if (days.format("MM") !== today.format("MM")) {
								return <td key={index}></td>;
							} else {
								return (
									<td key={index}>
										<span>{days.format("D")}</span>
									</td>
								);
							}
						})}
				</tr>
			);
		}
		return result;
	};

	return (
		<>
			<Wrapper>
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
				<TableWrapper>
					<table>
						<tbody>{calendarArr()}</tbody>
					</table>
				</TableWrapper>
			</Wrapper>
		</>
	);
};

export default CalendarTable;

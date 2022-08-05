import React, { useState, useRef } from "react";
import styled from "styled-components";
import moment from "moment";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Wrapper = styled.div`
	width: 65vw;
`;

const ControlBar = styled.div`
	width: 10em;
	padding-left: 2em;
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

const TableWrapper = styled.div`
	padding-top: 4.3vh;
	position: relative;
`;

let TableBackground = styled.div``;

const Border = styled.div`
	border: 3px solid #fff;
	width: 57vw;
	margin-top: 5.1vh;
	margin-left: 1.8vw;
	position: absolute;
	z-index: 1;
`;

const Day = styled.div`
	font-weight: 500;
	font-size: 1.3em;
	width: 8.3vw;
	text-align: center;
`;

const Table = styled.table`
	position: absolute;
	display: flex;
	margin-left: 1.8vw;
	width: 56vw;
	height: 56vh;
`;

const Tbody = styled.tbody`
	display: flex;
	flex-direction: column;
	tr > :nth-child(1) {
		color: #c72d2a;
	}
	tr > :nth-child(7) {
		color: #192f72;
	}
`;

const Tr = styled.tr``;

const Td1 = styled.td`
	display: flex;
	width: 8vw;
	height: 5vh;
`;

let Td = styled.td``;

const DateCircle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: #d38189;
	border-radius: 50%;
	width: 2.1em;
	height: 2.1em;
	margin: 1vw;
	margin-left: 0.7vw;
	margin-top: 0.9vw;
`;

const Date = styled.span`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin: 1vw;
	font-weight: 400;
	font-size: 1.3em;
`;

const CalendarTable = () => {
	/*
	const OTT = () => {
		//OTT 구독일 정보를 받아오고,
		//innerText가 해당 날짜와 일치하는 Date(<span>) 태그의
		//부모 태그인 Td(<td>) 태그를 찾아 OTT 이미지 삽입
		//
		//특정 셀 접근하는 방법
		//-행열 정보로 접근하기 : .week34 > :nth-child(6) {}
		// ㄴ달마다 위치가 달라지므로 사용하지 말것
		//  요소 삽입 가능한지 테스트 용도로만 사용 예정
		//-useRef 사용하기
	};
	OTT();
	*/

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
				<>
					<Tr
						key={week}
						className={"week" + week}
						style={{ display: "flex", flexDirection: "row" }}
					>
						{Array(7)
							.fill(0)
							.map((data, index) => {
								let days = today
									.clone()
									.startOf("year")
									.week(week)
									.startOf("week")
									.add(index, "day");
								if (
									moment().format("YYYYMMDD") === days.format("YYYYMMDD") &&
									days.format("MM") === today.format("MM")
								) {
									return (
										<Td key={index}>
											<DateCircle>
												<Date className="today date">{days.format("D")}</Date>
											</DateCircle>
										</Td>
									);
								} else if (days.format("MM") !== today.format("MM")) {
									return <Td key={index}></Td>;
								} else {
									return (
										<Td key={index}>
											<Date>{days.format("D")}</Date>
										</Td>
									);
								}
							})}
					</Tr>
				</>
			);
		}
		if (result.length === 5) {
			TableBackground = styled.div`
				background: rgba(255, 255, 255, 0.93);
				box-shadow: 0px 3px 15px rgba(105, 105, 105, 0.15);
				border-radius: 20px;
				position: absolute;
				z-index: -1;
				margin-top: 5vh;
				width: 60vw;
				height: 60vh;
			`;
			Td = styled.td`
				position: relative;
				display: flex;
				border-top: 1px solid #c4c4c4;
				width: 8vw;
				height: 11.5vh;
				.today {
					color: #fff;
					margin: 0 auto;
					margin-top: 0.07em;
				}
			`;
		}
		if (result.length === 6) {
			TableBackground = styled.div`
				background: rgba(255, 255, 255, 0.93);
				box-shadow: 0px 3px 15px rgba(105, 105, 105, 0.15);
				border-radius: 20px;
				position: absolute;
				z-index: -1;
				margin-top: 5vh;
				width: 60vw;
				height: 67vh;
			`;
			Td = styled.td`
				position: relative;
				display: flex;
				border-top: 1px solid #c4c4c4;
				width: 8vw;
				height: 10.7vh;
				.today {
					color: #fff;
					margin: 0 auto;
					margin-top: 0.07em;
				}
			`;
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
					<TableBackground></TableBackground>
					<Border></Border>
					<Table>
						<Tbody>
							<tr style={{ display: "flex", flexDirection: "row" }}>
								<Td1>
									<Day style={{ color: "#C72D2A" }}>일</Day>
								</Td1>
								<Td1>
									<Day>월</Day>
								</Td1>
								<Td1>
									<Day>화</Day>
								</Td1>
								<Td1>
									<Day>수</Day>
								</Td1>
								<Td1>
									<Day>목</Day>
								</Td1>
								<Td1>
									<Day>금</Day>
								</Td1>
								<Td1>
									<Day style={{ color: "#192F72" }}>토</Day>
								</Td1>
							</tr>
							{calendarArr()}
						</Tbody>
					</Table>
				</TableWrapper>
			</Wrapper>
		</>
	);
};

export default CalendarTable;

import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CalendarTable = props => {
	const [getMoment, setMoment] = useState(moment());
	const [getCurrentMoment, setCurrentMoment] = useState(moment());
	const today = getMoment;
	const firstWeek = today.clone().startOf('month').week();
	const lastWeek =
		today.clone().endOf('month').week() === 1
			? 53
			: today.clone().endOf('month').week();

	//구독 디데이 정보 저장
	let subArray = [];
	subArray = props.data;

	//ott 아이콘 색상 저장
	var ottCSS = [];
	ottCSS = props.ottCSS;

	//ott 이름에 맞는 아이콘 불러오는 함수
	function img(ott) {
		switch (ott) {
			case 1:
			case 2:
			case 3:
				return ottCSS[0].img;
			case 4:
			case 5:
				return ottCSS[1].img;
			case 6:
			case 7:
			case 8:
				return ottCSS[2].img;
			case 9:
			case 10:
				return ottCSS[3].img;
			case 11:
				return ottCSS[4].img;
			default:
				return ottCSS[5].img;
		}
	}
	//ott 이름에 맞는 색상 불러오는 함수
	function color(ott) {
		switch (ott) {
			case 1:
			case 2:
			case 3:
				return '#D90B1C';
			case 4:
			case 5:
				return '#FF0558';
			case 6:
			case 7:
			case 8:
				return '#1F4EF5';
			case 9:
			case 10:
				return '#192F72';
			case 11:
				return '#77848C';
			default:
				return '#10BBE0';
		}
	}

	//날짜를 입력받으면 d-day 목록과 일치하는 경우에 true 반환하는 함수
	function payDay(date) {
		var validIcon = false;
		for (var i = 0; i < subArray.length; i++) {
			let next_pay = subArray[i].next_pay.replace(/-/g, '');
			if (date === next_pay) validIcon = true;
		}
		return validIcon;
	}
	//날짜를 입력받으면 d-day 목록에 날짜와 일치하는 경우 해당 ott 이름 (번호)를 반환하는 함수
	function payOtt(date) {
		var validOtt = 0;
		for (var i = 0; i < subArray.length; i++) {
			let next_pay = subArray[i].next_pay.replace(/-/g, '');
			if (date === next_pay) {
				validOtt = subArray[i].ott;
			}
		}
		return validOtt;
	}
	//아이콘 색상 및 스타일을 정하는 함수
	function iconStyle(date) {
		var style = {};
		var iconColor = ' ';
		iconColor = color(payOtt(date));
		style = {
			borderBottom: '20px solid' + iconColor,
			borderTop: '20px solid transparent',
			borderLeft: '20px solid transparent',
			borderRight: '20px solid' + iconColor,
		};
		return style;
	}

	//캘린더 숫자 출력 함수
	const calendarArr = () => {
		let result = [];
		let week = firstWeek;
		for (week; week <= lastWeek; week++) {
			result = result.concat(
				<>
					<Tr
						key={week}
						className={'week' + week}
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						{Array(7)
							.fill(0)
							.map((data, index) => {
								let days = today
									.clone()
									.startOf('year')
									.week(week)
									.startOf('week')
									.add(index, 'day');
								if (
									moment().format('YYYYMMDD') === days.format('YYYYMMDD') &&
									days.format('MM') === today.format('MM')
								) {
									return (
										<Td key={index}>
											<DateCircle>
												<Date className='today date'>{days.format('D')}</Date>
											</DateCircle>
											{payDay(days.format('YYYYMMDD')) ? (
												<img
													src={img(payOtt(days.format('YYYYMMDD')))}
													width='30px'
												/>
											) : null}
										</Td>
									);
								} else if (days.format('MM') !== today.format('MM')) {
									return <Td key={index}></Td>;
								} else {
									return (
										<Td key={index}>
											<Date>{days.format('D')}</Date>
											{payDay(days.format('YYYYMMDD')) ? (
												<Icons>
													<img
														src={img(payOtt(days.format('YYYYMMDD')))}
														width='30px'
													/>
													<div style={iconStyle(days.format('YYYYMMDD'))}></div>
												</Icons>
											) : null}
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
				background: rgba(255, 255, 255, 0.9);
				box-shadow: 0px 3px 15px rgba(105, 105, 105, 0.15);
				border-radius: 20px;
				position: absolute;
				z-index: -1;
				margin-top: 5.5vh;
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
				background: rgba(255, 255, 255, 0.9);
				box-shadow: 0px 3px 15px rgba(105, 105, 105, 0.15);
				border-radius: 20px;
				position: absolute;
				z-index: -1;
				margin-top: 5.5vh;
				width: 60vw;
				height: 67.5vh;
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

	const currentMonth = getCurrentMoment;
	let subDisplay;
	if (today.format('MM') === currentMonth.format('MM')) subDisplay = true;
	else subDisplay = false;

	return (
		<>
			<Wrapper>
				<ControlBar>
					<Year>{today.format('YYYY')}</Year>
					<MonthWrapper>
						<MonthButtonWrapper
							onClick={() => {
								setMoment(getMoment.clone().subtract(1, 'month'));
							}}
						>
							<FiChevronLeft size='30' />
						</MonthButtonWrapper>
						<Month>{today.format('M월')}</Month>
						<MonthButtonWrapper
							onClick={() => {
								setMoment(getMoment.clone().add(1, 'month'));
							}}
						>
							<FiChevronRight size='30' />
						</MonthButtonWrapper>
					</MonthWrapper>
				</ControlBar>
				<TableWrapper>
					<TableBackground></TableBackground>
					<Border></Border>
					<Table>
						<Tbody>
							<tr style={{ display: 'flex', flexDirection: 'row' }}>
								<Td1>
									<Day style={{ color: '#C72D2A' }}>일</Day>
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
									<Day style={{ color: '#192F72' }}>토</Day>
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

const Wrapper = styled.div`
	width: 64vw;
`;

const ControlBar = styled.div`
	width: 10em;
	height: 7vh;
	padding-left: 2em;
	position: relative;
	z-index: 50;
`;

const Year = styled.div`
	font-size: 0.9vw;
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
	font-size: 1.5vw;
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
	padding-top: 4.5vh;
	position: relative;
`;

let TableBackground = styled.div``;

const Border = styled.div`
	border: 3px solid #fff;
	width: 57vw;
	margin-top: 5.7vh;
	margin-left: 1.8vw;
	position: absolute;
	z-index: 1;
`;

const Day = styled.div`
	font-weight: 500;
	font-size: 1.1vw;
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
	height: 5.7vh;
`;

let Td = styled.td``;

const DateCircle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: #d38189;
	border-radius: 50%;
	width: 1.6vw;
	height: 1.6vw;
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
	font-size: 1vw;
`;
const Icons = styled.div`
	width: 2.81vw;
	height: 11.66vh;
	margin-left: 5.5vw;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	img {
		position: absolute;
		z-index: 2;
		margin: 0 0 0.3vh 0.3vw;
		filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));
	}
	div {
		position: relative;
		z-index: 1;
		width: 0;
		height: 0;
		border-bottom: 20px solid;
		border-top: 20px solid transparent;
		border-left: 20px solid transparent;
		border-right: 20px solid;
	}
`;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header';
import CalendarTable from '../components/calendar/CalendarTable';
import CalendarSub from '../components/calendar/CalendarSub';
import CalendarBackground from '../components/calendar/CalendarBackground';
import style from '../db.json';

const Calendar = () => {
	//달력에 필요한 정보 저장
	const [DB, setDB] = useState([]);

	var ottCSS = [];
	ottCSS = style.ottArray;

	useEffect(() => {
		getData();
	}, []);
	//디데이 정보 가져오는 함수
	const getData = async () => {
		await axios
			.get('https://over-the-ott.herokuapp.com/calculator/days-till/')
			.then(res => {
				setDB(res.data.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<>
			<Header />
			<Wrapper>
				<CalendarBackground />
				<CalendarWrapper>
					<div style={{ display: 'flex' }}>
						<CalendarTable />
						<CalendarSub data={DB} ottCSS={ottCSS} />
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

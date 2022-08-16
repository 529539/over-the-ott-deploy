import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import Header from '../components/Header';
import Background from '../components/Background';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ReactComponent as CalculatorIcon } from '../static/CalculatorIcon.svg';
import BarChart from '../components/calculator/BarChart.js';
import PieChart from '../components/calculator/PieCharts.js';
import style from '../db.json';

const CalculatorData = () => {
	const [getMoment, setMoment] = useState(moment());
	const today = getMoment;

	//통계 낼 정보 저장
	const [DB, setDB] = useState([]);

	var ottCSS = [];
	ottCSS = style.ottArray;

	useEffect(() => {
		getData();
	}, []);

	//통계 낼 정보를 가져오는 함수
	const getData = async () => {
		await axios
			//.get('http://localhost:8888/data')
			.get('https://over-the-ott.herokuapp.com/calculator/runtime/')
			.then(res => {
				setDB(res.data.data); //local 버전 setDB(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div className='inner'>
						<Container>
							<div style={{ padding: '5vh 4vw 5vh 4vw' }}>
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<InnerContainer>
										<Title>OTT 별 분당 사용 요금</Title>
										<Line />
										<BarChart data={DB} ottCSS={ottCSS} />
									</InnerContainer>
									<InnerContainer>
										<Title>OTT 별 이용 시간 비교</Title>
										<Line />
										<PieChart data={DB} ottCSS={ottCSS} />
									</InnerContainer>
								</div>
								<Link to='/calculator' style={{ textDecoration: 'none' }}>
									<Button>
										<CalculatorIcon />
										<ButtonText>계산기로 돌아가기</ButtonText>
									</Button>
								</Link>
								<div
									style={{ position: 'absolute', bottom: '5vh', width: '70vw' }}
								>
									<div
										style={{
											position: 'relative',
											display: 'flex',
											justifyContent: 'center',
										}}
									>
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
									</div>
								</div>
							</div>
						</Container>
					</div>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default CalculatorData;

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
	position: relative;
	display: flex;
	align-items: center;
	.inner {
		display: block;
		margin: 0 auto;
	}
`;

const Container = styled.div`
	position: relative;
	width: 80vw;
	height: 75vh;
	background: rgba(255, 255, 255, 0.3);
	box-shadow: 0px 1vw 2vw rgba(0, 0, 0, 0.1);
	border-radius: 1.5vw;
`;

const InnerContainer = styled.div`
	width: 35vw;
	height: 56vh;
`;

const Title = styled.h1`
	font-weight: 600;
	font-size: 1.5vw;
	line-height: 1.5vw;
	text-align: center;
	color: #fff;
`;

const Line = styled.div`
	border: 0.3px solid #fffefe;
	width: 30vw;
	margin: 0 auto;
	margin-top: 3vh;
`;

const Button = styled.div`
	z-index: 20;
	position: absolute;
	width: 18vw;
	height: 7.8vh;
	line-height: 7.6vh;
	bottom: 5.5vh;
	background: #d38189;
	box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
	border-radius: 10vw;
	display: flex;
	cursor: pointer;
	svg {
		width: 2vw;
		height: auto;
		padding-left: 1.7vw;
		padding-right: 1vw;
	}
`;

const ButtonText = styled.div`
	cursor: pointer;
	font-weight: 600;
	font-size: 1.4vw;
	line-height: 7.8vh;
	color: #fff;
`;

const ControlBar = styled.div`
	width: 10em;
	line-height: 4vh;
	border: 10vh;
`;

const Year = styled.div`
	font-size: 0.9vw;
	font-weight: 500;
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
		color: rgb(255, 255, 255, 0.3);
	}
	margin-top: 0.4em;
`;

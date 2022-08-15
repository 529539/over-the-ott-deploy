import React, { useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const CalendarSub = props => {
	let today = moment().format('D');
	let lastDayofMonth = Number(moment().endOf('month').format('DD'));

	//구독 디데이 정보 저장
	let subArray = [];
	subArray = props.data;

	//디데이 남은 순으로 정보 정렬
	let sortedSubArray = subArray.sort(
		(a, b) => a.days_till_pay - b.days_till_pay
	);

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

	return (
		<>
			<WrapperWrapper>
				<Wrapper>
					<SubTitle>구독 중인 OTT별 남은 결제일</SubTitle>
					<LineWrapper>
						{sortedSubArray.map(subArray => {
							return (
								<>
									<LineContainer>
										<img src={img(subArray.ott)} />
										<TextContainer>
											<Text>다음 결제일이</Text>
											<div style={{ width: '3.5vw', marginRight: '1vw' }}>
												<Text
													style={{
														float: 'right',
														fontWeight: '600',
														color: color(subArray.ott),
													}}
												>
													{subArray.days_till_pay}일
												</Text>
											</div>

											<Text>남았습니다</Text>
										</TextContainer>
									</LineContainer>
								</>
							);
						})}
					</LineWrapper>
				</Wrapper>
			</WrapperWrapper>
		</>
	);
};

export default CalendarSub;

const WrapperWrapper = styled.div`
	position: relative;
	width: 25vw;
	height: 75vh;
`;

const Wrapper = styled.div`
	position: absolute;
	bottom: 0;
`;

const SubTitle = styled.div`
	font-weight: 600;
	font-size: 1.4vw;
	padding-bottom: 3vh;
`;

const LineWrapper = styled.div`
	width: 23vw;
	height: auto;
`;

const LineContainer = styled.div`
	display: flex;
	margin-bottom: 2.5vh;
`;

const TextContainer = styled.div`
	display: flex;
	align-items: center;
	padding-left: 1vw;
`;

const Text = styled.div`
	font-weight: 400;
	font-size: 1vw;
`;

/*const ddayCal = date => {
		let dday = date - today;
		let nextDday = dday + lastDayofMonth;
		if (date >= today) return dday;
		else return nextDday;
	};
	for (let i = 0; i < subArray.length; i++) {
		subArray[i].dday = ddayCal(subArray[i].date);
	}
	let sortedSubArray = subArray.sort((a, b) => a.dday - b.dday);*/
/*const ottImage = name => {
		if (name === 'Netflix')
			return (
				<>
					<NetflixLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'Watcha')
			return (
				<>
					<WatchaLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'Wavve')
			return (
				<>
					<WavveLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'DisneyPlus')
			return (
				<>
					<DisneyPlusLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'AppleTV')
			return (
				<>
					<AppleTVLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'PrimeVideo')
			return (
				<>
					<PrimeVideoLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else console.error('Error: invalid OTT');
	};*/

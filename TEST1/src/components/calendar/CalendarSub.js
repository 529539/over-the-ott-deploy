import React from "react";
import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "../../static/ott/Netflix.svg";
//import { ReactComponent as WatchaLogo } from "../../static/ott/Watcha.svg";
//import { ReactComponent as DisneyPlusLogo } from "../../static/ott/DisneyPlus.svg";
//import { ReactComponent as WavveLogo } from "../../static/ott/Wavve.svg";

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
	font-size: 1.5em;
	padding-bottom: 2vh;
`;

const LineWrapper = styled.div`
	width: 25vw;
	height: auto;
`;

const LineContainer = styled.div`
	display: flex;
	border: 1px solid #000;
	margin-bottom: 1.5vh;
`;

const TextContainer = styled.div`
	display: flex;
	align-items: center;
	padding-left: 0.7vw;
`;

const Text = styled.div`
	font-weight: 400;
	font-size: 1.3em;
`;

const CalendarSub = () => {
	let subArray = [
		{
			ott: "Netflix",
			date: 10,
		},
		{
			ott: "Watcha",
			date: 16,
		},
		{
			ott: "DisneyPlus",
			date: 20,
		},
		{
			ott: "Wavve",
			date: 29,
		},
	];
	return (
		<>
			<WrapperWrapper>
				<Wrapper>
					<SubTitle>구독 중인 OTT별 남은 결제일</SubTitle>
					<LineWrapper>
						<LineContainer>
							<NetflixLogo
								style={{
									filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
								}}
								size="30"
							/>
							<TextContainer>
								<Text>다음 결제일이</Text>
								<div style={{ width: "4vw", marginRight: "1vw" }}>
									<Text style={{ float: "right", fontWeight: "600" }}>1일</Text>
								</div>

								<Text>남았습니다</Text>
							</TextContainer>
						</LineContainer>
						<LineContainer>
							<NetflixLogo
								style={{
									filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
								}}
								size="30"
							/>
							<TextContainer>
								<Text>다음 결제일이</Text>
								<div style={{ width: "4vw", marginRight: "1vw" }}>
									<Text style={{ float: "right", fontWeight: "600" }}>
										10일
									</Text>
								</div>

								<Text>남았습니다</Text>
							</TextContainer>
						</LineContainer>
					</LineWrapper>
				</Wrapper>
			</WrapperWrapper>
		</>
	);
};

export default CalendarSub;

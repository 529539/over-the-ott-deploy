import React from "react";
import styled from "styled-components";
import moment from "moment";
import { ReactComponent as NetflixLogo } from "../../static/OTTcircle/Netflix.svg";
import { ReactComponent as WatchaLogo } from "../../static/OTTcircle/Watcha.svg";
import { ReactComponent as DisneyPlusLogo } from "../../static/OTTcircle/DisneyPlus.svg";
import { ReactComponent as WavveLogo } from "../../static/OTTcircle/Wavve.svg";
import { ReactComponent as AppleTVLogo } from "../../static/OTTcircle/AppleTV.svg";
import { ReactComponent as PrimeVideoLogo } from "../../static/OTTcircle/PrimeVideo.svg";

const CalendarSub = () => {
	let today = moment().format("D");
	let lastDayofMonth = Number(moment().endOf("month").format("DD"));
	let subArray = [
		{
			name: "PrimeVideo",
			color: "#10BBE0",
			date: 5,
		},
		{
			name: "Netflix",
			color: "#D90B1C",
			date: 10,
		},
		{
			name: "Watcha",
			color: "#FF0558",
			date: 16,
		},
		{
			name: "DisneyPlus",
			color: "#192F72",
			date: 20,
		},
		{
			name: "Wavve",
			color: "#1F4EF5",
			date: 25,
		},
		{
			name: "AppleTV",
			color: "#77848C",
			date: 29,
		},
	];
	const ddayCal = (date) => {
		let dday = date - today;
		let nextDday = dday + lastDayofMonth;
		if (date >= today) return dday;
		else return nextDday;
	};
	for (let i = 0; i < subArray.length; i++) {
		subArray[i].dday = ddayCal(subArray[i].date);
	}
	let sortedSubArray = subArray.sort((a, b) => a.dday - b.dday);
	const ottImage = (name) => {
		if (name === "Netflix")
			return (
				<>
					<NetflixLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "Watcha")
			return (
				<>
					<WatchaLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "Wavve")
			return (
				<>
					<WavveLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "DisneyPlus")
			return (
				<>
					<DisneyPlusLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "AppleTV")
			return (
				<>
					<AppleTVLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "PrimeVideo")
			return (
				<>
					<PrimeVideoLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else console.error("Error: invalid OTT");
	};
	return (
		<>
			<WrapperWrapper>
				<Wrapper>
					<SubTitle>구독 중인 OTT별 남은 결제일</SubTitle>
					<LineWrapper>
						{sortedSubArray.map((ott) => {
							return (
								<>
									<LineContainer key={ott.name}>
										{ottImage(ott.name)}
										<TextContainer>
											<Text>다음 결제일이</Text>
											<div style={{ width: "3.5vw", marginRight: "1vw" }}>
												<Text
													style={{
														float: "right",
														fontWeight: "600",
														color: ott.color,
													}}
												>
													{ott.dday}일
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

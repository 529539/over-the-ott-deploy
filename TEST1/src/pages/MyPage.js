import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Background from "../components/Background";
import { ReactComponent as NetflixLogo } from "../static/OTTcircle/Netflix.svg";
import { ReactComponent as WatchaLogo } from "../static/OTTcircle/Watcha.svg";
import { ReactComponent as DisneyPlusLogo } from "../static/OTTcircle/DisneyPlus.svg";
import { ReactComponent as WavveLogo } from "../static/OTTcircle/Wavve.svg";
import { ReactComponent as AppleTVLogo } from "../static/OTTcircle/AppleTV.svg";
import { ReactComponent as PrimeVideoLogo } from "../static/OTTcircle/PrimeVideo.svg";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const MyPage = () => {
	const [isEditing, setIsEditing] = useState(false);
	const btnClick = () => {
		setIsEditing(!isEditing);
	};
	const btnText = () => {
		if (isEditing === false) return "수정하기";
		else return "완료";
	};

	useEffect(() => {
		setIsEditing(false);
	}, []);

	const subArray = [
		{
			ott: "Netflix",
			fee: 17000,
			pay_date: 10,
			share: 4,
			color: "#D90B1C",
		},
		{
			ott: "Watcha",
			fee: 12900,
			pay_date: 16,
			share: 4,
			color: "#FF0558",
		},
		{
			ott: "Wavve",
			fee: 13900,
			pay_date: 25,
			share: 4,
			color: "#1F4EF5",
		},
		{
			ott: "DisneyPlus",
			fee: 9900,
			pay_date: 20,
			share: 4,
			color: "#192F72",
		},
		{
			ott: "AppleTV",
			fee: 6500,
			pay_date: 29,
			share: 1,
			color: "#77848C",
		},
		{
			ott: "PrimeVideo",
			fee: 0,
			pay_date: 5,
			share: 1,
			color: "#10BBE0",
		},
	];
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
	const devide = (a, b) => {
		return a / b;
	};
	const subName = (ott, price) => {
		if (ott === "Netflix") {
			if (price === 9500) return "베이직";
			else if (price === 13500) return "스탠다드";
			else if (price === 17000) return "프리미엄";
			else console.error("invalid fee");
		} else if (ott === "Watcha") {
			if (price === 7900) return "베이직";
			else if (price === 12900) return "프리미엄";
			else console.error("invalid fee");
		} else if (ott === "Wavve") {
			if (price === 7900) return "베이직";
			else if (price === 10900) return "스탠다드";
			else if (price === 13900) return "프리미엄";
			else console.error("invalid fee");
		} else if (ott === "DisneyPlus") {
			if (price === 9900) return "월간";
			else if (price === 99000) return "연간";
			else console.error("invalid fee");
		} else if (ott === "AppleTV") {
			return "월간";
		} else if (ott === "PrimeVideo") {
			return "프리미엄";
		} else console.error("invalid OTT");
	};
	const showButton = () => {
		return (
			<EditBtn>
				<HiMinusSm size="1.7vw" fill="#fff" />
			</EditBtn>
		);
	};

	console.log(isEditing);

	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div className="inner">
						<Container>
							<div style={{ padding: "7vh 5vw 5vh 5vw" }}>
								<div style={{ display: "flex" }}>
									<Title>구독 중인 OTT 정보</Title>
									<Btn
										onClick={btnClick}
										className={isEditing ? "editing" : ""}
									>
										<BtnText>{btnText()}</BtnText>
									</Btn>
								</div>
								<Line />
								<OTTsWrapper>
									{subArray.map((ott) => {
										return (
											<OTTContainer>
												<ImageWrapper>{ottImage(ott.ott)}</ImageWrapper>
												<BlackLight>매달</BlackLight>
												<Bold style={{ color: ott.color }}>
													{ott.pay_date}일
												</Bold>
												<Bold style={{ color: ott.color, width: "5vw" }}>
													{devide(ott.fee, ott.share)}원
												</Bold>
												<BlackLight>결제</BlackLight>
												<DevideLine />
												<BlackLight style={{ fontWeight: "600" }}>
													{subName(ott.ott, ott.fee)}
												</BlackLight>
												<BlackLight
													style={{
														marginLeft: "0.6vw",
														marginRight: "0.8vw",
														fontWeight: "600",
													}}
												>
													{ott.share}인
												</BlackLight>
												{isEditing ? showButton() : null}
											</OTTContainer>
										);
									})}
								</OTTsWrapper>
							</div>
						</Container>
					</div>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default MyPage;

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
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0px 1vw 2vw rgba(0, 0, 0, 0.1);
	border-radius: 1vw;
	.editing {
		border: 0;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 0.5vw;
		cursor: pointer;
		width: 5vw;
		height: 4vh;
		position: absolute;
		right: 5vw;
		top: 9.5vh;
		div {
			color: #fff;
		}
		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
			div {
				color: #d8d8d8;
			}
		}
	}
`;

const Title = styled.h1`
	font-weight: 600;
	font-size: 1.6vw;
	line-height: 1.6vw;
`;

const Btn = styled.button`
	border: 0;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 0.5vw;
	cursor: pointer;
	width: 5vw;
	height: 4vh;
	position: absolute;
	right: 5vw;
	top: 9.5vh;
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		div {
			color: #6a6a6a;
		}
	}
`;

const BtnText = styled.div`
	font-weight: 700;
	font-size: 0.9vw;
	line-height: 4vh;
	color: #343434;
`;

const Line = styled.div`
	border: 1px solid #343434;
	width: 70vw;
	height: 0;
	margin-top: 1vh;
`;

const OTTsWrapper = styled.div`
	position: relative;
	width: 70vw;
	height: 40vh;
	border-radius: 1vw;
	margin: 0 auto;
	margin-top: 7vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: flex-start;
`;

const OTTContainer = styled.div`
	width: 35vw;
	height: 13vh;
	line-height: 13vh;
	border-radius: 1vw;
	display: flex;
	align-items: center;
	position: relative;
	button {
		position: absolute;
		right: 0.3vw;
	}
`;

const ImageWrapper = styled.div`
	width: 5vw;
	height: 5vw;
	margin-left: 1vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BlackLight = styled.div`
	font-weight: 400;
	font-size: 1.2vw;
	color: #343434;
	margin-right: 0.2vw;
`;

const Bold = styled.div`
	width: 3vw;
	font-weight: 600;
	font-size: 1.2vw;
	margin: 0 0.5vw 0 0.5vw;
`;

const DevideLine = styled.div`
	border-left: 1px solid #343434;
	width: 0;
	height: 2vh;
	margin: 0 1vw 0 1vw;
`;

const EditBtn = styled.button`
	border: 0;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 0.2vw;
	cursor: pointer;
	width: 2vw;
	height: 2vw;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

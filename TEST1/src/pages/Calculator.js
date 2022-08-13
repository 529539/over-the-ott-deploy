import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Background from "../components/Background";
import { ReactComponent as NetflixRect } from "../static/OTTrect/NetflixRect.svg";
import { ReactComponent as WatchaRect } from "../static/OTTrect/WatchaRect.svg";
import { ReactComponent as WavveRect } from "../static/OTTrect/WavveRect.svg";
import { ReactComponent as DisneyPlusRect } from "../static/OTTrect/DisneyPlusRect.svg";
import { ReactComponent as AppleTVRect } from "../static/OTTrect/AppleTVRect.svg";
import { ReactComponent as PrimeVideoRect } from "../static/OTTrect/PrimeVideoRect.svg";
import { ReactComponent as DisableRect } from "../static/OTTrect/disableRect.svg";
import { ReactComponent as CalculatorDataIcon } from "../static/CalculatorDataIcon.svg";

const Calculator = () => {
	//const [otts, setOtts] = useState([]);
	useEffect(() => {
		//getOtts();
	}, []);

	/*const getOtts = async () => {
		const response = await axios
			.get("https://over-the-ott.herokuapp.com/calculator/runtime/")
			.then((response) => {
				setOtts(response.data);
			})
			.catch((error) => {
				console.log("구독 정보 불러오기 실패", error.message);
			});
	};*/
	let otts = [
		{
			ott_name: "Netflix",
			year: 2022,
			month: 8,
			total_runtime: 150,
			won_per_min: 10.0,
		},
		{
			ott_name: "Watcha",
			year: 2022,
			month: 8,
			total_runtime: 120,
			won_per_min: 12.5,
		},
	];
	console.log(otts);

	const [is1Clicked, setIs1Clicked] = useState();
	const setStyle1 = () => {
		setIs1Clicked(true);
		setIs2Clicked(false);
		setIs3Clicked(false);
		setIs4Clicked(false);
		setIs5Clicked(false);
		setIs6Clicked(false);
		console.log(is1Clicked);
	};
	const [is2Clicked, setIs2Clicked] = useState();
	const setStyle2 = () => {
		setIs1Clicked(false);
		setIs2Clicked(true);
		setIs3Clicked(false);
		setIs4Clicked(false);
		setIs5Clicked(false);
		setIs6Clicked(false);
		console.log(is2Clicked);
	};
	const [is3Clicked, setIs3Clicked] = useState();
	const setStyle3 = () => {
		setIs1Clicked(false);
		setIs2Clicked(false);
		setIs3Clicked(true);
		setIs4Clicked(false);
		setIs5Clicked(false);
		setIs6Clicked(false);
		console.log(is3Clicked);
	};
	const [is4Clicked, setIs4Clicked] = useState();
	const setStyle4 = () => {
		setIs1Clicked(false);
		setIs2Clicked(false);
		setIs3Clicked(false);
		setIs4Clicked(true);
		setIs5Clicked(false);
		setIs6Clicked(false);
		console.log(is4Clicked);
	};
	const [is5Clicked, setIs5Clicked] = useState();
	const setStyle5 = () => {
		setIs1Clicked(false);
		setIs2Clicked(false);
		setIs3Clicked(false);
		setIs4Clicked(false);
		setIs5Clicked(true);
		setIs6Clicked(false);
		console.log(is5Clicked);
	};
	const [is6Clicked, setIs6Clicked] = useState();
	const setStyle6 = () => {
		setIs1Clicked(false);
		setIs2Clicked(false);
		setIs3Clicked(false);
		setIs4Clicked(false);
		setIs5Clicked(false);
		setIs6Clicked(true);
		console.log(is6Clicked);
	};

	useEffect(() => {
		setIs1Clicked(false);
		setIs2Clicked(false);
		setIs3Clicked(false);
		setIs4Clicked(false);
		setIs5Clicked(false);
		setIs6Clicked(false);
	}, []);

	const [selectedOTT, setSelectedOTT] = useState("");
	useEffect(() => {
		setSelectedOTT("");
		if (
			is1Clicked === true &&
			otts.map((row) => row.ott_name).includes("Netflix") === true
		)
			setSelectedOTT("Netflix");
		if (
			is2Clicked === true &&
			otts.map((row) => row.ott_name).includes("Watcha") === true
		)
			setSelectedOTT("Watcha");
		if (
			is3Clicked === true &&
			otts.map((row) => row.ott_name).includes("Wavve") === true
		)
			setSelectedOTT("Wavve");
		if (
			is4Clicked === true &&
			otts.map((row) => row.ott_name).includes("Disney Plus") === true
		)
			setSelectedOTT("Disney Plus");
		if (
			is5Clicked === true &&
			otts.map((row) => row.ott_name).includes("Apple TV") === true
		)
			setSelectedOTT("Apple TV");
		if (
			is6Clicked === true &&
			otts.map((row) => row.ott_name).includes("Prime Video") === true
		)
			setSelectedOTT("Prime Video");
		printNumber();
	});

	const styleBoolean = (name) => {
		if (selectedOTT === name) return true;
		else return false;
	};

	const printNumber = () => {
		let number;
		for (let i = 0; i < otts.length; i++)
			if (selectedOTT === otts[i].ott_name) {
				number = otts[i].won_per_min;
			}
		return number;
	};

	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div className="inner">
						<Container>
							<div style={{ padding: "5vh 4vw 5vh 4vw" }}>
								<Title>계산하고자 하는 OTT 서비스</Title>
								<div style={{ display: "flex" }}>
									<DisableWrapper>
										<DisableRect
											className="dis1"
											onClick={setStyle1}
											style={{
												display: styleBoolean("Netflix") ? "none" : "block",
											}}
										/>
										<DisableRect
											className="dis2"
											onClick={setStyle2}
											style={{
												display: styleBoolean("Watcha") ? "none" : "block",
											}}
										/>
										<DisableRect
											className="dis3"
											onClick={setStyle3}
											style={{
												display: styleBoolean("Wavve") ? "none" : "block",
											}}
										/>
										<DisableRect
											className="dis4"
											onClick={setStyle4}
											style={{
												display: styleBoolean("Disney Plus") ? "none" : "block",
											}}
										/>
										<DisableRect
											className="dis5"
											onClick={setStyle5}
											style={{
												display: styleBoolean("Apple TV") ? "none" : "block",
											}}
										/>
										<DisableRect
											className="dis6"
											onClick={setStyle6}
											style={{
												display: styleBoolean("Prime Video") ? "none" : "block",
											}}
										/>
									</DisableWrapper>
								</div>
								<OTTWrapper>
									<NetflixRect
										className="ottrect1"
										style={{
											border: styleBoolean("Netflix")
												? "1px solid #FFFFFF"
												: "0px",
											boxShadow: styleBoolean("Netflix")
												? "0px 0px 1.8vw 0.5vw #FFF"
												: "0px 0px 0px 0px #FFF",
											borderRadius: "1.7vw",
										}}
									/>
									<WatchaRect
										className="ottrect2"
										style={{
											border: styleBoolean("Watcha")
												? "1px solid #FFFFFF"
												: "0px",
											boxShadow: styleBoolean("Watcha")
												? "0px 0px 1.8vw 0.5vw #FFF"
												: "0px 0px 0px 0px #FFF",
											borderRadius: "1.7vw",
										}}
									/>
									<WavveRect
										className="ottrect3"
										style={{
											border: styleBoolean("Wavve")
												? "1px solid #FFFFFF"
												: "0px",
											boxShadow: styleBoolean("Wavve")
												? "0px 0px 1.8vw 0.5vw #FFF"
												: "0px 0px 0px 0px #FFF",
											borderRadius: "1.7vw",
										}}
									/>
									<DisneyPlusRect
										className="ottrect4"
										style={{
											border: styleBoolean("Disney Plus")
												? "1px solid #FFFFFF"
												: "0px",
											boxShadow: styleBoolean("Disney Plus")
												? "0px 0px 1.8vw 0.5vw #FFF"
												: "0px 0px 0px 0px #FFF",
											borderRadius: "1.7vw",
										}}
									/>
									<AppleTVRect
										className="ottrect5"
										style={{
											border: styleBoolean("Apple TV")
												? "1px solid #FFFFFF"
												: "0px",
											boxShadow: styleBoolean("Apple TV")
												? "0px 0px 1.8vw 0.5vw #FFF"
												: "0px 0px 0px 0px #FFF",
											borderRadius: "1.7vw",
										}}
									/>
									<PrimeVideoRect
										className="ottrect6"
										style={{
											border: styleBoolean("Prime Video")
												? "1px solid #FFFFFF"
												: "0px",
											boxShadow: styleBoolean("Prime Video")
												? "0px 0px 1.8vw 0.5vw #FFF"
												: "0px 0px 0px 0px #FFF",
											borderRadius: "1.7vw",
										}}
									/>
								</OTTWrapper>
								<Line />
								<TexWrapper>
									<DetailText>(구독료) 원 / (총 시간) 분 = </DetailText>
									<NumberWrapper>
										<Number>{printNumber()}</Number>
									</NumberWrapper>
									<LargeText>원</LargeText>
									<SmallText>/ 1분</SmallText>
								</TexWrapper>
								<Link to="/calculator/data" style={{ textDecoration: "none" }}>
									<Button>
										<CalculatorDataIcon />
										<ButtonText>통계 보러가기</ButtonText>
									</Button>
								</Link>
							</div>
						</Container>
					</div>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default Calculator;

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

const Title = styled.h1`
	font-weight: 600;
	font-size: 1.7vw;
	line-height: 1.7vw;
	text-align: center;
	color: #fff;
`;

const OTTWrapper = styled.div`
	position: relative;
	display: flex;
	svg {
		cursor: pointer;
		width: 7vw;
		height: auto;
		margin-top: 5vh;
		position: absolute;
	}
	.ottrect1 {
		left: 4vw;
	}
	.ottrect2 {
		left: 15.4vw;
	}
	.ottrect3 {
		left: 26.8vw;
	}
	.ottrect4 {
		left: 38.2vw;
	}
	.ottrect5 {
		left: 49.6vw;
	}
	.ottrect6 {
		left: 61vw;
	}
`;

const DisableWrapper = styled.div`
	position: absolute;
	z-index: 30;
	display: flex;
	svg {
		cursor: pointer;
		width: 7vw;
		height: auto;
		margin-top: 5vh;
		position: absolute;
	}
	.dis1 {
		left: 4vw;
	}
	.dis2 {
		left: 15.4vw;
	}
	.dis3 {
		left: 26.8vw;
	}
	.dis4 {
		left: 38.2vw;
	}
	.dis5 {
		left: 49.6vw;
	}
	.dis6 {
		left: 61vw;
	}
`;

const Line = styled.div`
	position: relative;
	margin: 0 auto;
	margin-top: 28vh;
	width: 72vw;
	border: 1.5px solid #fff;
	background-color: #fff;
`;

const TexWrapper = styled.div`
	margin-top: 10vh;
	display: flex;
	position: relative;
	left: 43vw;
	width: 30vw;
	height: 4vh;
	h1 {
		margin-block-start: 0;
		margin-block-end: 0;
	}
`;

const DetailText = styled.h1`
	font-weight: 500;
	font-size: 1.3vw;
	line-height: 4vw;
	color: #fff;
`;

const NumberWrapper = styled.div`
	width: 7vw;
	height: 4vh;
	padding-right: 0.7vw;
`;

const Number = styled.h1`
	font-weight: 600;
	font-size: 2.5vw;
	line-height: 3.5vw;
	float: right;
	color: #fff;
`;

const LargeText = styled.h1`
	font-weight: 500;
	font-size: 1.6vw;
	line-height: 4vw;
	color: #fff;
`;

const SmallText = styled.h1`
	font-weight: 500;
	font-size: 1.3vw;
	line-height: 4.2vw;
	padding-left: 0.5vw;
	color: #fff;
`;

const Button = styled.div`
	position: absolute;
	width: 16vw;
	height: 7.8vh;
	line-height: 7.6vh;
	bottom: 5.5vh;
	margin-left: 0.1vw;
	background: #d38189;
	box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
	border-radius: 10vw;
	display: flex;
	svg {
		width: 2vw;
		height: auto;
		padding-left: 1.7vw;
		padding-right: 1vw;
	}
`;

const ButtonText = styled.div`
	font-weight: 600;
	font-size: 1.5vw;
	line-height: 7.8vh;
	color: #fff;
`;

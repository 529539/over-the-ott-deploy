import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LargeLogo } from "../static/landingLogo.svg";
import { ReactComponent as SmallLogo } from "../static/HeaderLogo.svg";
import { ReactComponent as FooterLogo } from "../static/loginLogo.svg";
import Background from "../components/Background";
import { ReactComponent as TutorialBackground } from "../static/TutorialBackground.svg";

const Landing = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<LandingWrapper>
				<Background />
				<ContentWrapper>
					<LargeLogo className="logo" />
					<ButtonWrapper>
						<Link to="/login">
							<LoginBtn>로그인</LoginBtn>
						</Link>
						<Link to="/signup">
							<SignupBtn>회원가입</SignupBtn>
						</Link>
					</ButtonWrapper>
				</ContentWrapper>
				<TutorialWrapper>
					<TitleTextWrapper>
						<TitleText1>똑똑한 소비를 위한 해지할 결심!</TitleText1>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<TitleText2>지금 바로</TitleText2>
							<TitleText2 style={{ marginLeft: "1vw", color: "#D38189" }}>
								OVER THE OTT
							</TitleText2>
							<TitleText2>에서 시작해 보세요!</TitleText2>
						</div>
					</TitleTextWrapper>
					<ColorWrapper>
						<ColorContainer>
							<ColorDiv style={{ backgroundColor: "#D90B1C" }} />
							<ColorDiv style={{ backgroundColor: "#FF0558" }} />
							<ColorDiv style={{ backgroundColor: "#1F4EF5" }} />
							<ColorDiv style={{ backgroundColor: "#192F72" }} />
							<ColorDiv style={{ backgroundColor: "#77848C" }} />
							<ColorDiv style={{ backgroundColor: "#10BBE0" }} />
						</ColorContainer>
					</ColorWrapper>
					<DetailWrapper>
						<div>
							<DetailBox>
								<DetailText>체크리스트</DetailText>
								<DetailTextLight>에서 빠른 검색으로 나만의</DetailTextLight>
								<DetailTextBold style={{ marginLeft: "0.5vw" }}>
									정주행 리스트
								</DetailTextBold>
								<DetailTextLight>와</DetailTextLight>
								<DetailTextBold style={{ marginLeft: "0.5vw" }}>
									완주 리스트
								</DetailTextBold>
								<DetailTextLight>를 채워보세요.</DetailTextLight>
							</DetailBox>
							<div>
								<LineContainer>
									<Cricle />
									<Line>
										정주행 중인 작품을 검색하고 나의 정주행 리스트에 담아 기록할
										수 있어요.
									</Line>
								</LineContainer>
								<Border />
								<LineContainer>
									<Cricle />
									<Line>정주행을 마치면 완주 리스트로 옮겨 드려요.</Line>
								</LineContainer>
								<Border />
								<LineContainer>
									<Cricle />
									<Line>
										공유하기 기능으로 나만의 리스트를 친구들과 공유해 보세요.
									</Line>
								</LineContainer>
							</div>
							<DetailBox>
								<DetailText>계산기</DetailText>
								<DetailTextLight>에서 구독 중인 OTT의</DetailTextLight>
								<DetailTextBold style={{ marginLeft: "0.5vw" }}>
									분당 사용 요금
								</DetailTextBold>
								<DetailTextLight>과</DetailTextLight>
								<DetailTextBold style={{ marginLeft: "0.5vw" }}>
									이용 시간
								</DetailTextBold>
								<DetailTextLight>을 비교해 보세요.</DetailTextLight>
							</DetailBox>
							<div>
								<LineContainer>
									<Cricle />
									<Line>
										체크 리스트를 기반으로 OTT별로 시청 시간을 자동으로 분석해
										드려요.
									</Line>
								</LineContainer>
								<Border />
								<LineContainer>
									<Cricle />
									<Line>
										자신이 구독중인 OTT를 얼마나 잘 활용하고 있는지 빠르게
										비교해 보세요.
									</Line>
								</LineContainer>
							</div>
							<DetailBox>
								<DetailText>캘린더</DetailText>
								<DetailTextLight>에서</DetailTextLight>
								<DetailTextBold style={{ marginLeft: "0.5vw" }}>
									구독 갱신 날짜
								</DetailTextBold>
								<DetailTextLight>
									를 한눈에 확인해 보세요. 해지를 잊지 않도록 알림으로
									알려드릴게요.
								</DetailTextLight>
							</DetailBox>
							<div>
								<LineContainer>
									<Cricle />
									<Line>매달 서비스 결제일을 캘린더에 표시해 드려요.</Line>
								</LineContainer>
								<Border />
								<LineContainer>
									<Cricle />
									<Line>
										다음 결제일 까지 남은 날 수를 따로 표시해 주어 남은 이용
										기간을 빠르게 파악할 수 있어요.
									</Line>
								</LineContainer>
							</div>
						</div>
					</DetailWrapper>
					<BackCircle1 />
					<BackCircle2 />
					<PointWrapper>
						<div>
							<TitleText1>효율적인 OTT 서비스 구독과 해지를 위한</TitleText1>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									marginTop: "0.5vh",
								}}
							>
								<TitleText2 style={{ color: "#D38189" }}>
									OVER THE OTT
								</TitleText2>
								<TitleText2>만의 차별 포인트!</TitleText2>
							</div>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<PointBox>
									<div>
										<Number style={{ left: "7vw" }}>01</Number>
										<PointTitleContainer>
											<PointTitle>이용 로그에 초점을 두다</PointTitle>
										</PointTitleContainer>
										<PointBorderContainer>
											<PointBorder />
										</PointBorderContainer>
										<PointText>
											OVER THE OTT는 <br />
											<br />
											OTT 작품 추전, 작품 정보 등을 제공하는 <br />타 OTT 보조
											서비스와는 달리
										</PointText>
										<div style={{ display: "flex", justifyContent: "center" }}>
											<PointText style={{ fontWeight: "700" }}>
												사용자의 이용 로그 기록에 초점
											</PointText>
											<PointText>을 두고 있습니다.</PointText>
										</div>
									</div>
								</PointBox>
								<PointBox>
									<div>
										<Number style={{ left: "4.5vw" }}>02</Number>
										<PointTitleContainer>
											<PointTitle>이용 로그를 통한 똑똑한 소비</PointTitle>
										</PointTitleContainer>
										<PointBorderContainer>
											<PointBorder />
										</PointBorderContainer>
										<PointText>
											잘 쓰지 않지만 이용 정도가 와닿지 않아 <br />
											무의식적으로 연장해 온 구독 서비스가 있진 않으셨나요?
											<br />
											<br />
										</PointText>
										<div style={{ display: "flex", justifyContent: "center" }}>
											<PointText>OVER THE OTT는</PointText>
											<PointText
												style={{ marginLeft: "0.5vw", fontWeight: "700" }}
											>
												시각적, 직관적 정보와 수치
											</PointText>
											<PointText>를 통해</PointText>
										</div>

										<PointText>
											사용자가 '해지할 결심'을 하게 해주는 서비스로 <br />
											OTT 서비스 이용에서 똑똑한 소비를 할 수 있게 도와줍니다.
										</PointText>
									</div>
								</PointBox>
							</div>
						</div>
					</PointWrapper>
					<LogoContainer>
						<SmallLogo />
					</LogoContainer>
					<FooterWrapper>
						<div className="inner">
							<TextWrapper>
								<FooterLogo />
								<TextParagraph>
									<Bold>CONTACT US</Bold>
									<Light>
										+02 123 1234
										<br /> Code1210@mail.com
									</Light>
								</TextParagraph>
								<TextParagraph>
									<Bold>INFORMATION</Bold>
									<Light>
										(주) OVER THE OTT | 대표 이사 000 | 코드시 코드문구 일이동
										멋쟁이로 00-0 | 개인정보관리책임자 : 000
										<br /> 팩스번호 00-000-0000 | 문의시간 오전 10시-오후 10시
									</Light>
								</TextParagraph>
							</TextWrapper>
							<LineWrapper>
								<div className="line"></div>
							</LineWrapper>
							<BottomText>Over the OTT. All Rights Reserved.</BottomText>
						</div>
					</FooterWrapper>
					<TutorialBackground />
				</TutorialWrapper>
			</LandingWrapper>
		</>
	);
};

export default Landing;

const LandingWrapper = styled.div`
	width: 100vw;
	height: auto;
	margin: 0;
	padding: 0;
`;

const ContentWrapper = styled.div`
	position: absolute;
	z-index: 2;
	width: 37.34vw;
	height: 48.92vh;
	margin-left: 9.06vw;
	margin-top: 25vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.logo {
		width: 37.34vw;
	}
`;

const ButtonWrapper = styled.div`
	width: 37.34vw;
	height: 8.42vh;
	display: flex;
	margin-top: 5vh;
	justify-content: space-between;
	button {
		cursor: pointer;
		font-weight: 600;
		font-size: 28px;
		border-radius: 52.5px;
		border-style: none;
		opacity: 0.8;
		box-shadow: 0px 2px 20px rgba(102, 102, 102, 0.3);
	}
	a {
		width: 18.67vw;
		height: 8.45vh;
		display: flex;
		justify-content: center;
		text-decoration: none;
	}
`;

const LoginBtn = styled.button`
	width: 16.04vw;
	height: 8.45vh;
	background: #ffffff;
	color: #d38189;
`;

const SignupBtn = styled.button`
	width: 16.04vw;
	height: 8.45vh;
	background: #d38189;
	color: #ffffff;
`;

const TutorialWrapper = styled.div`
	width: 100vw;
	height: auto;
	position: absolute;
	top: 100vh;
`;

const TitleTextWrapper = styled.div`
	margin-top: 20vh;
	width: 100vw;
	height: 10vh;
`;

const TitleText1 = styled.div`
	font-weight: 500;
	font-size: 1.5vw;
	text-align: center;
	width: 100vw;
`;

const TitleText2 = styled.div`
	font-weight: 600;
	font-size: 2vw;
	text-align: center;
`;

const ColorWrapper = styled.div`
	margin-top: 15vh;
	width: 100vw;
	display: flex;
	justify-content: center;
`;

const ColorContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 15vw;
	height: 1vh;
`;

const ColorDiv = styled.div`
	width: 0.7vw;
	height: 0.7vw;
	border-radius: 50%;
`;

const DetailWrapper = styled.div`
	margin-top: 10vh;
	display: flex;
	justify-content: center;
`;

const DetailBox = styled.div`
	box-shadow: 0px 0.3vw 0.8vw rgba(71, 71, 71, 0.25);
	border-radius: 1.2vw;
	width: 70vw;
	height: 18vh;
	margin: 8vh 0;
	display: flex;
	padding-left: 3vw;
	align-items: center;
`;

const DetailText = styled.div`
	font-weight: 700;
	font-size: 2vw;
	color: #d38189;
	margin-right: 0.7vw;
`;

const DetailTextLight = styled.div`
	font-weight: 300;
	font-size: 1.5vw;
`;

const DetailTextBold = styled.div`
	font-weight: 600;
	font-size: 1.5vw;
`;

const LineContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10vw;
`;

const Cricle = styled.div`
	background-color: #d38189;
	width: 0.3vw;
	height: 0.3vw;
	border-radius: 50%;
`;

const Line = styled.div`
	font-weight: 300;
	font-size: 1.3vw;
	color: #5b5b5b;
	margin-left: 1.5vw;
`;

const Border = styled.div`
	border-left: 1px solid #d38189;
	width: 0;
	height: 4vh;
	margin: 1vh 0 1vh 10.1vw;
`;

const BackCircle1 = styled.div`
	position: absolute;
	width: 18vw;
	height: 18vw;
	left: 78vw;
	top: 217vh;
	border: 1px solid #d38189;
	border-radius: 50%;
`;

const BackCircle2 = styled.div`
	position: absolute;
	width: 5vw;
	height: 5vw;
	left: 91vw;
	top: 242vh;
	border: 1px solid #d38189;
	border-radius: 50%;
`;

const PointWrapper = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	top: 252vh;
`;

const PointBox = styled.div`
	position: relative;
	margin: 12vh 2vw 0 2vw;
	background: #ffffff;
	box-shadow: 0px 0.2vw 1vw rgba(71, 71, 71, 0.25);
	border-radius: 0.5vw;
	width: 40vw;
	height: 60vh;
	display: flex;
	justify-content: center;
`;

const Number = styled.div`
	position: absolute;
	font-weight: 600;
	font-size: 5.2vw;
	color: #feebed;
	top: 5vh;
`;

const PointTitleContainer = styled.div`
	width: 40vw;
	height: 5vh;
	display: flex;
	justify-content: center;
`;

const PointTitle = styled.div`
	position: absolute;
	z-index: 5;
	font-weight: 600;
	font-size: 1.8vw;
	color: #333333;
	top: 12vh;
`;

const PointBorderContainer = styled.div`
	margin-top: 16vh;
	width: 40vw;
	height: 3vh;
	display: flex;
	justify-content: center;
	margin-bottom: 3vh;
`;

const PointBorder = styled.div`
	width: 9vw;
	height: 0px;
	border-bottom: 1.5px solid #d7d7d7;
`;

const PointText = styled.div`
	font-weight: 400;
	font-size: 1.2vw;
	line-height: 1.9vw;
	color: #333333;
	text-align: center;
`;

const LogoContainer = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 50vh;
`;

const FooterWrapper = styled.div`
	width: 100vw;
	height: 40vh;
	position: absolute;
	bottom: 0;
	z-index: 10;
	background-color: #000;
	display: flex;
	justify-content: center;
	.inner {
		width: 95vw;
		height: 30vh;
	}
`;

const TextWrapper = styled.div`
	width: 95vw;
	height: 25vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TextParagraph = styled.div`
	display: flex;
	margin-left: 5vw;
`;

const Bold = styled.div`
	font-weight: 500;
	font-size: 1vw;
	color: #fff;
	margin-right: 1vw;
`;

const Light = styled.div`
	font-weight: 300;
	font-size: 0.9vw;
	line-height: 1.3vw;
	color: #fff;
`;

const LineWrapper = styled.div`
	width: 95vw;
	height: 7vh;
	display: flex;
	justify-content: center;
	.line {
		border: 1px solid #3e3e3e;
		width: 90vw;
		height: 0;
	}
`;

const BottomText = styled.div`
	width: 95vw;
	font-weight: 300;
	font-size: 0.8vw;
	text-align: center;
	color: #fff;
`;

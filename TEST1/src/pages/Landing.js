import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LargeLogo } from "../static/landingLogo.svg";
import { ReactComponent as SmallLogo } from "../static/loginLogo.svg";
import Background from "../components/Background";

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
					<FooterWrapper>
						<div className="inner">
							<TextWrapper>
								<SmallLogo />
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
	height: 200vh;
	position: absolute;
	top: 100vh;
	background-color: #fff;
`;

const FooterWrapper = styled.div`
	width: 100vw;
	height: 30vh;
	position: absolute;
	z-index: 10;
	bottom: 1vh;
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
	height: 22vh;
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
	height: 3vh;
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

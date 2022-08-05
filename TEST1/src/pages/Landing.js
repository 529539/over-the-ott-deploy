// eslint-disable-next-line
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../static/landingLogo.svg";
import Background from "../components/Background";

const Landing = () => {
	return (
		<LandingWrapper>
			<Background />
			<ContentWrapper>
				<Logo className="logo" />
				<ButtonWrapper>
					<Link to="/login">
						<LoginBtn>로그인</LoginBtn>
					</Link>
					<Link to="/signup">
						<SignupBtn>회원가입</SignupBtn>
					</Link>
				</ButtonWrapper>
			</ContentWrapper>
		</LandingWrapper>
	);
};
const LandingWrapper = styled.div`
	width: 100%;
	height: auto;
	margin: 0;
	padding: 0;
`;
const ContentWrapper = styled.div`
	position: absolute;
	z-index: 2;
	width: 40%;
	height: 60%;
	margin-left: 5%;
	margin-top: 12%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.logo {
		width: 100%;
	}
`;
const ButtonWrapper = styled.div`
	width: 100%;
	height: 20%;
	display: flex;
	margin-top: 9%;
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
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		text-decoration: none;
	}
`;
const LoginBtn = styled.button`
	width: 86%;
	height: 81px;
	background: #ffffff;
	color: #d38189;
`;
const SignupBtn = styled.button`
	width: 86%;
	height: 81px;
	background: #d38189;
	color: #ffffff;
`;
export default Landing;

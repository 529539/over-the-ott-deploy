// eslint-disable-next-line
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../static/landingLogo.svg';
import Background from '../components/Background';

const Landing = () => {
	return (
		<LadingWrapper>
			<Background />
			<ContentWrapper>
				<Logo className='logo' />
				<ButtonWrapper>
					<Link to='/login'>
						<LoginBtn>로그인</LoginBtn>
					</Link>
					<Link to='/signup'>
						<SignupBtn>회원가입</SignupBtn>
					</Link>
				</ButtonWrapper>
			</ContentWrapper>
		</LadingWrapper>
	);
};
const LadingWrapper = styled.div`
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
	margin-top: 31.75vh;
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
export default Landing;

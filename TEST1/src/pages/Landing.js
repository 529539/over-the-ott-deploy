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
	width: 100%;
	height: auto;
	margin: 0;
	padding: 0;
	.logo {
		//로고 아이콘 하단에 공백 없앤 파일 다시 받아 위치 수정
		width: 100%;
		border: solid;
	}
`;
const ContentWrapper = styled.div`
	border: solid;
	position: absolute;
	z-index: 2;
	width: 37%; //717px;
	height: 50%; //499px;
	margin-left: 5%;
	margin-top: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ButtonWrapper = styled.div`
	border: solid;
	width: 100%;
	height: 23%; //91px;
	display: flex;
	position: relative;
	margin-top: 9%;
	justify-content: space-around;
	button {
		font-weight: 600;
		font-size: 28px;
		border-radius: 52.5px;
		border-style: none;
		opacity: 0.8;
		box-shadow: 0px 2px 20px rgba(102, 102, 102, 0.3);
	}
	a {
		width: 100%; //358px
		height: 100%; //91px
	}
`;
const LoginBtn = styled.button`
	width: 288px;
	height: 81px;
	background: #ffffff;
	color: #d38189;
`;
const SignupBtn = styled.button`
	width: 86%; //308px;
	height: 100%; //91px;
	background: #d38189;
	color: #ffffff;
`;
export default Landing;

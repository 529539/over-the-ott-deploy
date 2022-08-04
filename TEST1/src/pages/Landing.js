import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../static/logo.svg';
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
	}
`;
const ContentWrapper = styled.div`
	position: absolute;
	z-index: 2;
	width: 717px;
	height: 519px;
	margin-left: 5%;
	margin-top: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ButtonWrapper = styled.div`
	width: 667px;
	height: 91px;
	display: flex;
	position: relative;
	/* margin-bottom: 30px; */
	justify-content: space-around;
	button {
		font-weight: 600;
		font-size: 28px;
	}
`;
const LoginBtn = styled.button`
	width: 280px;
	height: 81px;
	background: #ffffff;
	opacity: 0.8;
	box-shadow: 0px 2px 20px rgba(102, 102, 102, 0.3);
	border-radius: 52.5px;
	border-style: none;
	color: #d38189;
`;
const SignupBtn = styled.button`
	width: 280px;
	height: 81px;
	background: #d38189;
	opacity: 0.8;
	box-shadow: 0px 2px 20px rgba(102, 102, 102, 0.3);
	border-radius: 52.5px;
	border-style: none;
	color: #ffffff;
`;
export default Landing;

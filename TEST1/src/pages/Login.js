import styled from 'styled-components';
import Background from '../components/Background';
import { ReactComponent as Logo } from '../static/loginLogo.svg';
import { ReactComponent as Notification } from '../static/notificationW.svg';
import { BsFillPersonFill } from 'react-icons/bs';
import LoginBox from '../components/login/LoginBox';

const Login = () => {
	return (
		<>
			<LoginWrapper>
				<Background />
				<LoginHeader>
					<Logo className='logo' />
					<IconsWrapper>
						<Notification className='notiIcon' />
						<BsFillPersonFill className='userIcon' />
					</IconsWrapper>
				</LoginHeader>
				<LoginBox />
			</LoginWrapper>
		</>
	);
};

const LoginWrapper = styled.div`
	width: 100vw;
	height: auto;
`;
const LoginHeader = styled.div`
	width: 100vw;
	height: 3.98vh;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 2.14vw;
	.logo {
		width: 10.41vw;
		height: 3.98vh;
		margin-left: 2.5vw;
	}
`;
const IconsWrapper = styled.div`
	width: 4.29vw;
	margin-right: 4.19vw;
	display: flex;
	justify-content: space-between;
	.notiIcon {
		width: 1.17vw;
		height: 2.08vh;
	}
	.userIcon {
		color: white;
		width: 1.17vw;
		height: 2.17vh;
	}
`;
export default Login;

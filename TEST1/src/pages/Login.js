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
	width: 100%;
	height: auto;
`;
const LoginHeader = styled.div`
	width: 100%;
	height: 43px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 3%;
	.logo {
		margin-left: 2%;
	}
`;
const IconsWrapper = styled.div`
	width: 87px;
	margin-right: 3.9%;
	display: flex;
	justify-content: space-between;
	.notiIcon {
		width: 22.5px;
		height: 22.5px;
	}
	.userIcon {
		color: white;
		width: 22.51px;
		height: 23.5px;
	}
`;
export default Login;

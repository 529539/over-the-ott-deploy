import styled from 'styled-components';
import LoginBackground from '../components/login/LoginBackground';
import LoginBox from '../components/login/LoginBox';

const Login = () => {
	return (
		<>
			<LoginWrapper>
				<LoginBackground />
				<LoginBox />
			</LoginWrapper>
		</>
	);
};

export default Login;

const LoginWrapper = styled.div`
	width: 100vw;
	height: auto;
`;

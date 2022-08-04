import styled from 'styled-components';
import Background from '../components/Background';
import LoginBox from '../components/login/LoginBox';

const Login = () => {
	return (
		<>
			<Background />
			<LoginWrapper>
				<LoginBox />
			</LoginWrapper>
		</>
	);
};

const LoginWrapper = styled.div`
	width: 100%;
	height: 850px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default Login;

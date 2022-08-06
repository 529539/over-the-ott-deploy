import styled from "styled-components";
import Background from "../components/Background";
import { ReactComponent as Logo } from "../static/loginLogo.svg";
import LoginBox from "../components/login/LoginBox";

const Login = () => {
	return (
		<>
			<LoginWrapper>
				<Background />
				<LoginHeader>
					<Logo className="logo" />
				</LoginHeader>
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
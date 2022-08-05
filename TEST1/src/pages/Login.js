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
export default Login;

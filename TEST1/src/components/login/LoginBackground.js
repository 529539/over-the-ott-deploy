import React from 'react';
import styled from 'styled-components';
import Background from '../Background';
import { ReactComponent as Logo } from '../../static/loginLogo.svg';

const LoginBackground = () => {
	return (
		<SignupWrapper>
			<Background />
			<SignupHeader>
				<Logo className='logo' />
			</SignupHeader>
		</SignupWrapper>
	);
};

const SignupWrapper = styled.div`
	width: 100vw;
	height: auto;
`;
const SignupHeader = styled.div`
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
export default LoginBackground;

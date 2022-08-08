import React from 'react';
import styled from 'styled-components';
import LoginBackground from '../components/login/LoginBackground';
import SignupBox from '../components/signup/SignupBox';

const Signup = () => {
	return (
		<SignupWrapper>
			<LoginBackground />
			<SignupBox />
		</SignupWrapper>
	);
};

const SignupWrapper = styled.div`
	width: 100vw;
	height: auto;
`;
export default Signup;

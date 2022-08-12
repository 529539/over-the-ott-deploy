import styled from 'styled-components';
import { useState, useEffect } from 'react';
import LoginBackground from '../components/login/LoginBackground';
import SettingBox from '../components/signup/SettingBox';
import data from '../db.json';

const SignupSetting = () => {
	return (
		<Wrapper>
			<LoginBackground />
			<SettingBox />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
`;

export default SignupSetting;

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import LoginBackground from '../components/login/LoginBackground';
import SettingBox from '../components/signup/SettingBox';
import data from '../db.json';

const SignupSetting = () => {
	//ott icon 받아오기
	const [ottIcons, setOttIcons] = useState([]);
	useEffect(() => {
		getOttIcons();
	}, []);

	const getOttIcons = () => {
		setOttIcons(data.ottArray);
	};
	return (
		<Wrapper>
			<LoginBackground />
			{/* <SettingBox ottIcons={ottIcons} /> */}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
`;

export default SignupSetting;

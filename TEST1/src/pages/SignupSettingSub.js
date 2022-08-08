import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginBackground from '../components/login/LoginBackground';
import SignupSettingBox from '../components/signup/SignupSettingBox';

const SignupSettingSub = () => {
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [btnText, setBtnText] = useState('');
	const [btnActive, setBtnActive] = useState(false);
	const [subPage, setSubPage] = useState(true);

	useEffect(() => {
		setTitle1('OTT Information');
		setTitle2('구독 중인 OTT 정보 입력하기');
		setBtnText('확인');
	}, []);
	return (
		<Wrapper>
			<LoginBackground />
			<SignupSettingBox
				title1={title1}
				title2={title2}
				btnText={btnText}
				btnActive={btnActive}
				subPage={subPage}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
`;

export default SignupSettingSub;

import { useState, useEffect } from 'react';
import styled from 'styled-components';

import LoginBackground from '../components/login/LoginBackground';
import SignupSettingBox from '../components/signup/SignupSettingBox';

const SignupSetting = () => {
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [btnText, setBtnText] = useState('');
	const [btnActive, setBtnActive] = useState(false);
	const [subPage, setSubPage] = useState(false);

	useEffect(() => {
		setTitle1('Create an account');
		setTitle2('회원가입하기');
		setBtnText('다음');
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

export default SignupSetting;

import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ottArray from '../../db.json';
import SettingForm from './SettingForm';

const SettingSubBox = () => {
	// form에 들어갈 text 및 상태 관리
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [btnActive, setBtnActive] = useState(false);
	const [btnText, setBtnText] = useState('');

	useEffect(() => {
		setTitle1('OTT Information');
		setTitle2('구독 중인 OTT 정보 입력하기');
		setBtnText('확인');
	}, []);

	return (
		<Wrapper>
			<SettingForm
				title1={title1}
				title2={title2}
				btnText={btnText}
				btnActive={btnActive}
			/>
		</Wrapper>
	);
};
const Wrapper = styled.div``;

export default SettingSubBox;

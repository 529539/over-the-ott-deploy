import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import data from '../../db.json';
import SettingForm from './SettingForm';

const SettingBox = () => {
	// form에 들어갈 text 및 상태 관리
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [btnActive, setBtnActive] = useState(false);
	const [btnText, setBtnText] = useState('');
	const [ottIcons, setOttIcons] = useState([]);

	//user에게 받아올 정보 관리
	const [newName, setNewName] = useState('');
	const [otts, setOtts] = useState([]);

	useEffect(() => {
		getOttIcons();
		setTitle1('Create an account');
		setTitle2('회원가입하기');
		setBtnText('다음');
	}, []);

	//ott icon 받아오기
	const getOttIcons = () => {
		setOttIcons(data.ottArray);
	};

	return (
		<Wrapper>
			<SettingForm
				title1={title1}
				title2={title2}
				btnText={btnText}
				btnActive={btnActive}
			/>
			<InputWrapper>
				<InputUserName>
					<p>사용자 이름을 입력해 주세요</p>
					<input value={newName} onChange={e => setNewName(e.target.value)} />
				</InputUserName>
				<SelectOTT>
					<p>구독 중인 OTT를 모두 선택해 주세요</p>
					<OTTWrapper>
						{ottIcons.map(icon => (
							<button key={icon.id}>
								<img src={icon.img} />
							</button>
						))}
					</OTTWrapper>
				</SelectOTT>
			</InputWrapper>
		</Wrapper>
	);
};
const Wrapper = styled.div``;
const InputWrapper = styled.div`
	position: absolute;
	z-index: 2;
	top: 41.75vh;
	left: 36.56vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 26.87vw;
	height: 24.53vh;
	p {
		font-size: 1.14vw;
		font-weight: 600;
		color: #414141;
		margin: 0 0 1.18vh 0;
	}
`;
const InputUserName = styled.div`
	width: 100%;
	height: 8.98vh;
	display: flex;
	flex-direction: column;
	input {
		height: 4.72vh;
		border: 0.8px solid #979797;
		box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
		border-radius: 0.52vw;
	}
`;
const SelectOTT = styled.div`
	width: 100%;
	height: 10.46vh;
	display: flex;
	flex-direction: column;
`;
const OTTWrapper = styled.div`
	width: 100%;
	height: 5.46vh;
	display: flex;
	justify-content: space-around;
	button {
		width: 2.96vw;
		height: 5.27vh;
		cursor: pointer;
		border-style: none;
		background-color: transparent;
		width: auto;
		height: auto;
	}
	img {
		padding: none;
		width: 100%;
		height: 100%;
	}
`;
export default SettingBox;

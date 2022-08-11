import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import SettingForm from './SettingForm';
import data from '../../db.json';

const SettingBox = () => {
	//Box text 렌더링
	useEffect(() => {
		setTitle1('Create an account');
		setTitle2('회원가입하기');
	}, []);

	// form에 들어갈 text
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	//버튼 관리
	const [btnActive, setBtnActive] = useState(false);
	const [btnText, setBtnText] = useState('');
	//ott 버튼 관리
	const [ottActive, setOttActive] = useState([
		{
			name: 'Netflix',
			active: false,
			img: data.ottArray[0].img,
		},
		{
			name: 'Watcha',
			active: false,
			img: data.ottArray[1].img,
		},
		{
			name: 'Wavve',
			active: false,
			img: data.ottArray[2].img,
		},
		{
			name: 'Disney Plus',
			active: false,
			img: data.ottArray[3].img,
		},
		{
			name: 'Apple TV',
			active: false,
			img: data.ottArray[4].img,
		},
		{
			name: 'Prime Video',
			active: false,
			img: data.ottArray[5].img,
		},
	]);

	//user에게 받아올 정보 관리
	const [newName, setNewName] = useState('');
	const otts = [];

	const SelectOtt = e => {
		console.log(e.target.id);
		setOttActive(
			ottActive.map(ott =>
				ott.name === e.target.id ? { ...ott, active: !ott.active } : ott
			)
		);
		console.log(ottActive);
	};

	return (
		<Wrapper>
			<SettingForm title1={title1} title2={title2} btnText={btnText} />
			<InputWrapper>
				<InputUserName>
					<p>사용자 이름을 입력해 주세요</p>
					<input value={newName} onChange={e => setNewName(e.target.value)} />
				</InputUserName>
				<SelectOTT>
					<p>구독 중인 OTT를 모두 선택해 주세요</p>
					<OTTWrapper>
						{/* {props.ottIcons.map(icon => (
							<img
								id={icon.name}
								src={icon.img}
								onClick={e => SelectOtt(e)}
								style={{ opacity: active ? 1 : 0.4 }}
							/>
						))} */}
						{ottActive.map(ott => (
							<img
								id={ott.name}
								src={ott.img}
								onClick={e => SelectOtt(e)}
								style={{ opacity: ott.active ? 1 : 0.4 }}
							/>
						))}
					</OTTWrapper>
				</SelectOTT>
			</InputWrapper>
			<GoNextBtn className={btnActive ? ' active' : ''}>다음</GoNextBtn>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;
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

	img {
		cursor: pointer;
		padding: none;
		width: 100%;
		height: 100%;
		opacity: 0.4;
		filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));
		&.active {
			opacity: 1;
		}
	}
`;
const GoNextBtn = styled.button`
	cursor: pointer;
	width: 20.67vw;
	height: 4.16vh;
	position: absolute;
	z-index: 2;
	top: 70.55vh;
	background: #dcdcdc;
	border-radius: 1.27vw;
	border-style: none;
	color: #ffffff;
	&.active {
		background-color: #d38189;
	}
`;
export default SettingBox;

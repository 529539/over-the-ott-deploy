import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SettingContainer = () => {
	const [newName, setNewName] = useState('');
	return (
		<Wrapper>
			<InputUserName>
				<p>사용자 이름을 입력해 주세요</p>
				<input value={newName} onChange={e => setNewName(e.target.value)} />
			</InputUserName>
			<SelectOTT>
				<p>구독 중인 OTT를 모두 선택해 주세요</p>
				<OTTWrapper></OTTWrapper>
			</SelectOTT>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 26.87vw;
	height: 24.53vh;
	margin-top: 5.92vh;
	border: solid;
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
`;
export default SettingContainer;

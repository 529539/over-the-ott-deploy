import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../static/xIcon.svg';
import { ReactComponent as GoogleIcon } from '../../static/googleIcon.svg';
import NaverIcon from '../../static/naverIcon.png';
import { ReactComponent as KakaoIcon } from '../../static/kakaoIcon.svg';

const LoginBox = () => {
	const [newID, setNewID] = useState('');
	const [newPW, setNewPW] = useState('');
	const navigate = useNavigate();
	const enterKey = e => {
		if (e.keyCode == 13) {
			InfoSubmit(e);
		}
	};
	const InfoSubmit = e => {
		axios
			.get('http://localhost:8888/login/')
			.then(res => {
				let users = res.data.user;
				let success = 0;
				for (let i = 0; i < users.length; i++) {
					if (users[i].email == newID && users[i].pw == newPW) {
						alert('로그인 성공');
						//성공 시 페이지 이동 수정 필요
						success = 1;
						break;
					}
				}
				success ? navigate('/checklist') : alert('로그인 실패');
			})
			.then(() => {
				setNewID('');
				setNewPW('');
			});
	};
	return (
		<BoxWrapper>
			<LoginTop>
				<Link to='/'>
					<DeleteIcon className='deleteIcon' />
				</Link>
				<p>Login</p>
				<p>로그인 하기</p>
			</LoginTop>
			<div className='line1'></div>
			<LoginCenter>
				<IdInput
					value={newID}
					placeholder='이메일'
					onChange={e => setNewID(e.target.value)}
				/>
				<PwInput
					value={newPW}
					type='password'
					placeholder='비밀번호 (8자 이상, 특수문자 포함)'
					onChange={e => setNewPW(e.target.value)}
					onKeyUp={enterKey}
				/>
				<LoginBtn onClick={InfoSubmit}>확인</LoginBtn>

				<FindLinks>
					<Link to='/signup'>
						<p>회원가입</p>
					</Link>
					<p>|</p>
					<p>아이디찾기</p>
					<p>|</p>
					<p>비밀번호찾기</p>
				</FindLinks>
			</LoginCenter>
			<CenterEndLine>
				<div />
				<p>OR</p>
				<div />
			</CenterEndLine>
			<LoginBottom>
				<p>다음 계정으로 로그인하기</p>
				<SNSIcons>
					<GoogleIcon className='googleIcon' />
					<img src={NaverIcon} className='naverIcon' />
					<KakaoIcon className='kakaoIcon' />
				</SNSIcons>
			</LoginBottom>
		</BoxWrapper>
	);
};

const BoxWrapper = styled.div`
	width: 52.8%; //1006px;
	height: 560px; //65%;
	position: absolute;
	z-index: 2;
	top: 20%;
	left: 23.75%;
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	.line1 {
		width: 63%; //641px;
		height: 0px;
		background: #d7d7d7;
		border: 0.5px solid #d7d7d7;
	}
`;
const LoginTop = styled.div`
	color: #333333;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 20%;
	margin-top: 52px;
	.deleteIcon {
		position: absolute;
		top: 56px;
		right: 52px;
	}
	p:nth-child(2) {
		font-weight: 300;
		font-size: 15px;
		height: 20px;
	}
	p:nth-child(3) {
		margin: 0 0 20px 0;
		font-weight: 600;
		font-size: 27px;
	}
`;
const LoginCenter = styled.div`
	width: 39%;
	height: 238px;
	display: flex;
	flex-direction: column;
	input {
		height: 51px;
		border: 0.8px solid #979797;
		box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
		border-radius: 10px;
		font-weight: 400;
		font-size: 14px;
		color: #767676;
		padding-left: 10px;
		outline: none;
	}
`;
// const LoginForm = styled.form`
// 	width: 100%;
// 	height: 188px;
// 	display: flex;
// 	flex-direction: column;
// `;
const IdInput = styled.input`
	margin: 30px 0 12px 0;
`;
const PwInput = styled.input`
	margin-bottom: 28px;
`;
const LoginBtn = styled.button`
	height: 51px;
	background: #d38189;
	border-radius: 24.5px;
	border-style: none;
	font-weight: 400;
	font-size: 18px;
	color: #ffffff;
`;
const FindLinks = styled.div`
	display: flex;
	justify-content: space-around;
	font-weight: 300;
	font-size: 15px;
	color: #333333;
	a {
		color: #333333;
		text-decoration: none;
	}
`;
const CenterEndLine = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 27%;
		height: 0px;
		background: #d7d7d7;
		border: 0.5px solid #d7d7d7;
	}
	p {
		margin: 0 33px 0 34px;
	}
`;
const LoginBottom = styled.div`
	width: 27%;
	height: 104px;
	display: flex;
	flex-direction: column;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
`;
const SNSIcons = styled.div`
	height: 51px;
	display: flex;
	justify-content: space-around;
	.googleIcon,
	.naverIcon,
	.kakaoIcon {
		width: 41px;
		height: 41px;
		border-radius: 10px;
	}
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export default LoginBox;

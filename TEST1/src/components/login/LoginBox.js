import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../static/xIcon.svg';
import { ReactComponent as GoogleIcon } from '../../static/googleIcon.svg';
import { ReactComponent as NaverIcon } from '../../static/naverIcon.svg';
import { ReactComponent as KakaoIcon } from '../../static/kakaoIcon.svg';
import LoginModal from './LoginModal';

const LoginBox = () => {
	//axios.defaults.withCredentials = true;
	const [newID, setNewID] = useState('');
	const [newPW, setNewPW] = useState('');
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);

	const enterKey = e => {
		if (e.keyCode === 13) {
			InfoSubmit(e);
		}
	};

	const InfoSubmit = e => {
		axios
			.post('/account/login/', {
				email: newID,
				password: newPW,
			})
			.then(res => {
				sessionStorage.setItem('email', res.data.data.user); //로그인한 유저 이메일 저장
				sessionStorage.setItem('token', res.data.data.access_token); // 토큰 저장
				getUsername();
				alert('로그인 성공');
				navigate('/checklist');
			})
			.catch(error => {
				console.log(error);
				setModal(true);
			})
			.then(() => {
				setNewID('');
				setNewPW('');
			});
	};
	//유저 이름 받아오기 (임시코드, 로그인시에 response로 받아올 경우에 삭제 예정)
	const getUsername = () => {
		axios.get('/account/signup/').then(res => {
			var userList = res.data.data;
			var name = '';
			for (var i = 0; i < userList.length; i++) {
				userList[i].email == sessionStorage.getItem('email')
					? (name = userList[i].username)
					: console.log('');
			}
			//유저 이름 받아와서 저장
			sessionStorage.setItem('username', name);
		});
	};

	return (
		<Wrapper>
			{modal ? <LoginModal setModal={setModal} /> : null}
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
						<NaverIcon className='naverIcon' />
						<KakaoIcon className='kakaoIcon' />
					</SNSIcons>
				</LoginBottom>
			</BoxWrapper>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
`;
const BoxWrapper = styled.div`
	width: 52.39vw;
	height: 65.09vh;
	position: absolute;
	z-index: 2;
	top: 20.27vh;
	left: 23.75vw;
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	.line1 {
		width: 33.38vw;
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
	justify-content: space-between;
	width: 9.85vw;
	height: 6.75vh;
	margin: 4.81vh 0 2.54vh 0;
	.deleteIcon {
		position: absolute;
		top: 5.18vh;
		right: 2.7vw;
	}
	p:nth-child(2) {
		font-weight: 300;
		font-size: 0.78vw;
		margin: 0;
	}
	p:nth-child(3) {
		margin: 0;
		font-weight: 600;
		font-size: 1.82vw;
	}
`;
const LoginCenter = styled.div`
	width: 19.67vw;
	height: 22.03vh; // 238px;
	margin-top: 4.8vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	input {
		width: 19.05vw;
		height: 4.72vh;
		border: 0.8px solid #979797;
		box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
		border-radius: 8px;
		font-weight: 400;
		font-size: 0.78vw;
		color: #767676;
		padding-left: 0.29vw;
		outline: none;
	}
`;
const IdInput = styled.input`
	margin: 0 0 1.2vh 0;
`;
const PwInput = styled.input`
	margin-bottom: 2.59vh;
`;
const LoginBtn = styled.button`
	cursor: pointer;
	width: 19.67vw;
	height: 4.72vh;
	margin-bottom: 2.77vh;
	background: #d38189;
	border-radius: 2.66vw;
	border-style: none;
	font-weight: 400;
	font-size: 0.93vw; //18px;;
	color: #ffffff;
`;
const FindLinks = styled.div`
	width: 16.4vw;
	height: 1.96vh;
	display: flex;
	justify-content: space-around;
	font-weight: 300;
	font-size: 0.78vw; //15px;;
	color: #333333;
	a {
		color: #333333;
		text-decoration: none;
	}
`;
const CenterEndLine = styled.div`
	width: 100%;
	height: 1.85vh;
	margin-top: 3.7vh;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 14.32vw;
		height: 0vh;
		background: #d7d7d7;
		border: 0.02vw solid #d7d7d7;
	}
	p {
		margin: 0 1.71vw 0 1.77vw;
	}
`;
const LoginBottom = styled.div`
	width: 14.09vw;
	height: 9.62vh;
	margin-top: 1.8vh;
	display: flex;
	flex-direction: column;
	font-style: normal;
	font-weight: 400;
	font-size: 1.2vw;
`;
const SNSIcons = styled.div`
	height: 4.72vh;
	display: flex;
	justify-content: space-around;
	.googleIcon,
	.naverIcon,
	.kakaoIcon {
		width: 2.13vw;
		height: auto;
		border-radius: 0.49vw;
	}
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export default LoginBox;

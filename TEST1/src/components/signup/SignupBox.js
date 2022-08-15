import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../static/xIcon.svg';
import { ReactComponent as GoogleIcon } from '../../static/googleIcon.svg';
import { ReactComponent as NaverIcon } from '../../static/naverIcon.svg';
import { ReactComponent as KakaoIcon } from '../../static/kakaoIcon.svg';
import SignupModal from './SignupModal';

const SignupBox = () => {
	const [newID, setNewID] = useState('');
	const [newPW, setNewPW] = useState('');
	const [modal, setModal] = useState(false);
	const [warning, setWarning] = useState('');
	const [BtnActive, setBtnActive] = useState(false);

	const navigate = useNavigate();

	// 유효성 검사용 정규표현식
	const IDregExp =
		/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	const PWregExp = /^(?=.*\d)(?=.*[~!@#$%^&*()+|=])[\d~!@#$%^&*()+|=]{8,16}$/;

	var validID = IDregExp.test(newID);
	var validPW = PWregExp.test(newPW);

	//유효성 검사 후 버튼 색 변경함수
	const ChangeBtn = () => {
		if (validID && validPW) setBtnActive(true);
		else setBtnActive(false);
	};
	//엔터로 입력받는 함수
	const enterInput = e => {
		if (e.keyCode === 13) {
			SignupSubmit(e);
		}
	};
	//회원가입 후 정보 전달하는 함수
	const SignupSubmit = e => {
		if (validID && validPW) {
			axios
				.post('https://over-the-ott.herokuapp.com/account/signup/', {
					email: newID,
					password: newPW,
				})
				.then(res => {
					if (res.data.message === '회원가입 성공') {
						alert(res.data.message);
						navigate('/signup/setting');
					} else {
						setWarning('이미 가입한 이메일입니다.');
						setModal(true);
					}
				});
		} else {
			if (!validID) {
				if (!validPW) {
					setWarning('유효한 이메일과 비밀번호를 입력하세요');
				} else setWarning('유효한 이메일을 입력하세요');
			} else setWarning('유효한 비밀번호를 입력하세요');
			setModal(true);
		}
		setNewID('');
		setNewPW('');
	};

	return (
		<Wrapper>
			{modal ? <SignupModal warning={warning} setModal={setModal} /> : null}
			<Container>
				<SignupTop>
					<Link to='/'>
						<DeleteIcon className='deleteIcon' />
					</Link>
					<p>Create an account</p>
					<p>회원가입하기</p>
					<GoLogin>
						<p>이미 계정이 있으신가요?</p>
						<Link to='/login'>로그인하기</Link>
					</GoLogin>
				</SignupTop>
				<div className='line1'></div>
				<SignupCenter>
					<IdInput
						value={newID}
						placeholder='이메일'
						onChange={e => setNewID(e.target.value)}
						onKeyUp={ChangeBtn}
					/>
					<PwInput
						value={newPW}
						placeholder='비밀번호 (8자 이상, 특수문자 포함)'
						onChange={e => setNewPW(e.target.value)}
						onKeyUp={ChangeBtn}
						onKeyDown={enterInput}
					/>
					<SignupBtn
						onClick={SignupSubmit}
						className={BtnActive ? ' active' : ''}
					>
						계정 만들기
					</SignupBtn>
				</SignupCenter>
				<CenterEndLine>
					<div />
					<p>OR</p>
					<div />
				</CenterEndLine>
				<SignupBottom>
					<p>다음 계정으로 가입하기</p>
					<SNSIcons>
						<GoogleIcon className='googleIcon' />
						<NaverIcon className='naverIcon' />
						<KakaoIcon className='kakaoIcon' />
					</SNSIcons>
				</SignupBottom>
			</Container>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
`;
const Container = styled.div`
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
const SignupTop = styled.div`
	color: #333333;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 13.96vw;
	height: 10.64vh;
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
const GoLogin = styled.div`
	width: 100%;
	display: flex;
	font-weight: 300;
	font-size: 0.83vw;
	align-items: center;
	justify-content: space-between;
	a {
		color: #333333;
	}
`;
const SignupCenter = styled.div`
	width: 19.67vw;
	height: 22.03vh;
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
const SignupBtn = styled.button`
	cursor: pointer;
	width: 19.67vw;
	height: 4.72vh;
	margin-bottom: 2.77vh;
	background: #dcdcdc;
	border-radius: 2.66vw;
	border-style: none;
	font-weight: 400;
	font-size: 0.93vw; //18px;;
	color: #ffffff;
	&.active {
		background-color: #d38189;
	}
`;

const CenterEndLine = styled.div`
	width: 100%;
	height: 1.55vh;
	margin-top: 1.25vh;
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
const SignupBottom = styled.div`
	width: 14.09vw;
	height: 9.62vh;
	margin-top: 0.7vh;
	display: flex;
	flex-direction: column;
	font-style: normal;
	font-weight: 400;
	font-size: 1.2vw;
	p {
		text-align: center;
	}
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
export default SignupBox;

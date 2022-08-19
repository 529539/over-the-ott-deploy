import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ModalBox } from '../static/SignupFinalModal.svg';

const SignupSettingSub = () => {
	return (
		<ModalWrapper>
			<ModalBox className='ModalBox' />
			<TextWrapper>
				<p>WELCOME</p>
				<p>회원가입이 완료되었습니다!</p>
				<p>
					이제 Over The OTT에서 해지할 결심을 가져보세요! <br />
					OTT 이용 로그 기록을 통한 똑똑한 소비가 가능해집니다.
				</p>
			</TextWrapper>
			<BtnWrapper>
				<Link to='/checklist'>
					<button>체크리스트에 작품 등록하러 가기</button>
				</Link>
				<Link to='/mypage'>
					<button>마이페이지 가기</button>
				</Link>
			</BtnWrapper>
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	background: rgba(0, 0, 0, 0.5);
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: center;
	z-index: 7;
	animation: modal-show 0.5s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -10px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
	.ModalBox {
		display: flex;
		flex-direction: column;
		position: absolute;
		z-index: 4;
		margin-top: 20.46vh;
		width: 52.39vw;
		height: 65.09vh;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}
`;
const TextWrapper = styled.div`
	width: 22.56vw;
	height: 15vh;
	margin-top: 35.7vh;
	position: absolute;
	z-index: 5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	p:nth-child(1) {
		width: 19.2vw;
		height: auto;
		font-weight: 300;
		font-size: 1.04vw;
		color: #d38189;
		margin: 0;
	}
	p:nth-child(2) {
		width: 21.09vw;
		height: auto;
		font-weight: 600;
		font-size: 1.62vw;
		color: #333333;
		margin: 1vh 0 1vh 0;
	}
	p:nth-child(3) {
		width: 21.37vw;
		height: 4.07vh;
		display: flex;
		flex-wrap: wrap;
		font-weight: 300;
		font-size: 0.83vw;
		color: #7b7b7b;
	}
`;
const BtnWrapper = styled.div`
	width: 20.67vw;
	height: 10.18vh;
	position: absolute;
	z-index: 5;
	display: flex;
	flex-direction: column;
	margin-top: 61.01vh;
	a {
		text-decoration: none;
	}
	button {
		cursor: pointer;
		width: 100%;
		height: 4.16vh;
		background: #d38189;
		border-radius: 1.27vw;
		border-style: none;
		outline-style: none;
		color: #ffffff;
	}
	button:first-child {
		margin-bottom: 1.85vh;
	}
`;

export default SignupSettingSub;

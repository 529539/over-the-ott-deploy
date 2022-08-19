import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ModalBox } from "../../static/ModalBox.svg";

const ChecklistSaveModal = (props) => {
	if (props.isOpen === true) {
		window.scrollTo(0, 0);
	}
	const printPv = (sPv) => {
		if (sPv === "wavve") return "Wavve";
		else return sPv;
	};
	const printSs = (sSs) => {
		if (sSs === "default") return null;
		else return " (" + sSs + ")";
	};

	return (
		<ModalWrapper onClick={() => props._closeModal()}>
			<BoxWrapper>
				<MessageWrapper>
					<div>
						[{printPv(props.selectedPv)}] {props.selectedTitle}
						{printSs(props.selectedSs)}
					</div>
					<div>정주행 리스트에 추가되었습니다</div>
					<Circle />
					<BtnWrapper>
						<div>
							<DeleteModalBtn onClick={() => props._closeModal()}>
								검색 결과로 돌아가기
							</DeleteModalBtn>
							<Link to="/checklist" style={{ textDecoration: "none" }}>
								<DeleteModalBtn>체크리스트로 돌아가기</DeleteModalBtn>
							</Link>
						</div>
					</BtnWrapper>
				</MessageWrapper>
				<ModalBox className="ModalBox" />
			</BoxWrapper>
		</ModalWrapper>
	);
};

export default ChecklistSaveModal;

const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 200;
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
`;
const BoxWrapper = styled.div`
	position: absolute;
	top: 27vh;
	width: 30vw;
	height: 50vh;
	.ModalBox {
		margin: 0;
		width: 100%;
		height: 100%;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}
`;
const MessageWrapper = styled.div`
	position: absolute;
	z-index: 10;
	width: 30vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	div:nth-child(1) {
		font-weight: 400;
		font-size: 1vw;
		margin: 17vh 0 0 0;
	}
	div:nth-child(2) {
		font-weight: 600;
		font-size: 1.3vw;
		margin: 0.5vh 0 0 0;
	}
`;
const Circle = styled.div`
	position: absolute;
	z-index: -1;
	top: 20vh;
	left: 5vw;
	background: rgba(216, 145, 151, 0.5);
	width: 1.3vw;
	height: 1.3vw;
	border-radius: 50%;
`;
const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 12vw;
	height: auto;
	position: absolute;
	z-index: 30;
	top: 9.5vh;
`;
const DeleteModalBtn = styled.button`
	cursor: pointer;
	width: 14vw;
	height: 4vh;
	background: #d38189;
	border-radius: 1.27vw;
	border-style: none;
	color: white;
	margin-bottom: 1vh;
	font-size: 0.8vw;
`;

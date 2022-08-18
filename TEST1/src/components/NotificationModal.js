import { React, useState } from "react";
import styled from "styled-components";
import db from "../db.json";

const NotificationModal = (props) => {
	var alertArray = props.subArray;

	//ott 이름에 맞는 아이콘 불러오는 함수
	function img(ott) {
		switch (ott) {
			case 1:
			case 2:
			case 3:
				return db.ottArray[0].img;
			case 4:
			case 5:
				return db.ottArray[1].img;
			case 6:
			case 7:
			case 8:
				return db.ottArray[2].img;
			case 9:
			case 10:
				return db.ottArray[3].img;
			case 11:
				return db.ottArray[4].img;
			default:
				return db.ottArray[5].img;
		}
	}
	const AlertList = () => {
		return alertArray.map(
			(list) =>
				list.days_till_pay <= 7 && (
					<AlertWrapper>
						<img src={img(list.ott)} />
						<TextWrapper>
							<p>구독 갱신까지</p>
							<p>{list.days_till_pay}일</p>
							<p>남았습니다</p>
						</TextWrapper>
					</AlertWrapper>
				)
		);
	};
	return (
		<Container>
			<Background onClick={props._handleModal} />
			<ModalWrapper>
				<ModalTri />
				<ModalBlock>
					<Contents>
						{props.alert === true ? (
							<AlertList />
						) : (
							<p>7일 이내에 구독 갱신이 없습니다.</p>
						)}
					</Contents>
				</ModalBlock>
			</ModalWrapper>
		</Container>
	);
};

export default NotificationModal;

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 100;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Background = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: transparent;
`;

const ModalWrapper = styled.div`
	position: fixed;
	right: 26.2em;
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
	filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ModalTri = styled.div`
	position: fixed;
	top: 5.7em;
	left: 15em;
	width: 0px;
	height: 0px;
	border-bottom: 27px solid #fff;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
`;

const ModalBlock = styled.div`
	border-radius: 0.5em;
	padding: 1.5rem;
	background-color: #fff;
	width: 15em;
	position: fixed;
	top: 7em;
	min-height: 3em;
`;

const Contents = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 1.25vw;
	}
`;
const AlertWrapper = styled.div`
	width: 100%;
	display: flex;
`;
const TextWrapper = styled.div`
	width: 14.92vw;
	display: flex;
	font-weight: 400;
	font-size: 0.93vw;
	justify-content: space-between;
	text-align: center;
	color: #000000;
	margin-left: 0.72vw;
	p:nth-child(2) {
		color: #d38189;
		font-weight: 700;
	}
`;

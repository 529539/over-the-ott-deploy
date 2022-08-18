import React from 'react';
import styled from 'styled-components';

const NotificationModal = props => {
	return (
		<Container>
			<Background onClick={props._handleModal} />
			<ModalWrapper>
				<ModalTri />
				<ModalBlock>
					<Contents>
						{props.setAlert ? (
							props.alertList.map(list => {
								console.log(props.alertList);
								<AlertWrapper>
									<div>
										{/* <img src={list.img} /> */}
										<div className='textWrapper'>
											<p>구독 갱신까지</p>
											<p>${list.dDay}</p>
										</div>
									</div>
								</AlertWrapper>;
							})
						) : (
							<p>7일이내 구독 갱신이 없습니다.</p>
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
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const AlertWrapper = styled.div``;

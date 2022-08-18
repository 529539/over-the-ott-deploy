import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Background from '../components/Background';
import ChecklistTemplate from '../components/checklist/ChecklistTemplate';
import ChecklistList from '../components/checklist/ChecklistList';
import ChecklistDoneList from '../components/checklist/ChecklistDoneList';
import ChecklistShareModal from '../components/checklist/ChecklistShareModal';

const Checklist = () => {
	const [isShare, setIsShare] = useState(false);
	const _handleShareModal = () => {
		setIsShare(!isShare);
	};

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '7vh',
							}}
						>
							<ChecklistTemplate
								text={'정주행'}
								color={'#D38189'}
								setIsShare={setIsShare}
							>
								<ChecklistList isOpen={isOpen} setIsOpen={setIsOpen} />
							</ChecklistTemplate>
							<ChecklistTemplate
								text={'완주'}
								color={'#8899CB'}
								setIsShare={setIsShare}
							>
								<ChecklistDoneList />
							</ChecklistTemplate>
						</div>
						<BtnWrapper>
							<Link to='/checklist/search' style={{ textDecoration: 'none' }}>
								<Btn>
									<BtnText>작품 검색 및 추가하러 가기</BtnText>
								</Btn>
							</Link>
						</BtnWrapper>
					</div>
				</NotHeaderArea>
			</Wrapper>
			{isShare ? (
				<ChecklistShareModal _handleModal={_handleShareModal} />
			) : null}
			{isOpen ? (
				<MContainer>
					<MBackground></MBackground>
				</MContainer>
			) : null}
		</>
	);
};

export default Checklist;

const MContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MBackground = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(1px);
	animation: modal-bg-show 0.3s;
	@keyframes modal-bg-show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin: 0;
	top: 0;
	position: absolute;
`;

const NotHeaderArea = styled.div`
	width: 100vw;
	height: calc(100vh - 5em);
	top: 5em;
	padding: 0;
	position: relative;
	display: flex;
	justify-content: center;
`;

const BtnWrapper = styled.div`
	width: 100vw;
	height: auto;
	margin-top: 5vh;
	display: flex;
	justify-content: center;
`;

const Btn = styled.div`
	width: 20vw;
	height: 6vh;
	background: rgba(255, 255, 255, 0.3);
	box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
	border-radius: 1.5vw;
`;

const BtnText = styled.div`
	font-weight: 600;
	font-size: 1.2vw;
	line-height: 6vh;
	text-align: center;
	color: #fff;
`;

import React from "react";
import styled from "styled-components";
import { TbArrowBackUp } from "react-icons/tb";
import { ReactComponent as InstagramLogo } from "../../static/Share/InstagramLogo.svg";
import { ReactComponent as TwitterLogo } from "../../static/Share/TwitterLogo.svg";
import { ReactComponent as NaverBlogLogo } from "../../static/Share/NaverBlogLogo.svg";
import { ReactComponent as KakaoLogo } from "../../static/Share/KakaoLogo.svg";
import { ReactComponent as AdImage } from "../../static/Share/AdImage.svg";

const ChecklistShareModal = ({ _handleModal, ...rest }) => {
	return (
		<Container>
			<Background onClick={_handleModal} />
			<ModalBlock {...rest}>
				<HeaderWrapper>
					<Title>친구에게 공유하기 </Title>
					<TbArrowBackUp stroke="#808080" onClick={_handleModal} />
				</HeaderWrapper>
				<BorderWrapper>
					<Border />
				</BorderWrapper>
				<Contents>
					<LogoWrapper>
						<InstagramLogo />
						<TwitterLogo />
						<NaverBlogLogo />
						<KakaoLogo />
					</LogoWrapper>
					<AdWrapper>
						<a href="https://www.bnbchain.org/" target="_blank">
							<AdImage />
						</a>
					</AdWrapper>
				</Contents>
			</ModalBlock>
		</Container>
	);
};

export default ChecklistShareModal;

const Container = styled.div`
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

const Background = styled.div`
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

const ModalBlock = styled.div`
	position: absolute;
	top: 25vh;
	border-radius: 1vw;
	padding: 1.5rem;
	background-color: #fff;
	width: 30vw;
	height: 45vh;
	animation: modal-show 0.3s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -20px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
	svg {
		width: 2vw;
		height: 2vw;
		cursor: pointer;
	}
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 3vh 3vw;
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 1.3vw;
	color: #7e7e7e;
`;

const BorderWrapper = styled.div`
	width: 30vw;
	display: flex;
	justify-content: center;
`;

const Border = styled.div`
	width: 24vw;
	height: 0;
	border-bottom: 1px solid #d7d7d7;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LogoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 23vw;
	margin-top: 5vh;
	svg {
		width: 4.5vw;
		height: 4.5vw;
	}
`;

const AdWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 25vw;
	margin-top: 3vh;
	svg {
		width: 24vw;
		height: auto;
	}
`;

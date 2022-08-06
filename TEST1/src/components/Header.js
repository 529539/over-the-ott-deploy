import { React, useState } from "react";
import styled from "styled-components";
import { ReactComponent as HeaderLogo } from "../static/HeaderLogo.svg";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Notification } from "../static/Notification.svg";
import { BsFillPersonFill } from "react-icons/bs";
import NotificationModal from "./NotificationModal.js";

const Header = () => {
	const [isModal, setIsModal] = useState(false);
	const _handleModal = () => {
		setIsModal(!isModal);
	};

	return (
		<>
			<Container>
				<div
					style={{
						margin: "1.6em 6em auto 6em",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<HeaderLogo />
					<NavWrapper>
						<CustomNav activeClassName="active" to="/calendar">
							캘린더
						</CustomNav>
						<CustomNav activeClassName="active" to="/checklist">
							체크리스트
						</CustomNav>
						<CustomNav activeClassName="active" to="/calculator">
							계산기
						</CustomNav>
					</NavWrapper>
					<div style={{ width: "11.4em", display: "flex" }}>
						<NotificationWrapper onClick={_handleModal}>
							<div className="hover">
								<Notification onClick={_handleModal} stroke="gray" />
							</div>
							<div className="nothover">
								<Notification onClick={_handleModal} stroke="#000" />
							</div>
						</NotificationWrapper>
						<div
							style={{
								paddingLeft: "2.5em",
							}}
						>
							<Link to="/mypage">
								<MyPageWrapper>
									<BsFillPersonFill size="30" />
								</MyPageWrapper>
							</Link>
						</div>
					</div>
				</div>
			</Container>
			{isModal && (
				<NotificationModal _handleModal={_handleModal}>
					<p>알림이 없습니다.</p>
				</NotificationModal>
			)}
		</>
	);
};

export default Header;

const Container = styled.div`
	position: fixed;
	z-index: 100;
	background-color: #fafafa;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 5em;
`;

const NavWrapper = styled.div`
	display: flex;
	.active {
		font-weight: 600;
		color: #d38189;
		font-size: 1.27em;
	}
`;

const CustomNav = styled(NavLink)`
	color: black;
	font-family: "Noto Sans Display", sans-serif;
	font-weight: 500;
	font-size: 1.25em;
	text-decoration: none;
	margin: 0 1em;
	&:hover {
		color: #d38189;
	}
	&:active {
		color: gray;
	}
`;

const NotificationWrapper = styled.div`
	cursor: pointer;
	position: relative;
	margin-left: 6em;
	margin-top: 2px;
	width: 28px;
	height: 28px;
	.hover {
		width: 28px;
		height: 28px;
		position: absolute;
		background-color: #fafafa;
		z-index: 5;
	}
	.nothover {
		width: 28px;
		height: 28px;
		position: absolute;
		background-color: #fafafa;
		z-index: 10;
	}
	.nothover:hover {
		z-index: 1;
	}
`;

const MyPageWrapper = styled.div`
	cursor: pointer;
	color: #000;
	&:hover {
		color: gray;
	}
`;

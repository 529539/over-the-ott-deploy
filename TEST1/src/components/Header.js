import { React, useState } from "react";
import styled from "styled-components";
import { ReactComponent as HeaderLogo } from "../static/HeaderLogo.svg";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Notification } from "../static/Notification.svg";
import { BsFillPersonFill } from "react-icons/bs";
import NotificationModal from "./NotificationModal.js";

const Container = styled.div`
	position: fixed;
	background-color: #fafafa;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 5em;
`;

const CustomNav = styled(NavLink)`
	color: black;
	font-family: "Noto Sans Display", sans-serif;
	font-weight: 500;
	font-size: 1.25em;
	text-decoration: none;
	margin: 0 1em;
	&:active {
		color: gray;
	}
`;

const activeStyle = {
	fontWeight: "700",
	color: "#D38189",
};

const NotificationWrapper = styled.div`
	cursor: pointer;
	margin-left: 6em;
	margin-top: 2px;
`;

const MyPageWrapper = styled.div`
	cursor: pointer;
	color: #000;
	&:hover {
		color: gray;
	}
`;

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
					<div style={{ display: "flex" }}>
						<CustomNav activeStyle={activeStyle} to="/calendar">
							캘린더
						</CustomNav>
						<CustomNav activeStyle={activeStyle} to="/checklist">
							체크리스트
						</CustomNav>
						<CustomNav activeStyle={activeStyle} to="/calculator">
							계산기
						</CustomNav>
					</div>
					<div style={{ width: "11.4em", display: "flex" }}>
						<NotificationWrapper>
							<Notification onClick={_handleModal} />
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

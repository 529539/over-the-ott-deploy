import React from "react";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";

function ChecklistTemplate({ children }) {
	let user = {
		username: "아기사자",
	};

	return (
		<ChecklistTemplateBlock>
			<HeaderWrapper>
				<Title>{user.username} 님의 정주행 리스트</Title>
				<IconWrapper>
					<FiUpload size="1.4vw" color="#808080" />
				</IconWrapper>
			</HeaderWrapper>
			<Line />
			{children}
		</ChecklistTemplateBlock>
	);
}

export default ChecklistTemplate;

const ChecklistTemplateBlock = styled.div`
	width: 30vw;
	height: 65vh;
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 0px 0.2vw 1.5vw rgba(105, 105, 105, 0.2);
	border-radius: 1.5vw;
	margin: 2vh 2vw 0 2vw;
`;

const HeaderWrapper = styled.div`
	width: 30vw;
	height: 8vh;
	margin-top: 2vh;
	display: flex;
	justify-content: space-around;
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 1.35vw;
	line-height: 8vh;
	color: #d38189;
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	svg {
		cursor: pointer;
	}
`;

const Line = styled.div`
	border: 1px solid #d7d7d7;
	width: 25vw;
	margin: 0 auto;
`;

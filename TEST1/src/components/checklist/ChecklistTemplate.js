import React from 'react';
import styled from 'styled-components';
import { FiUpload } from 'react-icons/fi';

function ChecklistTemplate({ children, text, color, setIsShare }) {
	let user = {
		//username: '아기사자',
		username: sessionStorage.getItem('username'),
	};

	return (
		<ChecklistTemplateBlock>
			<HeaderWrapper>
				<Title style={{ color: color }}>
					{user.username} 님의 {text} 리스트
				</Title>
				<IconWrapper onClick={() => setIsShare(true)}>
					<FiUpload size='1.4vw' color='#808080' />
				</IconWrapper>
			</HeaderWrapper>
			<Line />
			<Content className='scrollbar'>{children}</Content>
		</ChecklistTemplateBlock>
	);
}

export default ChecklistTemplate;

const ChecklistTemplateBlock = styled.div`
	width: 30vw;
	height: 65vh;
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 0px 0.2vw 1.5vw rgba(105, 105, 105, 0.2);
	border-radius: 1vw;
	margin: 2vh 2vw 0 2vw;
	.scrollbar {
		height: 47vh;
		overflow-y: auto;
		scrollbar-width: thin;
		margin-right: 2.5vw;
	}
	.scrollbar::-webkit-scrollbar {
		position: absolute;
		width: 0.5vw;
	}
	.scrollbar::-webkit-scrollbar-track {
		background-color: #e6e6e8;
		border-radius: 0.5vw;
		box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
	}
	.scrollbar::-webkit-scrollbar-thumb {
		background-color: #bdbdbf;
		height: auto;
		border-radius: 0.5vw;
	}
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

const Content = styled.div`
	width: 25vw;
	height: 46vh;
	margin: 0 auto;
	margin-top: 2.5vh;
	overflow: auto;
`;

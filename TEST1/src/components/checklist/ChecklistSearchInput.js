import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const ChecklistSearchInput = () => {
	return (
		<>
			<Wrapper>
				<Text>작품 검색하기</Text>
				<InputContainer>
					<IconWrapper>
						<FiSearch size="1.7vw" />
					</IconWrapper>
				</InputContainer>
			</Wrapper>
		</>
	);
};

export default ChecklistSearchInput;

const Wrapper = styled.div`
	width: 80vw;
	height: 15vh;
	margin-top: 2vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Text = styled.div`
	font-weight: 500;
	font-size: 1.2vw;
	color: #343434;
	margin-right: 2vw;
`;

const InputContainer = styled.div`
	width: 60vw;
	height: 7vh;
	border: 1px solid #343434;
	border-radius: 2vw;
`;

const IconWrapper = styled.div`
	float: right;
	height: 7vh;
	padding-right: 1.5vw;
	display: flex;
	align-items: center;
`;

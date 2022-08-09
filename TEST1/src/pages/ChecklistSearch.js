import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { FiChevronLeft } from "react-icons/fi";
import ChecklistSearchInput from "../components/checklist/ChecklistSearchInput";
import ChecklistTemplate from "../components/checklist/ChecklistTemplate";
import ChecklistList from "../components/checklist/ChecklistList";
import ChecklistDoneList from "../components/checklist/ChecklistDoneList";

const ChecklistSearch = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<Wrapper>
				<NotHeaderArea>
					<HeaderWrapper>
						<Link to="/checklist" style={{ textDecoration: "none" }}>
							<FiChevronLeft size="1.7vw" />
							<Text>체크리스트로 돌아가기</Text>
						</Link>
						<Line />
						<ChecklistSearchInput />
					</HeaderWrapper>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default ChecklistSearch;

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

const HeaderWrapper = styled.div`
	width: 90vw;
	height: 15vh;
	margin-top: 1.2vh;
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		margin-top: 2vh;
		svg {
			color: #343434;
			margin-right: 0.5vw;
		}
		&:hover {
			color: gray;
		}
	}
`;

const Text = styled.div`
	font-weight: 500;
	font-size: 1.2vw;
	color: #343434;
`;

const Line = styled.div`
	border-left: 2px solid #343434;
	width: 0;
	height: 2vh;
	margin: 2vh 1vw 0 1vw;
`;

import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChecklistSearchInput from "../components/checklist/ChecklistSearchInput";
import ChecklistTemplate from "../components/checklist/ChecklistTemplate";
import ChecklistList from "../components/checklist/ChecklistList";
import ChecklistDoneList from "../components/checklist/ChecklistDoneList";

const Checklist = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<Wrapper>
				<NotHeaderArea>
					<div>
						<ChecklistSearchInput />
						<div style={{ display: "flex", justifyContent: "center" }}>
							<ChecklistTemplate>
								<ChecklistList />
							</ChecklistTemplate>
							<ChecklistTemplate>
								<ChecklistDoneList />
							</ChecklistTemplate>
						</div>
					</div>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default Checklist;

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

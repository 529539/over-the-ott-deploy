import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import ChecklistSearchInput from "../components/checklist/ChecklistSearchInput";
import ChecklistTemplate from "../components/checklist/ChecklistTemplate";
import ChecklistList from "../components/checklist/ChecklistList";
import ChecklistDoneList from "../components/checklist/ChecklistDoneList";

const GlobalStyle = createGlobalStyle`
  body {
  }
`;

const Checklist = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<GlobalStyle />
			<Header />
			<ChecklistSearchInput />
			<ChecklistTemplate>
				<ChecklistList />
			</ChecklistTemplate>
			<ChecklistTemplate>
				<ChecklistDoneList />
			</ChecklistTemplate>
		</>
	);
};

export default Checklist;

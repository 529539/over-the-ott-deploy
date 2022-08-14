import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Background from "../components/Background";
import ChecklistTemplate from "../components/checklist/ChecklistTemplate";
import ChecklistList from "../components/checklist/ChecklistList";
import ChecklistDoneList from "../components/checklist/ChecklistDoneList";

const Checklist = () => {
	const [selected, setSelected] = useState("default");
	const [input, setInput] = useState("");
	console.log(selected, input);

	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "7vh",
							}}
						>
							<ChecklistTemplate>
								<ChecklistList />
							</ChecklistTemplate>
							<ChecklistTemplate>
								<ChecklistDoneList />
							</ChecklistTemplate>
						</div>
						<BtnWrapper>
							<Link to="/checklist/search" style={{ textDecoration: "none" }}>
								<Btn>
									<BtnText>작품 검색 및 추가하러 가기</BtnText>
								</Btn>
							</Link>
						</BtnWrapper>
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

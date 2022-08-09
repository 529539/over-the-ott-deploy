import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const ChecklistSearchInput = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState("default");
	const [input, setInput] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (selected === "default") {
			alert("검색 필터(TV 또는 영화)를 선택해주세요");
		}
		if (input === "") {
			alert("제목을 입력해주세요");
		}
		if (selected !== "default" && input !== "") {
			navigate("/checklist/search");
		}
	};

	return (
		<>
			<Wrapper>
				<Text>작품 검색하기</Text>
				<InputContainer>
					<SelectWrapper>
						<select
							style={{
								color: selected === "default" ? "#C3C7C7" : "#343434",
							}}
							defaultValue={"default"}
							onChange={(e) => setSelected(e.target.value)}
							value={selected}
						>
							<option
								className="default"
								style={{ color: "gray" }}
								value={"default"}
								disabled
							>
								선택
							</option>
							<option>TV</option>
							<option>영화</option>
						</select>
					</SelectWrapper>
					<Line />
					<form onSubmit={onSubmit} style={{ display: "flex" }}>
						<Input
							placeholder="제목으로 검색"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<IconWrapperBtn type="submit">
							<FiSearch size="1.7vw" />
						</IconWrapperBtn>
					</form>
				</InputContainer>
			</Wrapper>
		</>
	);
};

export default ChecklistSearchInput;

const Wrapper = styled.div`
	width: 70vw;
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
	display: flex;
`;

const SelectWrapper = styled.div`
	select {
		width: 5vw;
		height: 7vh;
		margin-left: 1vw;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 1vw;
		font-weight: 500;
		border: none;
		background-color: transparent;
		&:focus {
			outline: none;
		}
	}
`;

const Line = styled.div`
	width: 0;
	height: 4.5vh;
	margin: 1.3vh 1vw 0 1vw;
	border-left: 1px solid #343434;
	opacity: 0.5;
`;

const Input = styled.input`
	width: 48vw;
	border: none;
	font-size: 1vw;
	font-weight: 500;
	&:focus {
		outline: none;
	}
`;

const IconWrapperBtn = styled.button`
	border: none;
	background-color: transparent;
	height: 7vh;
	padding-right: 1.5vw;
	display: flex;
	align-items: center;
	svg {
		cursor: pointer;
	}
`;

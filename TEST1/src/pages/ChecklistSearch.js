import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import { ReactComponent as HeaderLogo } from "../static/HeaderLogo.svg";
import { FiChevronLeft } from "react-icons/fi";
import ChecklistSearchInput from "../components/checklist/ChecklistSearchInput";
import ChecklistSearchResult from "../components/checklist/ChecklistSearchResult";

const ChecklistSearch = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		setIsStart(true);
	}, []);

	const [selected, setSelected] = useState("default");
	const [input, setInput] = useState("");
	const [printedInput, setPrintedInput] = useState("");
	const [isStart, setIsStart] = useState(true);
	const [isTV, setIsTV] = useState(false);
	const [isMovie, setIsMovie] = useState(false);

	useEffect(() => {
		console.log("종류:" + selected + ", 검색어:" + input);
		console.log("isTV", isTV);
		console.log("isMovie", isMovie);
	}, [input]);

	const [HotTVs, setHotTVs] = useState([]);
	const [HotMovies, setHotMovies] = useState([]);
	const getHotTVs = async () => {
		const response = await axios
			.get("https://over-the-ott.herokuapp.com/checklist/search/tv/")
			.then((response) => {
				setHotTVs(response.data.data);
			})
			.catch((error) => {
				console.log("인기 TV 불러오기 실패", error.message);
			});
	};
	const getHotMovies = async () => {
		const response = await axios
			.get("https://over-the-ott.herokuapp.com/checklist/search/movie/")
			.then((response) => {
				setHotMovies(response.data.data);
			})
			.catch((error) => {
				console.log("인기 영화 불러오기 실패", error.message);
			});
	};
	useEffect(() => {
		getHotTVs();
		getHotMovies();
	}, []);

	const [TVs, setTVs] = useState([]);
	const [movies, setMovies] = useState([]);
	const getTVs = async (keyword) => {
		const response = await axios
			.get(
				`https://over-the-ott.herokuapp.com/checklist/search/tv/?keyword=${keyword}`
			)
			.then((response) => {
				setTVs(response.data.data);
				setPrintedInput(keyword);
			})
			.catch((error) => {
				console.log("TV 검색 결과 불러오기 실패", error.message);
			});
	};
	const getMovies = async (keyword) => {
		const response = await axios
			.get(
				`https://over-the-ott.herokuapp.com/checklist/search/movie/?keyword=${keyword}`
			)
			.then((response) => {
				setMovies(response.data.data);
				setPrintedInput(keyword);
			})
			.catch((error) => {
				console.log("영화 검색 결과 불러오기 실패", error.message);
			});
	};

	const notFinded = () => {
		return (
			<NoneWrapper>
				<div>
					<NoneText1>Ooops!</NoneText1>
					<NoneText2>일치하는 검색 결과가 없습니다.</NoneText2>
				</div>
			</NoneWrapper>
		);
	};

	return (
		<>
			<Header />
			<Wrapper>
				<NotHeaderArea>
					<div>
						<HeaderWrapper>
							<Link to="/checklist" style={{ textDecoration: "none" }}>
								<FiChevronLeft size="1.7vw" />
								<Text>체크리스트로 돌아가기</Text>
							</Link>
							<Line />
							<ChecklistSearchInput
								selected={selected}
								input={input}
								setSelected={setSelected}
								setInput={setInput}
								setIsStart={setIsStart}
								setIsTV={setIsTV}
								setIsMovie={setIsMovie}
								getTVs={getTVs}
								getMovies={getMovies}
							/>
						</HeaderWrapper>
						<MainWrapper>
							{isStart ? (
								<div>
									<SearchedText>추천 인기 작품</SearchedText>
									<MediasWrapper>
										{HotTVs.map((media) => {
											return <ChecklistSearchResult media={media} />;
										})}
										{HotMovies.map((media) => {
											return <ChecklistSearchResult media={media} />;
										})}
									</MediasWrapper>
									<LogoContainer>
										<HeaderLogo />
									</LogoContainer>
								</div>
							) : isTV ? (
								<div style={{ minHeight: "75vh", height: "auto" }}>
									<SearchedText>TV "{printedInput}" 검색 결과</SearchedText>
									{TVs.length === 0 ? (
										<>{notFinded}</>
									) : (
										<MediasWrapper>
											{TVs.map((media) => {
												return <ChecklistSearchResult media={media} />;
											})}
											{(TVs.length + 3) % 3 === 2 ? (
												<MediaContainer></MediaContainer>
											) : (TVs.length + 3) % 3 === 1 ? (
												<>
													<MediaContainer></MediaContainer>
													<MediaContainer></MediaContainer>
												</>
											) : null}
										</MediasWrapper>
									)}
									<LogoContainer>
										<HeaderLogo />
									</LogoContainer>
								</div>
							) : isMovie ? (
								<div style={{ minHeight: "80vh", height: "auto" }}>
									<SearchedText>영화 "{printedInput}" 검색 결과</SearchedText>
									{movies.length === 0 ? (
										<>{notFinded}</>
									) : (
										<MediasWrapper>
											{movies.map((media) => {
												return <ChecklistSearchResult media={media} />;
											})}
											{(movies.length + 3) % 3 === 2 ? (
												<MediaContainer></MediaContainer>
											) : (movies.length + 3) % 3 === 1 ? (
												<>
													<MediaContainer></MediaContainer>
													<MediaContainer></MediaContainer>
												</>
											) : null}
										</MediasWrapper>
									)}
									<LogoContainer>
										<HeaderLogo />
									</LogoContainer>
								</div>
							) : null}
						</MainWrapper>
					</div>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default ChecklistSearch;

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
	margin: 0;
	top: 0;
	position: absolute;
`;

const NotHeaderArea = styled.div`
	width: 100vw;
	height: auto;
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

const MainWrapper = styled.div`
	width: 90vw;
	height: auto;
	display: flex;
	justify-content: center;
`;

const SearchedText = styled.div`
	font-weight: 400;
	font-size: 1vw;
	margin: 0 0 3vh 0.5vw;
	color: #343434;
`;

const MediasWrapper = styled.div`
	width: 85vw;
	height: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const MediaContainer = styled.div`
	width: 27vw;
	height: 25vh;
	display: flex;
	margin-bottom: 15vh;
`;

const NoneWrapper = styled.div`
	width: 85vw;
	height: auto;
	display: flex;
	justify-content: center;
`;

const NoneText1 = styled.div`
	margin-top: 20vh;
	font-weight: 300;
	font-size: 1.3vw;
	text-align: center;
	color: #d38189;
`;

const NoneText2 = styled.div`
	margin-top: 1vh;
	font-weight: 600;
	font-size: 1.4vw;
	text-align: center;
	color: #343434;
	margin-bottom: 30vh;
`;

const LogoContainer = styled.div`
	position: absolute;
	bottom: 3vh;
	padding-top: 2vh;
	width: 85vw;
	height: auto;
	display: flex;
	justify-content: center;
`;

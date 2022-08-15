import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import { FiChevronLeft } from "react-icons/fi";
import ChecklistSearchInput from "../components/checklist/ChecklistSearchInput";
import { ReactComponent as NetflixLogo } from "../static/OTTcircle/Netflix.svg";
import { ReactComponent as WatchaLogo } from "../static/OTTcircle/Watcha.svg";
import { ReactComponent as DisneyPlusLogo } from "../static/OTTcircle/DisneyPlus.svg";
import { ReactComponent as WavveLogo } from "../static/OTTcircle/Wavve.svg";
import { ReactComponent as AppleTVLogo } from "../static/OTTcircle/AppleTV.svg";
import { ReactComponent as PrimeVideoLogo } from "../static/OTTcircle/PrimeVideo.svg";

const ChecklistSearch = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		setIsStart(true);
	}, []);
	useEffect(() => {
		console.log("종류 : ", selected, ", 검색어 : ", input);
	});

	const [selected, setSelected] = useState("default");
	const [input, setInput] = useState("");
	const [isStart, setIsStart] = useState(true);

	const [TVs, setTVs] = useState([]);
	const [movies, setMovies] = useState([]);

	const getTVs = async () => {
		const response = await axios
			.get("https://over-the-ott.herokuapp.com/checklist/search/tv/")
			.then((response) => {
				console.log("인기 TV", response.data);
				setTVs(response.data.data);
			})
			.catch((error) => {
				console.log("인기 TV 불러오기 실패", error.message);
			});
	};
	const getMovies = async () => {
		const response = await axios
			.get("https://over-the-ott.herokuapp.com/checklist/search/movie/")
			.then((response) => {
				console.log("인기 영화", response.data);
				setMovies(response.data.data);
			})
			.catch((error) => {
				console.log("인기 영화 불러오기 실패", error.message);
			});
	};

	let startArray = TVs.concat(movies);
	const shuffle = () => {
		startArray = startArray.sort(() => Math.random() - 0.5);
		console.log(startArray);
	};

	useEffect(() => {
		getTVs();
		getMovies();
		shuffle();
	}, [isStart]);

	class OTTCircle extends React.Component {
		state = { isClicked: false };

		onClick = () => {
			this.setState({ isClicked: !this.state.isClicked });
		};

		render() {
			const { isClicked } = this.state;
			const { name } = this.props;
			if (name === "Netflix")
				return (
					<>
						<NetflixLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={this.onClick}
						/>
					</>
				);
			else if (name === "Watcha")
				return (
					<>
						<WatchaLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={this.onClick}
						/>
					</>
				);
			else if (name === "wavve")
				return (
					<>
						<WavveLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={this.onClick}
						/>
					</>
				);
			else if (name === "Disney Plus")
				return (
					<>
						<DisneyPlusLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={this.onClick}
						/>
					</>
				);
			else if (name === "Apple TV Plus")
				return (
					<>
						<AppleTVLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={this.onClick}
						/>
					</>
				);
			else if (name === "Amazon Prime Video")
				return (
					<>
						<PrimeVideoLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={this.onClick}
						/>
					</>
				);
			else console.error("Error: invalid OTT");
		}
	}

	const ottCircle = (provider) => {
		let num = 3 - provider.length;
		console.log(Array(num));

		return (
			<CircleWrapper>
				{provider.map((ott) => {
					return <OTTCircle name={ott} />;
				})}
				{Array(num)
					.fill(0)
					.map((num) => {
						return <GrayCircle />;
					})}
			</CircleWrapper>
		);
	};

	const dropdown = (season) => {
		if (season === undefined) {
			return null;
		} else {
			return (
				<Select defaultValue={"default"}>
					<option
						className="default"
						style={{ color: "#B8B8B8" }}
						value={"default"}
						disabled
					>
						시리즈 선택하기
					</option>
					{season.map((ss) => {
						return <option>시리즈 {ss.season}</option>;
					})}
				</Select>
			);
		}
	};

	const addList = () => {};

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
							/>
						</HeaderWrapper>
						<MainWrapper>
							{isStart ? (
								<div>
									<SearchedText>추천 인기 작품</SearchedText>
									<MediasWrapper>
										{startArray.map((media) => {
											return (
												<MediaContainer>
													<Poster
														src={
															"https://image.tmdb.org/t/p/w500" + media.poster
														}
													/>
													<div>
														<MediaTitle>{media.title}</MediaTitle>
														{ottCircle(media.provider)}
														{dropdown(media.season)}
														<ListBtn onClick={addList}>
															<ListBtnText>나의 리스트에 담기</ListBtnText>
														</ListBtn>
													</div>
												</MediaContainer>
											);
										})}
									</MediasWrapper>
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
	height: 100vh;
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

const Poster = styled.img`
	width: 10vw;
	height: 15vw;
	margin: 0.5vw;
	filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.4));
`;

const MediaTitle = styled.div`
	margin: 1vh 0 3vh 1vw;
	width: 15vw;
	height: auto;
	font-weight: 800;
	font-size: 1.2vw;
	color: #343434;
`;

const CircleWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 12vw;
	height: 5vh;
	margin: 0 0 3vh 0.5vw;
	svg {
		width: 2.4vw;
		height: 2.4vw;
		filter: drop-shadow(0px 0.2vw 0.5vw rgba(0, 0, 0, 0.25));
		cursor: pointer;
		opacity: 0.7;
		border: 2px solid transparent;
		border-radius: 50%;
		&:hover {
			opacity: 1;
		}
	}
	.selected {
		border: 2px solid #fff;
		outline: 3px solid #d38189;
		opacity: 1;
	}
`;

const GrayCircle = styled.div`
	width: 2.4vw;
	height: 2.4vw;
	margin: 2px;
	border-radius: 50%;
	background-color: #f7f7f7;
`;

const Select = styled.select`
	margin: 5vh 0 0 1vw;
	width: 11vw;
	height: 5vh;
	display: flex;
	align-items: center;
	text-align: center;
	font-size: 1vw;
	font-weight: 500;
	border: none;
	box-shadow: 0px 0.1vw 0.3vw rgba(0, 0, 0, 0.3);
	border-radius: 0.5vw;
	&:focus {
		outline: none;
	}
`;

const ListBtn = styled.div`
	margin: 3vh 0 0 1vw;
	width: 11vw;
	height: 6vh;
	background: #d38189;
	box-shadow: 0px 1px 5px rgba(97, 97, 97, 0.2);
	border-radius: 0.5vw;
	cursor: pointer;
`;

const ListBtnText = styled.div`
	font-weight: 600;
	font-size: 1vw;
	line-height: 6vh;
	text-align: center;
	color: #fff;
`;

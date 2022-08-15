import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as NetflixLogo } from "../../static/OTTcircle/Netflix.svg";
import { ReactComponent as WatchaLogo } from "../../static/OTTcircle/Watcha.svg";
import { ReactComponent as DisneyPlusLogo } from "../../static/OTTcircle/DisneyPlus.svg";
import { ReactComponent as WavveLogo } from "../../static/OTTcircle/Wavve.svg";
import { ReactComponent as AppleTVLogo } from "../../static/OTTcircle/AppleTV.svg";
import { ReactComponent as PrimeVideoLogo } from "../../static/OTTcircle/PrimeVideo.svg";

const ChecklistSearchResult = (props) => {
	const [selectedPv, setSelectedPv] = useState("");
	class OTTCircle extends React.Component {
		state = { isClicked: false };

		onClick = () => {
			this.setState({ isClicked: !this.state.isClicked });
		};
		clickPv = (pv) => {
			setSelectedPv(pv);
		};

		render() {
			const { isClicked } = this.state;
			const { name } = this.props;
			if (name === "Netflix")
				return (
					<>
						<NetflixLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={this.onClick && this.clickPv(name)}
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
		return (
			<CircleWrapper>
				{provider.map((ott) => {
					return <OTTCircle name={ott} onClick={() => setSelectedPv(ott)} />;
				})}
				{Array(num)
					.fill(0)
					.map((num) => {
						return <GrayCircle />;
					})}
			</CircleWrapper>
		);
	};

	useEffect(() => {
		console.log(selectedPv);
	});

	const [selectedSs, setSelectedSs] = useState("default");
	const dropdown = (season) => {
		if (season === undefined) {
			return null;
		} else {
			return (
				<Select
					defaultValue={"default"}
					onChange={(e) => setSelectedSs(e.target.value)}
				>
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

	const [postTV, setPostTV] = useState({});
	const [postMovie, setPostMovie] = useState({});
	const addList = (media) => {
		if (media.season === undefined) {
			setPostMovie({
				tmdb_id: media.tmdb_id,
				title: media.title,
				poster: media.poster,
				provider: selectedPv,
				runtime: media.runtime,
			});
			console.log("postMovie", postMovie);
			axios
				.post(
					"https://over-the-ott.herokuapp.com/checklist/search/movie/",
					postMovie
				)
				.then((response) => {
					console.log(response.data);
				})
				.catch((error) => {
					console.log("영화 리스트에 추가 실패", error);
				});
			setPostMovie({
				tmdb_id: 0,
				title: "",
				poster: "",
				provider: "",
				runtime: 0,
			});
		} else {
			setPostTV({
				tmdb_id: media.tmdb_id,
				title: media.title,
				poster: media.poster,
				episode_run_time: media.episode_run_time,
				season: Number(selectedSs.slice(3)),
				total_episode: 0,
				provider: selectedPv,
			});
			console.log("postTV", postTV);
			axios
				.post("https://over-the-ott.herokuapp.com/checklist/search/tv/", postTV)
				.then((response) => {
					console.log(response.data);
				})
				.catch((error) => {
					console.log("TV 리스트에 추가 실패", error);
				});
			setPostTV({
				tmdb_id: 0,
				title: "",
				poster: "",
				episode_run_time: 0,
				season: 0,
				total_episode: 0,
				provider: "",
			});
		}
	};

	return (
		<>
			{props.isStart ? (
				<MediaContainer>
					<Poster
						src={"https://image.tmdb.org/t/p/w500" + props.media.poster}
					/>
					<div>
						<MediaTitle>{props.media.title}</MediaTitle>
						{ottCircle(props.media.provider)}
						{dropdown(props.media.season)}
						<ListBtn onClick={() => addList(props.media)}>
							<ListBtnText>나의 리스트에 담기</ListBtnText>
						</ListBtn>
					</div>
				</MediaContainer>
			) : (
				<MediaContainer>
					<Poster
						src={"https://image.tmdb.org/t/p/w500" + props.media.poster}
					/>
					<div>
						<MediaTitle>{props.media.title}</MediaTitle>
						{ottCircle(props.media.provider)}
						{dropdown(props.media.season)}
						<ListBtn onClick={() => addList(props.media)}>
							<ListBtnText>나의 리스트에 담기</ListBtnText>
						</ListBtn>
					</div>
				</MediaContainer>
			)}
		</>
	);
};

export default ChecklistSearchResult;

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
	margin: 0.5vw 0 1.5vw 1vw;
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
	height: 2vw;
	margin: 0 0 2vw 0.5vw;
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
	margin: 2.5vw 0 0 1vw;
	width: 11vw;
	height: 2.5vw;
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
	margin: 1.8vw 0 0 1vw;
	width: 11vw;
	height: 2.6vw;
	background: #d38189;
	box-shadow: 0px 1px 5px rgba(97, 97, 97, 0.2);
	border-radius: 0.5vw;
	cursor: pointer;
`;

const ListBtnText = styled.div`
	font-weight: 600;
	font-size: 1vw;
	line-height: 2.6vw;
	text-align: center;
	color: #fff;
`;

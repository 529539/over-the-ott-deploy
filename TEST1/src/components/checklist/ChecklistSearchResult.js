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
	class OTTCircle extends React.Component {
		state = { isClicked: false };

		onClick() {
			this.setState({ isClicked: !this.state.isClicked });
		}

		render() {
			const { isClicked } = this.state;
			const { name } = this.props;
			if (name === "Netflix")
				return (
					<div>
						<NetflixLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={() => {
								props.setSelectedPv(name);
								this.onClick();
							}}
						/>
					</div>
				);
			else if (name === "Watcha")
				return (
					<div>
						<WatchaLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={() => {
								props.setSelectedPv(name);
								this.onClick();
							}}
						/>
					</div>
				);
			else if (name === "wavve")
				return (
					<div>
						<WavveLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={() => {
								props.setSelectedPv(name);
								this.onClick();
							}}
						/>
					</div>
				);
			else if (name === "Disney Plus")
				return (
					<div>
						<DisneyPlusLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={() => {
								props.setSelectedPv(name);
								this.onClick();
							}}
						/>
					</div>
				);
			else if (name === "Apple TV Plus")
				return (
					<div>
						<AppleTVLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={() => {
								props.setSelectedPv(name);
								this.onClick();
							}}
						/>
					</div>
				);
			else if (name === "Amazon Prime Video")
				return (
					<div>
						<PrimeVideoLogo
							className={isClicked ? "selected" : "not-selected"}
							onClick={() => {
								props.setSelectedPv(name);
								this.onClick();
							}}
						/>
					</div>
				);
			else console.error("Error: invalid OTT");
		}
	}

	const ottCircle = (provider) => {
		let num = 3 - provider.length;
		return (
			<CircleWrapper>
				{provider.map((ott) => {
					return (
						<>
							<OTTCircle name={ott} />
						</>
					);
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
		console.log(props.selectedPv);
		console.log(props.selectedSs);
		console.log(props.selectedTitle);
	});

	const dropdown = (season) => {
		if (season === undefined) {
			return null;
		} else {
			return (
				<Select
					defaultValue={"default"}
					onChange={(e) => props.setSelectedSs(e.target.value)}
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

	useEffect(() => {
		props.setSelectedPv("");
		props.setSelectedSs("default");
		props.setSelectedTitle("");
	}, []);

	const setSetMovie = (media) => {
		axios
			.post("/checklist/search/movie/", {
				tmdb_id: media.tmdb_id,
				title: media.title,
				poster: media.poster,
				provider: props.selectedPv,
				runtime: media.runtime,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log("영화 리스트에 추가 실패", error);
			});
	};
	const setSetTV = (media) => {
		let currentSs = media.season[Number(props.selectedSs.slice(3)) - 1];
		let currentEP = currentSs.episodes;
		if (currentEP === null) currentEP = 0;
		console.log({
			title: media.title,
			tmdb_id: media.tmdb_id,
			poster: media.poster,
			season: Number(props.selectedSs.slice(3)),
			total_episode: currentEP,
			provider: props.selectedPv,
			episode_run_time: media.episode_run_time,
		});
		axios
			.post("/checklist/search/tv/", {
				title: media.title,
				tmdb_id: media.tmdb_id,
				poster: media.poster,
				season: Number(props.selectedSs.slice(3)),
				total_episode: currentEP,
				provider: props.selectedPv,
				episode_run_time: media.episode_run_time,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log("TV 리스트에 추가 실패", error);
			});
	};
	const addList = (media) => {
		props.setSelectedTitle(media.title);
		console.log(props.selectedTitle);

		props.setIsOpen(true);
		if (media.season === undefined) {
			setSetMovie(media);
		} else {
			setSetTV(media);
		}
	};

	return (
		<>
			<MediaContainer>
				<Poster
					src={"https://image.tmdb.org/t/p/w500" + props.media.poster}
					alt="poster"
				/>
				<div>
					<MediaTitle>{props.media.title}</MediaTitle>
					{dropdown(props.media.season)}
					{ottCircle(props.media.provider)}
					<ListBtn onClick={() => addList(props.media)}>
						<ListBtnText>나의 리스트에 담기</ListBtnText>
					</ListBtn>
				</div>
			</MediaContainer>
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
	position: relative;
	display: flex;
	justify-content: space-around;
	width: 12vw;
	height: 2vw;
	margin: 1.5vw 0 2vw 0.5vw;
	svg {
		position: relative;
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
	margin: 0.5vw 0 0 1vw;
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

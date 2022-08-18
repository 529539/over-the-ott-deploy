import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as NetflixLogo } from "../../static/OTTcircle/Netflix.svg";
import { ReactComponent as WatchaLogo } from "../../static/OTTcircle/Watcha.svg";
import { ReactComponent as DisneyPlusLogo } from "../../static/OTTcircle/DisneyPlus.svg";
import { ReactComponent as WavveLogo } from "../../static/OTTcircle/Wavve.svg";
import { ReactComponent as AppleTVLogo } from "../../static/OTTcircle/AppleTV.svg";
import { ReactComponent as PrimeVideoLogo } from "../../static/OTTcircle/PrimeVideo.svg";
import { RiCloseCircleLine } from "react-icons/ri";
import ChecklistListModal from "./ChecklistListModal";

const ChecklistList = (props) => {
	const [ingTVs, setIngTVs] = useState([]);
	const [ingMovies, setIngMovies] = useState([]);
	const getTVs = async () => {
		const response = await axios
			.get("/checklist/tv/")
			.then((response) => {
				setIngTVs(response.data.data.watching);
			})
			.catch((error) => {
				console.log("TV 리스트 불러오기 실패", error.message);
			});
	};
	const getMovies = async () => {
		const response = await axios
			.get("/checklist/movie/")
			.then((response) => {
				setIngMovies(response.data.data.watching);
			})
			.catch((error) => {
				console.log("영화 리스트 불러오기 실패", error.message);
			});
	};

	useEffect(() => {
		window.location.reload();
		getTVs();
		getMovies();
	}, []);

	let watchingArray = ingTVs.concat(ingMovies);
	//console.log(watchingArray);

	const ottImage = (name) => {
		if (name === "Netflix")
			return (
				<>
					<NetflixLogo size="1vw" className="ott" />
				</>
			);
		else if (name === "Watcha")
			return (
				<>
					<WatchaLogo size="1vw" className="ott" />
				</>
			);
		else if (name === "wavve")
			return (
				<>
					<WavveLogo size="1vw" className="ott" />
				</>
			);
		else if (name === "Disney Plus")
			return (
				<>
					<DisneyPlusLogo size="1vw" className="ott" />
				</>
			);
		else if (name === "Apple TV Plus")
			return (
				<>
					<AppleTVLogo size="1vw" className="ott" />
				</>
			);
		else if (name === "Amazon Prime Video")
			return (
				<>
					<PrimeVideoLogo size="1vw" className="ott" />
				</>
			);
		else console.error("Error: invalid OTT");
	};

	const _handleModal = () => {
		props.setIsOpen(!props.isOpen);
		window.location.reload();
	};

	const [detailType, setDetailType] = useState("");
	const [detailID, setDetailID] = useState("");
	const openModal = (media) => {
		props.setIsOpen(true);
		setDetailID(media.id);
		if (media.type === "tv") setDetailType("tv");
		if (media.type === "movie") setDetailType("movie");
	};

	const onDelete = (type, id) => {
		if (type === "tv") {
			axios
				.delete(`/checklist/tv/${id}`)
				.then((response) => {
					getTVs(response.data);
				})
				.catch((error) => {
					console.log("삭제 실패", error);
				});
		}
		if (type === "movie") {
			axios
				.delete(`/checklist/movie/${id}`)
				.then((response) => {
					getMovies(response.data);
				})
				.catch((error) => {
					console.log("삭제 실패", error);
				});
		}
	};

	return (
		<>
			{watchingArray.map((media) => {
				return (
					<>
						<LineWrapper>
							{ottImage(media.provider)}
							<Title onClick={() => openModal(media)}>
								{media.title}{" "}
								{media.type === "tv" ? `(시리즈 ${media.season})` : null}
							</Title>
							<RiCloseCircleLine
								className="delete"
								onClick={() => onDelete(media.type, media.id)}
							/>
						</LineWrapper>
						{props.isOpen ? (
							<ChecklistListModal
								_handleModal={_handleModal}
								isOpen={props.isOpen}
								type={detailType}
								detailID={detailID}
							/>
						) : null}
					</>
				);
			})}
		</>
	);
};

export default ChecklistList;

const LineWrapper = styled.div`
	position: relative;
	width: 24vw;
	display: flex;
	align-items: center;
	margin-bottom: 2.6vh;
	.ott {
		width: 1.7vw;
		height: 1.7vw;
	}
	.delete {
		width: 1.2vw;
		height: 1.2vw;
		cursor: pointer;
		color: #808080;
		position: absolute;
		right: 1vw;
		&:hover {
			color: #343434;
		}
	}
`;

const Title = styled.div`
	width: 18vw;
	margin-left: 0.6vw;
	font-weight: 500;
	font-size: 1vw;
	color: #343434;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

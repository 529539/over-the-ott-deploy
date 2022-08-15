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
			.get("https://over-the-ott.herokuapp.com/checklist/tv/")
			.then((response) => {
				//console.log(response.data);
				setIngTVs(response.data.data.watching);
			})
			.catch((error) => {
				console.log("TV 리스트 불러오기 실패", error.message);
			});
	};
	const getMovies = async () => {
		const response = await axios
			.get("https://over-the-ott.herokuapp.com/checklist/movie/")
			.then((response) => {
				//console.log(response.data);
				setIngMovies(response.data.data.watching);
			})
			.catch((error) => {
				console.log("영화 리스트 불러오기 실패", error.message);
			});
	};

	useEffect(() => {
		getTVs();
		getMovies();
	}, []);

	let watchingArray = ingTVs.concat(ingMovies);
	//console.log(watchingArray);

	const ottImage = (name) => {
		if (name === "Netflix")
			return (
				<>
					<NetflixLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "Watcha")
			return (
				<>
					<WatchaLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "Wavve")
			return (
				<>
					<WavveLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "Disney Plus")
			return (
				<>
					<DisneyPlusLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "Apple TV")
			return (
				<>
					<AppleTVLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else if (name === "Prime Video")
			return (
				<>
					<PrimeVideoLogo
						style={{
							filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))",
						}}
						size="1vw"
					/>
				</>
			);
		else console.error("Error: invalid OTT");
	};

	const _handleModal = () => {
		props.setIsOpen(!props.isOpen);
	};

	const [detailType, setDetailType] = useState("");
	const [detail, setDetail] = useState({});
	const openModal = (media) => {
		props.setIsOpen(true);
		setDetail(media);
		if (media.type === "tv") setDetailType("tv");
		if (media.type === "movie") setDetailType("movie");
	};

	const onDelete = (type, id) => {
		if (type === "tv") {
			axios
				.delete(`https://over-the-ott.herokuapp.com/checklist/tv/${id}`)
				.then((response) => {
					getTVs(response.data);
				})
				.catch((error) => {
					console.log("삭제 실패", error);
				});
		}
		if (type === "movie") {
			axios
				.delete(`https://over-the-ott.herokuapp.com/checklist/movie/${id}`)
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
								detail={detail}
								setDetail={setDetail}
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
	svg {
		width: 1.7vw;
		height: 1.7vw;
		border-radius: 50%;
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

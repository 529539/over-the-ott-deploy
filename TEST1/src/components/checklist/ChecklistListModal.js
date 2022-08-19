import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { TbArrowBackUp } from "react-icons/tb";
import { HiCheck } from "react-icons/hi";
import { ReactComponent as NetflixLogo } from "../../static/OTTcircle/Netflix.svg";
import { ReactComponent as WatchaLogo } from "../../static/OTTcircle/Watcha.svg";
import { ReactComponent as DisneyPlusLogo } from "../../static/OTTcircle/DisneyPlus.svg";
import { ReactComponent as WavveLogo } from "../../static/OTTcircle/Wavve.svg";
import { ReactComponent as AppleTVLogo } from "../../static/OTTcircle/AppleTV.svg";
import { ReactComponent as PrimeVideoLogo } from "../../static/OTTcircle/PrimeVideo.svg";

const ChecklistListModal = ({
	_handleModal,
	isOpen,
	detailID,
	type,
	...rest
}) => {
	const [thisDetail, setThisDetail] = useState({});
	const [thisEp, setThisEp] = useState([]);
	const setDetail = (response) => {
		setThisDetail(response.data.data);
		setThisEp(thisDetail.episodes);
		//console.log(thisDetail);
		//console.log(thisDetail.episodes);
	};
	let id = detailID;
	const getDetails = async () => {
		const response = await axios
			.get(`/checklist/${type}/${id}/`)
			.then((response) => {
				//console.log(response.data);
				//console.log(response.data.data);
				setDetail(response);
			})
			.catch((error) => {
				console.log("상세 리스트 불러오기 실패", error.message);
			});
	};

	useEffect(() => {
		//console.log("id", id);
		//console.log("type", type);
	});

	useEffect(() => {
		getDetails();
	});

	const ottImage = (name) => {
		if (name === "Netflix")
			return (
				<>
					<NetflixLogo size="1vw" />
				</>
			);
		else if (name === "Watcha")
			return (
				<>
					<WatchaLogo size="1vw" />
				</>
			);
		else if (name === "wavve")
			return (
				<>
					<WavveLogo size="1vw" />
				</>
			);
		else if (name === "Disney Plus")
			return (
				<>
					<DisneyPlusLogo size="1vw" />
				</>
			);
		else if (name === "Apple TV Plus")
			return (
				<>
					<AppleTVLogo size="1vw" />
				</>
			);
		else if (name === "Amazon Prime Video")
			return (
				<>
					<PrimeVideoLogo size="1vw" />
				</>
			);
		else console.error("Error: invalid OTT");
	};

	const checkTV = (epid) => {
		axios
			.post(`/checklist/tv/${id}/`, {
				episode_id: epid,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log("TV 회차별 체크 추가 실패", error);
			});
	};

	const checkTVAll = () => {
		axios
			.put(`/checklist/tv/${id}/`)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log("TV 회차 전체 체크 추가 실패", error);
			});
	};

	const printEp = () => {
		return (
			<>
				{thisEp &&
					thisEp.map((ep) => {
						return (
							<>
								<EpContainer>
									<EpText>{ep.episode_num}화</EpText>
									<CheckCircleContainer>
										<CheckCircle onClick={() => checkTV(ep.id)}>
											<HiCheck
												style={{ display: ep.is_finished ? "block" : "none" }}
											/>
										</CheckCircle>
									</CheckCircleContainer>
								</EpContainer>
								<EpBorder />
							</>
						);
					})}
			</>
		);
	};

	const checkMv = () => {
		axios
			.post(`/checklist/movie/${id}/`)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log("영화 완료 리스트에 추가 실패", error);
			});
	};

	const printEpM = () => {
		return (
			<>
				<EpContainer>
					<EpText>단편</EpText>
					<CheckCircleContainer>
						<CheckCircle onClick={() => checkMv()}>
							<HiCheck
								style={{ display: thisDetail.is_finished ? "block" : "none" }}
							/>
						</CheckCircle>
					</CheckCircleContainer>
				</EpContainer>
				<EpBorder />
			</>
		);
	};

	return (
		<Container>
			<Background onClick={_handleModal} />
			<ModalBlock {...rest}>
				<HeaderWrapper>
					<Title>리스트 상세 조회 </Title>
					<TbArrowBackUp stroke="#808080" onClick={_handleModal} />
				</HeaderWrapper>
				<BorderWrapper>
					<Border />
				</BorderWrapper>
				<Contents>
					{thisDetail.poster && (
						<>
							<Poster
								src={"https://image.tmdb.org/t/p/w500" + thisDetail.poster}
								alt="poster"
							/>
							<div>
								{thisDetail.season &&
									(type === "tv" ? (
										<>
											<TitleWrapper>
												{ottImage(thisDetail.provider)}
												<MediaTitle>
													{thisDetail.title} (시리즈 {thisDetail.season})
												</MediaTitle>
											</TitleWrapper>
											{thisEp && (
												<>
													<SelectAll onClick={() => checkTVAll()}>
														전체 선택
													</SelectAll>
													<EpWrapper
														className="scrollbar"
														style={{ marginTop: "1vh" }}
													>
														{printEp()}
													</EpWrapper>
												</>
											)}
										</>
									) : null)}
								{type === "movie" ? (
									<>
										<TitleWrapper>
											{ottImage(thisDetail.provider)}
											<MediaTitle>{thisDetail.title}</MediaTitle>
										</TitleWrapper>
										<EpWrapperM>{printEpM(thisDetail.id)}</EpWrapperM>
									</>
								) : null}
							</div>
						</>
					)}
				</Contents>
			</ModalBlock>
		</Container>
	);
};

export default ChecklistListModal;

const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: 200;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Background = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	animation: modal-bg-show 0.3s;
	@keyframes modal-bg-show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const ModalBlock = styled.div`
	position: absolute;
	top: 17vh;
	border-radius: 1vw;
	padding: 1.5rem;
	background-color: #f5f5f5;
	width: 34vw;
	height: 50vh;
	animation: modal-show 0.3s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -10px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
	svg {
		width: 2vw;
		height: 2vw;
		cursor: pointer;
	}
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 3vh 3vw;
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 1.3vw;
	color: #7e7e7e;
`;

const BorderWrapper = styled.div`
	width: 34vw;
	display: flex;
	justify-content: center;
`;

const Border = styled.div`
	width: 28vw;
	height: 0;
	border-bottom: 1px solid #d7d7d7;
`;

const Contents = styled.div`
	display: flex;
	width: 36vw;
	height: 45vh;
	.scrollbar {
		overflow-y: auto;
		overflow-x: hidden;
		scrollbar-width: thin;
		width: 13vw;
		height: 20vh;
		padding-right: 0.2vw;
	}
	.scrollbar::-webkit-scrollbar {
		position: absolute;
		width: 0.3vw;
	}
	.scrollbar::-webkit-scrollbar-track {
		background-color: #e6e6e8;
		border-radius: 0.3vw;
		box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
	}
	.scrollbar::-webkit-scrollbar-thumb {
		background-color: #bdbdbf;
		height: auto;
		border-radius: 0.3vw;
	}
`;

const Poster = styled.img`
	width: 10vw;
	height: 15vw;
	margin: 5vh 0 0 3vw;
	filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.4));
`;

const TitleWrapper = styled.div`
	margin-top: 6vh;
	margin-left: 1.5vw;
	display: flex;
	svg {
		width: 2vw;
		height: 2vw;
	}
`;

const MediaTitle = styled.div`
	width: 14vw;
	height: auto;
	font-weight: 500;
	font-size: 1.2vw;
	margin-left: 0.7vw;
	margin-top: 0.3vh;
	color: #343434;
`;

const SelectAll = styled.div`
	font-size: 0.8vw;
	margin: 1.5vh 0 0 13.5vw;
	color: #d38189;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	&:active {
		color: gray;
	}
`;

const EpWrapper = styled.div`
	margin: 2vh 0 0 4vw;
	width: 13vw;
	height: 20vh;
	border: 1px solid #dfdfdf;
	border-radius: 0.5vw;
	box-shadow: 0px 0.1vw 0.2vw rgba(0, 0, 0, 0.25);
`;

const EpWrapperM = styled.div`
	margin: 2vh 0 0 4vw;
	width: 13vw;
	height: 1.8vw;
	border: 1px solid #dfdfdf;
	border-radius: 0.5vw;
	box-shadow: 0px 0.1vw 0.2vw rgba(0, 0, 0, 0.25);
`;

const EpContainer = styled.div`
	display: flex;
	margin: 0.3vh 0;
`;

const EpText = styled.div`
	width: 11vw;
	height: 1.5vw;
	font-weight: 500;
	font-size: 1vw;
	line-height: 1.5vw;
	text-align: center;
`;

const EpBorder = styled.div`
	width: 12.9vw;
	height: 0;
	border-bottom: 1px solid #dfdfdf;
`;

const CheckCircleContainer = styled.div`
	width: 1.5vw;
	height: 1.5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		position: absolute;
		width: 1.1vw;
		height: 1.1vw;
		color: #c4c4c4;
		display: none;
	}
`;

const CheckCircle = styled.div`
	cursor: pointer;
	width: 1.1vw;
	height: 1.1vw;
	border: 2px solid #c4c4c4;
	border-radius: 50%;
	position: relative;
	z-index: 5;
`;

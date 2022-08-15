import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { TbArrowBackUp } from "react-icons/tb";

const ChecklistListModal = ({
	_handleModal,
	isOpen,
	type,
	detail,
	setDetail,
	...rest
}) => {
	let id = detail.id;
	const getDetails = async () => {
		const response = await axios
			.get(`https://over-the-ott.herokuapp.com/checklist/${type}/${id}`)
			.then((response) => {
				//console.log(response.data);
				setDetail(response.data.data);
			})
			.catch((error) => {
				console.log("상세 리스트 불러오기 실패", error.message);
			});
	};

	useEffect(() => {
		console.log("id", id, "type", type);
	}, []);

	useEffect(() => {
		getDetails();
	}, [isOpen]);

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
					<Poster
						src={"https://image.tmdb.org/t/p/w500" + detail.poster}
						alt="poster"
					/>
					<MediaTitle>
						{detail.title}
						{type === "tv" ? ` (시리즈 ${detail.season})` : null}
					</MediaTitle>
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
	top: 12vh;
	border-radius: 1vw;
	padding: 1.5rem;
	background-color: #f5f5f5;
	width: 30vw;
	height: 60vh;
	animation: modal-show 0.3s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -20px;
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
	width: 30vw;
	display: flex;
	justify-content: center;
`;

const Border = styled.div`
	width: 24vw;
	height: 0;
	border-bottom: 1px solid #d7d7d7;
`;

const Contents = styled.div`
	display: flex;
	width: 30vw;
	height: 45vh;
`;

const Poster = styled.img`
	width: 10vw;
	height: 15vw;
	margin: 5vh 0 0 3vw;
	filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.4));
`;

const MediaTitle = styled.div`
	width: 13vw;
	height: auto;
	font-weight: 800;
	font-size: 1vw;
	margin: 5vh 0 0 0.5vw;
	color: #343434;
`;

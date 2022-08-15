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

const ChecklistDoneList = (props) => {
	const [edTVs, setEdTVs] = useState([]);
	const [edMovies, setEdMovies] = useState([]);

	const getTVs = async () => {
		const response = await axios
			.get("https://over-the-ott.herokuapp.com/checklist/tv/")
			.then((response) => {
				//console.log(response.data);
				setEdTVs(response.data.data.watched);
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
				setEdMovies(response.data.data.watched);
			})
			.catch((error) => {
				console.log("영화 리스트 불러오기 실패", error.message);
			});
	};

	useEffect(() => {
		getTVs();
		getMovies();
	}, []);

	let watchedArray = edTVs.concat(edMovies);
	//console.log(watchedArray);

	return (
		<>
			<div></div>
		</>
	);
};

export default ChecklistDoneList;

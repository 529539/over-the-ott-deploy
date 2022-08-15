import styled from 'styled-components';
import style from '../../db.json';
import Background from './../Background';
import { useEffect } from 'react';

const BarChart = props => {
	//조회할 ott별 정보 저장
	var ottData = [];
	ottData = props.data;

	var ottCSS = [];
	ottCSS = props.ottCSS;

	//ott 이름에 맞는 색 반환 함수
	function color(ott_name) {
		switch (ott_name) {
			case 'Netflix':
				return '#D90B1C';
			case 'Watcha':
				return '#FF0558';
			case 'Wavve':
				return '#1F4EF5';
			case 'Disney Plus':
				return '#192F72';
			case 'Apple TV':
				return '#77848C';
			default:
				return '#10BBE0';
		}
	}
	//ott 이름에 맞는 이미지 반환 함수
	function img(ott_name) {
		switch (ott_name) {
			case 'Netflix':
				return ottCSS[0].img;
			case 'Watcha':
				return ottCSS[1].img;
			case 'Wavve':
				return ottCSS[2].img;
			case 'Disney Plus':
				return ottCSS[3].img;
			case 'Apple TV':
				return ottCSS[4].img;
			default:
				return ottCSS[5].img;
		}
	}
	//ott won_per_min 값 비율 계산 함수
	function percent(won) {
		var sum = 0;
		for (var i = 0; i < ottData.length; i++) {
			sum += ottData[i].won_per_min;
		}
		var p = 100 / sum;
		won = String(won * p);
		won = won + 'vw';
		return won;
	}
	//그라데이션 생성 함수
	function gradient(ott_name) {
		var originColor = color(ott_name);
		var result = 'linear-gradient(90deg, white,' + originColor + ')';
		return result;
	}

	return (
		<>
			<BarWrapper>
				{ottData.map(data => (
					<OttBar className={data.ott_name}>
						<RunTime>{data.total_runtime}원/분</RunTime>
						<div className='contents'>
							<img src={img(data.ott_name)} />
						</div>
						<Bar
							style={{
								background: gradient(data.ott_name),
								width: percent(data.won_per_min),
								opacity: '80%',
							}}
						/>
					</OttBar>
				))}
			</BarWrapper>
		</>
	);
};

const BarWrapper = styled.div`
	width: 30.26vw;
	height: 45.4vh;
	display: flex;
	flex-direction: column;
`;
const OttBar = styled.div`
	width: 100%;
	height: 5.97vh;
	margin-top: 2vh;
	display: flex;
	contents {
		width: 20vw;
	}
	img {
		position: absolute;
		z-index: 10;
		width: 3.24vw;
		height: 5.77vh;
	}
`;
const RunTime = styled.div`
	z-index: 20;
	position: absolute;
	width: 3.97vw;
	height: 2.21vh;
	margin: 0 0 1vh 3.58vw;
	font-weight: 400;
	font-size: 0.95vw;
	display: flex;
	align-items: center;
	color: #ffffff;
`;
const Bar = styled.div`
	position: relative;
	height: 2.85vh;
	border-radius: 19.2vw;
	margin: 2.5vh 0 0 1vh;
	animation: fadeInLeft 0.5s;
	@keyframes fadeInLeft {
		0% {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateZ(0);
		}
	}
`;
export default BarChart;

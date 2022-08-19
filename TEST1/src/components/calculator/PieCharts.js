import React from 'react';
import styled from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';
import { ReactComponent as Netflix } from '../../static/OTTcircle/Netflix.svg';
import { ReactComponent as Watcha } from '../../static/OTTcircle/Watcha.svg';
import { ReactComponent as Wavve } from '../../static/OTTcircle/Wavve.svg';
import { ReactComponent as DisneyPlus } from '../../static/OTTcircle/DisneyPlus.svg';
import { ReactComponent as AppleTV } from '../../static/OTTcircle/AppleTV.svg';
import { ReactComponent as PrimeVideo } from '../../static/OTTcircle/PrimeVideo.svg';

const PieCharts = props => {
	//정보 불러와서 저장
	var ottData = [];
	ottData = props.data;

	var ottCSS = [];
	ottCSS = props.ottCSS;

	function color(ott_name) {
		switch (ott_name) {
			case 'Netflix':
				return '#D90B1C';
			case 'Watcha':
				return '#FF0558';
			case 'wavve':
				return '#1F4EF5';
			case 'Disney Plus':
				return '#192F72';
			case 'Apple TV Plus':
				return '#77848C';
			case 'Amazon Prime Video':
				return '#10BBE0';
		}
	}
	function img(ott_name) {
		switch (ott_name) {
			case 'Netflix':
				return <Netflix />;
			case 'Watcha':
				return <Watcha />;
			case 'wavve':
				return <Wavve />;
			case 'Disney Plus':
				return <DisneyPlus />;
			case 'Apple TV Plus':
				return <AppleTV />;
			case 'Amazon Prime Video':
				return <PrimeVideo />;
		}
	}

	function percent(runtime) {
		var sum = 0;
		for (var i = 0; i < ottData.length; i++) {
			sum += ottData[i].total_runtime;
		}
		var p = 100 / sum;
		runtime = runtime * p;
		return runtime;
	}

	const pieData = [];

	function makeData(pieData) {
		var data = {};
		for (var i = 0; i < ottData.length; i++) {
			data = {
				title: ottData[i].ott_name,
				value: percent(ottData[i].total_runtime),
				color: color(ottData[i].ott_name),
				img: img(ottData[i].ott_name),
			};
			pieData = [...pieData, data];
		}
		return pieData;
	}

	return (
		<>
			<PieWrapper>
				<PieChart
					className='pie'
					data={makeData(pieData)}
					label={({ dataEntry }) =>
						//dataEntry.img
						dataEntry.title + ' ' + dataEntry.value.toFixed(2) + '%'
					}
					//children={({ dataEntry }) => dataEntry.img}
					labelStyle={{ fill: '#ffffff', fontSize: '6px' }}
					labelPosition={90}
					lineWidth={30}
				/>
			</PieWrapper>
		</>
	);
};
const PieWrapper = styled.div`
	width: 36.45vw; //36.61vw;;
	height: 46.29vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.pie {
		width: 30.16vw; //36.61vw;;
		height: 38.07vh;
		opacity: 70%;
		animation: rotate 1s;
		@keyframes rotate {
			0% {
				transform: rotate(-70deg);
			}
			to {
				transform: translateZ(0);
			}
		}
	}
`;

export default PieCharts;

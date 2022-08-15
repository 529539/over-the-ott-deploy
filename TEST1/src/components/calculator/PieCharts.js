import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PieChart } from 'react-minimal-pie-chart';

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
						dataEntry.title + ' ' + dataEntry.value.toFixed(2) + '%'
					}
					labelStyle={{ fill: '#ffffff', fontSize: '5px' }}
					labelPosition={110}
					lineWidth={30}
				/>
				;
			</PieWrapper>
		</>
	);
};
const PieWrapper = styled.div`
	width: 36.61vw;
	height: 37.29vh;
	.pie {
		opacity: 80%;
		animation: rotate 1s;
		@keyframes rotate {
			0% {
				opacity: 0;
				transform: rotate(-70deg);
			}
			to {
				opacity: 1;
				transform: translateZ(0);
			}
		}
	}
`;

export default PieCharts;

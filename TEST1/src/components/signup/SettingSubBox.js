import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ottArray from '../../db.json';
import SettingForm from './SettingForm';

const SettingSubBox = props => {
	// form에 들어갈 text 및 상태 관리
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [btnActive, setBtnActive] = useState(false);

	//구독 정보 저장
	const [otts, setOtts] = useState([]);

	//이전 페이지에서 저장한 ott 불러오기
	var ottArray = [];
	ottArray = props.ottActive.filter(ott => ott.active);

	useEffect(() => {
		setTitle1('OTT Information');
		setTitle2('구독 중인 OTT 정보 입력하기');
	}, []);

	//구독 정보를 저장하는 함수
	const SaveOtts = e => {
		ottArray.map(ott => {
			setOtts(...otts, {
				ott_nmae: ott.name,
				membership: '',
				pay_date: '',
				share: 1,
			});
		});
	};
	return (
		<Wrapper>
			<SettingForm title1={title1} title2={title2} />
			<Container>
				<ContainerTitle>
					<div>
						<p>OTT</p>
						<p>매달 결제일</p>
						<p>구독권</p>
						<p>쉐어인원</p>
					</div>
					{ottArray.length !== 1 ? (
						<div>
							<p>OTT</p>
							<p>매달 결제일</p>
							<p>구독권</p>
							<p>쉐어인원</p>
						</div>
					) : (
						console.log('1개만 구독')
					)}
				</ContainerTitle>
				<SubContainer>
					{ottArray.map(ott => (
						<div className={ott.name}>
							<img src={ott.img} />
						</div>
					))}
				</SubContainer>
			</Container>
			<GoNextBtn className={btnActive ? ' active' : ''}>확인</GoNextBtn>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;
const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	margin-top: 43.7vh;
	z-index: 4;
	width: 52.39vw;
	height: 20.09vh;
	justify-content: space-around;
`;
const ContainerTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	div {
		width: 18.75vw;
		height: 2.12vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
		font-size: 0.98vw;
		color: #414141;
	}
`;
const SubContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	div {
		width: 26.19vw; //18.75vw;;
		height: 3.88vh;
		display: flex;
		margin-bottom: 0.7vh;
	}
	img {
		width: 2.1875vw;
		height: 3.88vh;
		filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.25));
		margin-left: 3.54vw;
	}
`;
const GoNextBtn = styled.button`
	cursor: pointer;
	width: 20.67vw;
	height: 4.16vh;
	position: absolute;
	z-index: 2;
	top: 70.55vh;
	background: #dcdcdc;
	border-radius: 1.27vw;
	border-style: none;
	color: #ffffff;
	&.active {
		background-color: #d38189;
	}
`;

export default SettingSubBox;

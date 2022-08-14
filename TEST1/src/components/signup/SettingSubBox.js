import styled from 'styled-components';
import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SettingForm from './SettingForm';

const SettingSubBox = props => {
	// form에 들어갈 text 및 상태 관리
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [btnActive, setBtnActive] = useState(false);

	//유저의 구독 정보 저장
	const [otts, setOtts] = useState([]);

	//이전 페이지에서 저장한 ott 불러오기
	var ottArray = [];
	ottArray = props.ottActive.filter(ott => ott.active);

	//DB에 있는 ott 정보를 저장
	const [infos, setInfos] = useState([]);

	useEffect(() => {
		setTitle1('OTT Information');
		setTitle2('구독 중인 OTT 정보 입력하기');
		getOttsInfos();
		dropdownM();
	}, []);

	//DB에서 구독 정보를 받아와서 저장하는 함수
	const getOttsInfos = async () => {
		const response = await axios
			.get('https://over-the-ott.herokuapp.com/account/ott/')
			.then(res => {
				setInfos(res.data.data);
			})
			.catch(error => {
				console.log('구독권 정보 불러오기 실패', error.message);
			});
	};
	//날짜 선택 드롭다운
	const dropdownD = () => {
		var date = 0;
		return (
			<SelectD defaultValue={'default'}>
				<option
					className='default'
					style={{ fontWeight: '600' }}
					value={'default'}
					disabled
				>
					선택
				</option>

				{Array(30)
					.fill(0)
					.map((date, index) => {
						return <option>{index + 1}일</option>;
					})}
			</SelectD>
		);
	};
	//멤버쉽 선택 드롭다운
	const dropdownM = ott_name => {
		const printM = () => {
			switch (ott_name) {
				case 'Netflix':
				case 'Wavve':
					return (
						<>
							<option>베이직</option>
							<option>스탠다드</option>
							<option>프리미엄</option>
						</>
					);
				case 'Watcha':
					return (
						<>
							<option>일반</option>
							<option>프리미엄</option>
						</>
					);
				case 'Apple TV':
					return <option>일반</option>;
				default:
					return (
						<>
							<option>월간</option>
							<option>연간</option>
						</>
					);
			}
		};
		return (
			<SelectM defaultValue={'default'}>
				<option
					className='default'
					style={{ fontWeight: '600' }}
					value={'default'}
					disabled
				>
					선택
				</option>
				{printM()}
			</SelectM>
		);
	};
	//쉐어인원 선택 드롭다운
	const dropdownS = () => {
		const printS = () => {
			return (
				<>
					<option>1인</option>
					<option>2인</option>
					<option>3인</option>
					<option>4인</option>
				</>
			);
		};
		return (
			<SelectS defaultValue={'default'}>
				<option
					className='default'
					style={{ fontWeight: '600' }}
					value={'default'}
					disabled
				>
					1인
				</option>
				{printS()}
			</SelectS>
		);
	};
	//유저가 입력한 구독 정보를 저장하는 함수
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
						<section>
							<p>OTT</p>
							<p>매달 결제일</p>
							<p>구독권</p>
							<p>쉐어인원</p>
						</section>
					</div>
					{ottArray.length !== 1 ? (
						<div>
							<section>
								<p>OTT</p>
								<p>매달 결제일</p>
								<p>구독권</p>
								<p>쉐어인원</p>
							</section>
						</div>
					) : (
						console.log('1개만 구독')
					)}
				</ContainerTitle>
				<SubContainer>
					{ottArray.map(ott => (
						<div className={ott.name}>
							<img src={ott.img} />
							{dropdownD()}
							{dropdownM(ott.name)}
							{dropdownS()}
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
	flex-direction: column;
	flex-wrap: wrap;
	position: absolute;
	margin-top: 43.7vh;
	z-index: 4;
	width: 52.39vw;
	height: 20.09vh;
`;
const ContainerTitle = styled.div`
	width: 100%;
	height: 2.12vh;
	display: flex;
	div {
		width: 26.19vw;
		height: 2.12vh;
	}
	section {
		width: 18.75vw;
		height: 2.12vh;
		display: flex;
		margin-left: 3.54vw;
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
	margin-top: 2.3vh;
	div {
		width: 26.19vw;
		height: 3.88vh;
		display: flex;
		margin-bottom: 1.1vh;
	}
	img {
		width: 2.1875vw;
		height: 3.88vh;
		filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.25));
		margin-left: 3.54vw;
	}
`;
const SelectD = styled.select`
	width: 4.32vw;
	height: 3.88vh;
	display: flex;
	align-items: center;
	text-align: center;
	margin: 0.4vh 0 0 1.62vw;
	background: #ffffff;
	border: 0.8px solid #979797;
	box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
	border-radius: 0.35vw;
	font-size: 0.88vw;
	font-weight: 500;
	option {
		padding: 0;
	}
	&:focus {
		outline: none;
	}
`;
const SelectM = styled.select`
	width: 5.31vw;
	height: 3.88vh;
	display: flex;
	align-items: center;
	text-align: center;
	margin: 0.4vh 1.19vw 0 0.98vw;
	background: #ffffff;
	border: 0.8px solid #979797;
	box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
	border-radius: 0.35vw;
	font-size: 0.88vw;
	font-weight: 500;
	option {
		padding: 0;
	}
	&:focus {
		outline: none;
	}
`;
const SelectS = styled.select`
	width: 3.48vw;
	height: 3.88vh;
	display: flex;
	align-items: center;
	text-align: center;
	margin-top: 0.4vh;
	background: #ffffff;
	border: 0.8px solid #979797;
	box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
	border-radius: 0.35vw;
	font-size: 0.88vw;
	font-weight: 500;
	option {
		padding: 0;
	}
	&:focus {
		outline: none;
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

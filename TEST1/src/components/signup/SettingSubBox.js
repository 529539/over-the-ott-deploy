import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SettingForm from './SettingForm';

const SettingSubBox = props => {
	const navigate = useNavigate();
	// form에 들어갈 text 및 상태 관리
	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [btnActive, setBtnActive] = useState(false);

	//문자열 끊을 때 사용하는 정규 표현식
	var regex = /[^0-9]/g;

	//유저의 구독 정보 저장
	var otts = [];

	//이전 페이지에서 저장한 ott 불러오기
	var ottArray = [];
	ottArray = props.ottActive.filter(ott => ott.active);

	useEffect(() => {
		setTitle1('OTT Information');
		setTitle2('구독 중인 OTT 정보 입력하기');
	}, []);

	//구독 정보 저장 변수
	var name = '';
	var member = '';
	var date = 0;
	var share = 0;
	var length = 0;

	//유저가 입력한 구독 정보를 저장
	var SaveInfo = () => {
		return (otts = [
			...otts,
			{
				ott_name: name,
				membership: member,
				pay_date: date,
				share: share,
			},
		]);
	};

	const SendInfo = () => {
		var result = SaveInfo();
		var otts = [];
		otts = removeDuplicates(result, 'ott_name');
		if (otts.length === ottArray.length) {
			axios
				.post('/account/addott/', otts)
				.then(res => {
					navigate('/signup/setting/subscribe');
				})
				.catch(error => {
					console.log(error);
				});
		}
	};
	// OTT 정보 입력시 중복 제거 함수
	function removeDuplicates(originalArray, prop) {
		var newArray = [];
		var lookupObject = {};

		for (var i in originalArray) {
			lookupObject[originalArray[i][prop]] = originalArray[i];
		}

		for (i in lookupObject) {
			newArray.push(lookupObject[i]);
		}
		return newArray;
	}
	//날짜 선택 드롭다운
	const dropdownD = ott_name => {
		var day = 0;
		return (
			<SelectD
				id={ott_name}
				defaultValue={'default'}
				onChange={e => {
					date = Number(e.target.value.replace(regex, ''));
				}}
			>
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
					.map((day, index) => {
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
				case 'wavve':
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
				case 'Apple TV Plus':
					return <option>일반</option>;
				case 'Amazon Prime Video':
					return (
						<>
							<option>월간</option>
							<option>연간</option>
						</>
					);
			}
		};
		return (
			<SelectM
				id={ott_name}
				defaultValue={'default'}
				onChange={e => {
					member = e.target.value;
				}}
			>
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
	const dropdownS = ott_name => {
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
			<SelectS
				id={ott_name}
				defaultValue={'default'}
				onChange={e => {
					share = Number(e.target.value.replace(regex, ''));
					SaveInfo();
				}}
			>
				<option
					className='default'
					style={{ fontWeight: '600' }}
					value={'default'}
					disabled
				>
					선택
				</option>
				{printS()}
			</SelectS>
		);
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
						console.log('')
					)}
				</ContainerTitle>
				<SubContainer>
					{ottArray.map(ott => (
						<div
							id={ott.name}
							className={ott.name}
							onChange={e => {
								name = e.target.id;
							}}
						>
							<img src={ott.img} />
							{dropdownD(ott.name)}
							{dropdownM(ott.name)}
							{dropdownS(ott.name)}
						</div>
					))}
				</SubContainer>
			</Container>
			<GoNextBtn
				style={{ backgroundColor: '#DCDCDC' }}
				//style={{ backgroundColor: btnActive ? '#d38189' : '#DCDCDC' }}
				onClick={SendInfo}
			>
				확인
			</GoNextBtn>
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

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import Background from '../components/Background';
import { ReactComponent as NetflixLogo } from '../static/OTTcircle/Netflix.svg';
import { ReactComponent as WatchaLogo } from '../static/OTTcircle/Watcha.svg';
import { ReactComponent as DisneyPlusLogo } from '../static/OTTcircle/DisneyPlus.svg';
import { ReactComponent as WavveLogo } from '../static/OTTcircle/Wavve.svg';
import { ReactComponent as AppleTVLogo } from '../static/OTTcircle/AppleTV.svg';
import { ReactComponent as PrimeVideoLogo } from '../static/OTTcircle/PrimeVideo.svg';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

const MyPage = () => {
	const nav = useNavigate();
	const logoutHandler = () => {
		axios
			.get('https://over-the-ott.herokuapp.com/account/logout/')
			.then(response => {
				console.log(response.data);
				nav('/');
			});
	};

	const [isEditing, setIsEditing] = useState(false);
	const [otts, setOtts] = useState([]);
	const [ottsInfos, setOttsInfos] = useState([]);

	const btnClick = () => {
		setIsEditing(!isEditing);
	};
	console.log(isEditing);

	useEffect(() => {
		setIsEditing(false);
		getOtts();
		getOttsInfos();
	}, []);

	const getOtts = async () => {
		const response = await axios
			.get('https://over-the-ott.herokuapp.com/account/addott/')
			.then(response => {
				let result = response.data.data.sort((a, b) => {
					return a.ott.id - b.ott.id;
				});
				setOtts(result);
			})
			.catch(error => {
				console.log('구독 정보 불러오기 실패', error.message);
			});
	};
	console.log(otts);

	let disableOtts = [];
	if (otts.map(row => row.ott.ott).includes('Netflix') === false) {
		disableOtts.push({
			ott: {
				id: 1,
				ott: 'Netflix',
				membership: '선택',
				fee: 0,
			},
			pay_date: 0,
			pay_amount: 0.0,
			share: 0,
		});
	}
	if (otts.map(row => row.ott.ott).includes('Watcha') === false) {
		disableOtts.push({
			ott: {
				id: 4,
				ott: 'Watcha',
				membership: '선택',
				fee: 0,
			},
			pay_date: 0,
			pay_amount: 0.0,
			share: 0,
		});
	}
	if (otts.map(row => row.ott.ott).includes('Wavve') === false) {
		disableOtts.push({
			ott: {
				id: 11,
				ott: 'Wavve',
				membership: '선택',
				fee: 0,
			},
			pay_date: 0,
			pay_amount: 0.0,
			share: 0,
		});
	}
	if (otts.map(row => row.ott.ott).includes('Disney Plus') === false) {
		disableOtts.push({
			ott: {
				id: 6,
				ott: 'Disney Plus',
				membership: '선택',
				fee: 0,
			},
			pay_date: 0,
			pay_amount: 0.0,
			share: 0,
		});
	}
	if (otts.map(row => row.ott.ott).includes('Apple TV') === false) {
		disableOtts.push({
			ott: {
				id: 8,
				ott: 'Apple TV',
				membership: '선택',
				fee: 0,
			},
			pay_date: 0,
			pay_amount: 0.0,
			share: 0,
		});
	}
	if (otts.map(row => row.ott.ott).includes('Prime Video') === false) {
		disableOtts.push({
			ott: {
				id: 9,
				ott: 'Prime Video',
				membership: '선택',
				fee: 0,
			},
			pay_date: 0,
			pay_amount: 0.0,
			share: 0,
		});
	}
	console.log(disableOtts);

	const ottImage = name => {
		if (name === 'Netflix')
			return (
				<>
					<NetflixLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'Watcha')
			return (
				<>
					<WatchaLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'Wavve')
			return (
				<>
					<WavveLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'Disney Plus')
			return (
				<>
					<DisneyPlusLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'Apple TV')
			return (
				<>
					<AppleTVLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else if (name === 'Prime Video')
			return (
				<>
					<PrimeVideoLogo
						style={{
							filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25))',
						}}
						size='1vw'
					/>
				</>
			);
		else console.error('Error: invalid OTT');
	};

	const color = name => {
		if (name === 'Netflix') return '#D90B1C';
		else if (name === 'Watcha') return '#FF0558';
		else if (name === 'Wavve') return '#1F4EF5';
		else if (name === 'Disney Plus') return '#192F72';
		else if (name === 'Apple TV') return '#77848C';
		else if (name === 'Prime Video') return '#10BBE0';
		else console.error('Error: invalid OTT');
	};

	const showButton = (name, id) => {
		if (otts.map(row => row.ott.ott).includes(name) === true) {
			return (
				<EditBtn type='button' onClick={() => turnOff(name, id)}>
					<HiMinusSm size='1.7vw' fill='#fff' />
				</EditBtn>
			);
		} else {
			return (
				<EditBtn type='button' onClick={() => turnOn(name, id)}>
					<HiPlusSm size='1.7vw' fill='#fff' />
				</EditBtn>
			);
		}
	};

	const turnOn = (name, id) => {
		console.log('+' + name);
		axios
			.post('https://over-the-ott.herokuapp.com/account/addott/', [
				{
					ott_name: name,
					membership: '일반',
					pay_date: 30,
					share: 1,
				},
			])
			.then(response => {
				getOtts(response.data);
			})
			.catch(error => {
				console.log('추가 실패', error);
			});
	};
	const turnOff = (name, id) => {
		console.log('-' + name);
		axios
			.delete(`https://over-the-ott.herokuapp.com/account/addott/${id}`)
			.then(response => {
				getOtts(response.data);
			})
			.catch(error => {
				console.log('삭제 실패', error);
			});
	};

	const getOttsInfos = async () => {
		const response = await axios
			.get('https://over-the-ott.herokuapp.com/account/ott/')
			.then(response => {
				setOttsInfos(response.data.data);
			})
			.catch(error => {
				console.log('구독권 정보 불러오기 실패', error.message);
			});
	};
	console.log(ottsInfos);

	const dropdownD = (date, name) => {
		return (
			<Select defaultValue={'default'}>
				<option
					className='default'
					style={{
						color: color(name),
						backgroundColor: '#c4c4c4',
						fontWeight: '600',
					}}
					value={'default'}
					disabled
				>
					{date}일
				</option>
				{Array(30)
					.fill(0)
					.map((data, index) => {
						return <option>{index + 1}일</option>;
					})}
			</Select>
		);
	};

	const dropdownM = (membership, id, name) => {
		const printM = () => {
			if (id === 1 || id === 2 || id === 3 || id === 6 || id === 7 || id === 8)
				return (
					<>
						<option>베이직</option>
						<option>스탠다드</option>
						<option>프리미엄</option>
					</>
				);
			else if (id === 4 || id === 5)
				return (
					<>
						<option>일반</option>
						<option>프리미엄</option>
					</>
				);
			else if (id === 9 || id === 10 || id === 12 || id === 13)
				return (
					<>
						<option>월간</option>
						<option>연간</option>
					</>
				);
		};
		return (
			<Select defaultValue={'default'}>
				<option
					className='default'
					style={{ color: color(name), fontWeight: '600' }}
					value={'default'}
					disabled
				>
					{membership}
				</option>
				{printM()}
			</Select>
		);
	};

	const dropdownS = (share, id, name) => {
		const printS = () => {
			if (id === 1 || id === 4 || id === 6 || id === 11) return null;
			else if (id === 2 || id === 7)
				return (
					<>
						<option>1인</option>
						<option>2인</option>
					</>
				);
			else if (
				id === 3 ||
				id === 5 ||
				id === 8 ||
				id === 9 ||
				id === 10 ||
				id === 12 ||
				id === 13
			)
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
			<Select defaultValue={'default'}>
				<option
					className='default'
					style={{ color: color(name), fontWeight: '600' }}
					value={'default'}
					disabled
				>
					{share}인
				</option>
				{printS()}
			</Select>
		);
	};

	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div className='inner'>
						<Container>
							<div style={{ padding: '5vh 5vw 5vh 5vw' }}>
								<div
									style={{
										display: 'flex',
										height: '2.2vw',
										position: 'relative',
										margin: '4vh 0',
									}}
								>
									<MTitle>마이페이지</MTitle>
									<div>
										<SText onClick={logoutHandler}>로그아웃</SText>
									</div>
								</div>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										height: '1.6vw',
										margin: '8vh 0 4vh 0',
									}}
								>
									<Title>구독 중인 OTT 정보</Title>
									<Btn
										type='button'
										onClick={btnClick}
										className={isEditing ? 'editing' : ''}
									>
										<BtnText>{isEditing ? '완료' : '수정하기'}</BtnText>
									</Btn>
								</div>
								<Line />
								<OTTsWrapper>
									{otts.map((ott, index) => {
										return (
											<OTTContainer>
												<ImageWrapper>{ottImage(ott.ott.ott)}</ImageWrapper>
												<BlackLight>매달</BlackLight>
												<Bold
													style={{
														color: color(ott.ott.ott),
														marginRight: isEditing ? '0.7vw' : '0.5vw',
													}}
												>
													{isEditing
														? dropdownD(ott.pay_date, ott.ott.ott)
														: ott.pay_date + '일'}
												</Bold>
												<Bold
													style={{
														width: '5vw',
														color: color(ott.ott.ott),
														marginLeft: isEditing ? '1.6vw' : '0',
														marginRight: isEditing ? '0' : '0.5vw',
													}}
												>
													{ott.pay_amount}원
												</Bold>
												<BlackLight>{isEditing ? null : '결제'}</BlackLight>
												<DevideLine />
												<BlackLight
													style={{
														fontWeight: '600',
														marginLeft: isEditing ? '0.6vw' : '0.3vw',
													}}
												>
													{isEditing
														? dropdownM(
																ott.ott.membership,
																ott.ott.id,
																ott.ott.ott
														  )
														: ott.ott.membership}
												</BlackLight>
												{ott.fee === 0 ? null : (
													<BlackLight
														style={{
															marginLeft: '0.6vw',
															marginRight: '0.8vw',
															fontWeight: '600',
														}}
													>
														{isEditing
															? dropdownS(ott.share, ott.ott.id, ott.ott.ott)
															: ott.share + '인'}
													</BlackLight>
												)}
												{isEditing ? showButton(ott.ott.ott, ott.id) : null}
											</OTTContainer>
										);
									})}
									{disableOtts.map((ott, index) => {
										return (
											<OTTContainer>
												<ImageWrapper className='notText'>
													{ottImage(ott.ott.ott)}
												</ImageWrapper>
												<BlackLight className='notText'>매달</BlackLight>
												<Bold
													style={{ color: color(ott.ott.ott) }}
													className='notText'
												>
													{ott.pay_date}일
												</Bold>
												<Bold
													style={{ width: '5vw', color: color(ott.ott.ott) }}
													className='notText'
												>
													{ott.pay_amount}원
												</Bold>
												<BlackLight className='notText'>결제</BlackLight>
												<DevideLine className='notText' />
												<BlackLight
													style={{ fontWeight: '600' }}
													className='notText'
												>
													{ott.ott.membership}
												</BlackLight>
												{isEditing ? showButton(ott.ott.ott, ott.id) : null}
											</OTTContainer>
										);
									})}
								</OTTsWrapper>
							</div>
						</Container>
					</div>
				</NotHeaderArea>
			</Wrapper>
		</>
	);
};

export default MyPage;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin: 0;
	top: 0;
	position: absolute;
`;

const NotHeaderArea = styled.div`
	width: 100vw;
	height: calc(100vh - 5em);
	line-height: calc(100vh - 5em);
	top: 5em;
	padding: 0;
	position: relative;
	display: flex;
	align-items: center;
	.inner {
		display: block;
		margin: 0 auto;
	}
`;

const Container = styled.div`
	position: relative;
	width: 80vw;
	height: 80vh;
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0px 1vw 2vw rgba(0, 0, 0, 0.1);
	border-radius: 1vw;
	.editing {
		border: 0;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 0.5vw;
		cursor: pointer;
		width: 5vw;
		height: 4vh;
		position: absolute;
		right: 5vw;
		div {
			color: #fff;
		}
		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
			div {
				color: #d8d8d8;
			}
		}
	}
`;

const MTitle = styled.div`
	font-weight: 600;
	font-size: 2.2vw;
	line-height: 2.2vw;
`;

const SText = styled.div`
	cursor: pointer;
	text-decoration: underline;
	font-weight: 600;
	font-size: 1vw;
	line-height: 1vw;
	color: #343434;
	position: absolute;
	margin-left: 1vw;
	bottom: 0.2vh;
	&:hover {
		color: #6a6a6a;
	}
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 1.6vw;
	line-height: 1.6vw;
`;

const Btn = styled.button`
	border: 0;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 0.5vw;
	cursor: pointer;
	width: 5vw;
	height: 4vh;
	position: absolute;
	right: 5vw;
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		div {
			color: #6a6a6a;
		}
	}
`;

const BtnText = styled.div`
	font-weight: 700;
	font-size: 0.9vw;
	line-height: 4vh;
	color: #343434;
`;

const Line = styled.div`
	border: 1px solid #343434;
	width: 70vw;
	height: 0;
	margin-top: 1vh;
`;

const OTTsWrapper = styled.div`
	position: relative;
	width: 70vw;
	height: 40vh;
	border-radius: 1vw;
	margin: 0 auto;
	margin-top: 5vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: flex-start;
`;

const OTTContainer = styled.div`
	width: 35vw;
	height: 13vh;
	line-height: 13vh;
	border-radius: 1vw;
	display: flex;
	align-items: center;
	position: relative;
	.notText {
		opacity: 0.4;
	}
`;

const ImageWrapper = styled.div`
	width: 3vw;
	height: 5vw;
	margin-left: 1vw;
	margin-right: 1vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BlackLight = styled.div`
	font-weight: 400;
	font-size: 1.2vw;
	color: #343434;
	margin-right: 0.2vw;
`;

const Bold = styled.div`
	width: 3vw;
	font-weight: 600;
	font-size: 1.2vw;
	margin: 0 0.5vw 0 0.5vw;
`;

const DevideLine = styled.div`
	border-left: 1px solid #343434;
	width: 0;
	height: 2vh;
	margin: 0 1vw 0 1vw;
`;

const EditBtn = styled.button`
	position: absolute;
	right: 1vw;
	border: 0;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 0.2vw;
	cursor: pointer;
	width: 2vw;
	height: 2vw;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

const Select = styled.select`
	width: auto;
	height: 4vh;
	display: flex;
	align-items: center;
	text-align: center;
	font-size: 1vw;
	font-weight: 500;
	padding: 0 0.1vw;
	border: none;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 0.5vw;
	option {
		padding: 0;
	}
	&:focus {
		outline: none;
	}
`;

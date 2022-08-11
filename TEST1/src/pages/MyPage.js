import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Background from '../components/Background';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ReactComponent as CalculatorIcon } from '../static/CalculatorIcon.svg';

const MyPage = () => {
	return (
		<>
			<Header />
			<Background />
			<Wrapper>
				<NotHeaderArea>
					<div className='inner'></div>
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

import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CalculatorIcon } from "../../static/CalculatorIcon.svg";
import { ReactComponent as CalculatorDataIcon } from "../../static/CalculatorDataIcon.svg";
import { ReactComponent as CalculatorRectImg } from "../../static/CalculatorRectImg.svg";

const CalculatorRect = () => {
	return (
		<Wrapper>
			<NotHeaderArea>
				<div className="inner">
					<IconWrapper>
						<div>
							<Link to="/calculator">
								<CalculatorIcon fill-opacity="0.8" />
							</Link>
						</div>
						<div>
							<Link to="/calculator/data">
								<CalculatorDataIcon fill-opacity="0.8" />
							</Link>
						</div>
					</IconWrapper>
				</div>
				<CalculatorRectImg className="calculatorRectImg" />
			</NotHeaderArea>
		</Wrapper>
	);
};

export default CalculatorRect;

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
	position: absolute;
	overflow: hidden;
	.calculatorRectImg {
		width: 85%;
		height: auto;
		vertical-align: middle;
		margin-left: 7vw;
	}
	.inner {
		position: absolute;
		z-index: 10;
		width: 85vw;
		height: 60vw;
		vertical-align: middle;
		margin-left: 7vw;
		background: rgb(1, 1, 1, 0.3);
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	left: 3.2vw;
	top: calc(5em + 5.4vw);
	z-index: 5;
	width: 10vw;
	height: 8.2em;
	line-height: 8.2em;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	a {
		svg {
			width: 2.5vw;
			height: auto;
		}
	}
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CalculatorIcon } from "../../static/CalculatorIcon.svg";
import { ReactComponent as CalculatorDataIcon } from "../../static/CalculatorDataIcon.svg";
import { ReactComponent as CalculatorDataRectImg } from "../../static/CalculatorDataRectImg.svg";

const CalculatorDataRect = () => {
	return (
		<NotHeaderArea>
			<CalculatorDataRectImg className="calculatorRectImg" />
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
		</NotHeaderArea>
	);
};

export default CalculatorDataRect;

const NotHeaderArea = styled.div`
	width: 100vw;
	height: calc(100vh - 5em);
	line-height: calc(100vh - 5em);
	top: 5em;
	padding: 0;
	position: absolute;
	overflow: hidden;
	.calculatorRectImg {
		width: 85vw;
		height: auto;
		vertical-align: middle;
		margin-left: 7vw;
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	left: 12.2em;
	top: 8.3em;
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

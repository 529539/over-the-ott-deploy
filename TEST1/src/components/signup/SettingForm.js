import styled from "styled-components";

const SettingForm = (props) => {
	return (
		<Container>
			<SignupTop>
				<p>{props.title1}</p>
				<p>{props.title2}</p>
			</SignupTop>
			<div className="line1"></div>
		</Container>
	);
};
const Container = styled.div`
	width: 52.39vw;
	height: 65.09vh;
	position: absolute;
	z-index: 2;
	top: 20.27vh;
	left: 23.75vw;
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	.line1 {
		width: 33.38vw;
		height: 0px;
		background: #d7d7d7;
		border: 0.5px solid #d7d7d7;
	}
`;
const SignupTop = styled.div`
	color: #333333;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 24.96vw;
	height: 10.64vh;
	margin: 4.81vh 0 2.54vh 0;
	p:nth-child(1) {
		font-weight: 300;
		font-size: 0.78vw;
		margin: 3.32vh 0 0 0;
	}
	p:nth-child(2) {
		margin: 0;
		font-weight: 600;
		font-size: 1.82vw;
	}
`;

export default SettingForm;

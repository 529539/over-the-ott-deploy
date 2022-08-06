import styled from "styled-components";
import { ReactComponent as CalendarImg } from "../../static/CalendarImg.svg";

const CalendarBackground = () => {
	return (
		<Wrapper>
			<CalendarImg className="calendarImg" />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin: 0;
	top: 0;
	position: absolute;
	z-index: -5;
	.calendarImg {
		position: absolute;
		left: 0;
		bottom: 0;
	}
`;
export default CalendarBackground;

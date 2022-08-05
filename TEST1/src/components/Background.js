import styled from "styled-components";
import { ReactComponent as BackgroundImg } from "../static/backgroundImg.svg";

const Background = () => {
	return (
		<Wrapper
			style={{
				width: "100vw",
				height: "100vh",
			}}
		>
			<BackgroundImg />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	overflow: hidden;
	margin: 0;
	position: absolute;
	z-index: -1;
	.backgroundImg {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export default Background;

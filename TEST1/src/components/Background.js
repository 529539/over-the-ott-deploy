import styled from 'styled-components';
import { ReactComponent as BackgroundImg } from '../static/backgroundImg.svg';

const Background = () => {
	return (
		<Wrapper>
			<BackgroundImg className='backgroundImg' />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	.backgroundImg {
		width: 100%;
		height: auto;
		position: absolute;
		z-index: -1;
	}
`;
export default Background;

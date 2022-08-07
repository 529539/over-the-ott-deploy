import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Background from '../../static/signupBackground.svg';
const SignupModal = () => {
	return (
		<>
			<GlobalStyle />
			<ModalWrapper>
				<Background className='background' />
				<ModalBox></ModalBox>
			</ModalWrapper>
		</>
	);
};

const GlobalStyle = createGlobalStyle`
    position: absolute;
    z-index: 5;
`;

const ModalWrapper = styled.div`
	width: 100vw;
	background-color: black;
	.background {
		width: 100vw;
	}
`;
const ModalBox = styled.div``;
export default SignupModal;

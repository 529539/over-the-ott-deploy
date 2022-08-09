import styled from 'styled-components';
import LoginBackground from '../components/login/LoginBackground';
import SettingSubBox from '../components/signup/SettingSubBox';

const SignupSettingSub = () => {
	return (
		<Wrapper>
			<LoginBackground />
			<SettingSubBox />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
`;

export default SignupSettingSub;

import styled from 'styled-components';
import LoginBackground from '../components/login/LoginBackground';
import SettingBox from '../components/signup/SettingBox';

const SignupSetting = () => {
	return (
		<Wrapper>
			<LoginBackground />
			<SettingBox />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: auto;
`;

export default SignupSetting;

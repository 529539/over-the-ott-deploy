import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./static/fonts/NotoSansFont.css";
import { createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupSetting from "./pages/SignupSetting";
import SignupSettingSub from "./pages/SignupSettingSub";
import MyPage from "./pages/MyPage";
import Checklist from "./pages/Checklist";
import ChecklistSearch from "./pages/ChecklistSearch";
import Calendar from "./pages/Calendar";
import Calculator from "./pages/Calculator";
import CalculatorData from "./pages/CalculatorData";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signup/setting" element={<SignupSetting />} />
					<Route
						path="/signup/setting/subscribe"
						element={<SignupSettingSub />}
					/>
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/checklist" element={<Checklist />} />
					<Route path="/checklist/search" element={<ChecklistSearch />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/calculator" element={<Calculator />} />
					<Route path="/calculator/data" element={<CalculatorData />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

const GlobalStyle = createGlobalStyle`
    body {
        background-color: white;
        margin: 0 auto;
    }
    * {
	font-family: 'Noto Sans Display', sans-serif;
    }
`;

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
axios.defaults.baseURL = 'https://over-the-ott.herokuapp.com';
axios.defaults.withCredentials = true;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL = 'https://over-the-ott.herokuapp.com';
axios.defaults.withCredentials = true;

const token = sessionStorage.getItem('token');

axios.defaults.headers.common['Authorization'] = token
	? `Bearer ${token}`
	: null;

// const token = sessionStorage.getItem('token');
//axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

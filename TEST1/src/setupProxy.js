const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			// proxy할 주소
			target: 'https://over-the-ott.herokuapp.com',
			changeOrigin: true,
		})
	);
};

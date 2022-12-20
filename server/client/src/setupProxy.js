const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'api요청주소 * 엔드포인트까지만 넣어주자'
        pathRewrite: {
          '^/api': '',
        },
      }),
    );
  };
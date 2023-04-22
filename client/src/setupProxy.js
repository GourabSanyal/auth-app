const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://192.168.56.1:3000",
      changeOrigin: true,
    })
  );
};

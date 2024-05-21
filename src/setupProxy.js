const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://book-maker-v6ovqwi4ya-uc.a.run.app",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://v5-v6ovqwi4ya-el.a.run.app",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

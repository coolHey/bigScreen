const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import"@/assets/css/utils.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://146.56.215.178:9999",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});

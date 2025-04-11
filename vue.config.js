const { defineConfig } = require("@vue/cli-service");

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// module.exports = {

// };
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
    plugins: [new NodePolyfillPlugin()],
  },
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

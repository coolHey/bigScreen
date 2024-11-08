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
});

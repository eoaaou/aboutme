module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/eoaaou.github.io/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
        `
      }
    }
  }
};

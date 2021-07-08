module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "WE CARE";
      return args;
    });
  },
  transpileDependencies: ["vuetify"],
};

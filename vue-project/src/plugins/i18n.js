export default {
  install: (app, option) => {
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, option);
    };
    app.provide("i18n", option); //i18n 키로 다국어 전달
  },
};

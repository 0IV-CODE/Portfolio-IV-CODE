import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAnimateOnScroll from "vue-animate-onscroll";

Vue.use(VueAnimateOnScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");

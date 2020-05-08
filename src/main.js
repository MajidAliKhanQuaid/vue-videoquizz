import Vue from "vue";
// import Vuex from "vuex";
// import VueRouter from "vue-router";
import VueYouTubeEmbed from "vue-youtube-embed";
// import HelloWorld from "./components/HelloWorld.vue";
// import Qa from "./components/Qa.vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);

// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     currentQuestion: 0,
//     answers: [],
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//     updateAnswer(state, answer) {
//       // mutate state
//       state.answers.push(answer);
//     },
//   },
// });

// const routes = [
//   { path: "/", component: Qa },
//   { path: "/foo", component: HelloWorld },
//   { path: "/bar", component: Qa },
// ];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
// const router = new VueRouter({
//   routes, // short for `routes: routes`
// });

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");

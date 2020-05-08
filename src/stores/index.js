import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    currentQuestion: 0,
    answers: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateAnswer(state, answer) {
      // mutate state
      state.answers.push(answer);
    },
  },
});

export default store;

import Vue from "vue";
import Vuex from "vuex";
import coursesData from "../data/courses";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    courses: coursesData.map((obj, index) => {
      return { ...obj, id: index };
    }),
    selectedCourse: 0,
    selectedQuestion: 0,
    answers: [],
  },
  mutations: {
    increment(state) {
      console.log("Calling Store");
      state.count++;
    },
    updateAnswer(state, answer) {
      // mutate state
      state.answers.push(answer);
    },
  },
});

export default store;

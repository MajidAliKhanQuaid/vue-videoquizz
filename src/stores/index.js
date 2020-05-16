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
    questionAnswered: [],
    selectedCourse: 0,
    selectedQuestion: 0,
    answers: [],
  },
  mutations: {
    increment(state) {
      console.log("Calling Store");
      state.count++;
    },
    updateQuestionAnswered(state, qa) {
      // mutate state
      state.questionAnswered.push(qa);
    },
    incrementQuestion(state) {
      // mutate state
      state.selectedQuestion++;
    },
    updateAnswer(state, answer) {
      // mutate state
      state.answers.push(answer);
    },
  },
});

export default store;

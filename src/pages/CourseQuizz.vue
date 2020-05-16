<template>
  <div
    class="qa-container"
    v-if="'questions' in course && course.questions.length > selectedQuestion"
  >
    <div class="question-container">
      {{ this.course.questions[selectedQuestion].q }}
    </div>
    <div class="answer-option-container">
      <div
        class="answer-container"
        v-for="(answer, index) in this.course.questions[selectedQuestion].a"
        :key="index"
      >
        <input
          :id="index"
          type="radio"
          name="answers"
          :value="answer.v"
          @change="answer_Click"
        />
        <label class="answer-selector" :for="index">{{ answer.v }}</label>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>There're no questions to be loaded</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CourseQuizz",
  data: function() {
    return {
      courseId: this.$route.params.id,
    };
  },
  computed: {
    ...mapState({
      courses: (state) => state.courses,
      course: function(state) {
        return state.courses.find((x) => x && x.id == this.courseId);
      },
      selectedCourse: (state) => state.selectedCourse,
      selectedQuestion: (state) => state.selectedQuestion,
      // above line could also be written as
      // courses: 'courses',
    }),
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!

    if (isNaN(parseInt(to.params.id))) {
      next("/notfound");
    } else {
      next((vm) => {
        // access to component's instance using `vm` .
        // this is done because this navigation guard is called before the component is created.
        // clear your previously populated search results.
        // re-populate search results

        var course = vm.courses.find((x) => x && x.id == to.params.id);
        if (course) {
          next();
        } else {
          next("/notfound");
        }
      });
    }
  },
  methods: {
    answer_Click(ev) {
      // take existing answers
      let options = this.course.questions[this.selectedQuestion].a;
      // map them and add a new field to identify; which option was selected
      let mappedOptions = options.map((x) => ({
        ...x,
        enteredAnswer: ev.target.value == x.v,
      }));
      // update existing, answer and update store-state for `answeredQuestions`
      this.course.questions[this.selectedQuestion].a = mappedOptions;
      let question = this.course.questions[this.selectedQuestion];
      this.$store.commit("updateQuestionAnswered", question);
      console.log("State before : " + this.selectedQuestion);
      this.$store.commit("incrementQuestion");
      console.log("State after : " + this.selectedQuestion);
      if (this.selectedQuestion >= this.course.questions.length) {
        // here route it to some other page
        this.$router.push({ name: "AnswerSheet" });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato");
.question-container,
.answer-option-container {
  text-align: left;
  padding: 20px 100px;
  font-size: 25px;
}
input[type="radio"]:not(old) {
  width: 2em;
  margin: 0;
  padding: 0;
  font-size: 1em;
  opacity: 0;
  display: none;
}
.answer-selector {
  margin: 10px;
  padding: 20px;
  display: block;
}
.answer-selector:hover {
  border-style: solid;
  border-width: 1px;
  border-color: black;
}
</style>

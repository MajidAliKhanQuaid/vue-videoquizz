<template>
  <div class="qa-container" v-if="'questions' in course">
    <!-- <h1>{{$route.params.id}}</h1> -->
    <div class="question-container">{{this.course.questions[0].q}}</div>
    <div class="answer-option-container">
      <div
        class="answer-container"
        v-for="(answer, index) in this.course.questions[0].a"
        :key="index"
      >
        <input type="radio" name="answers" :value="answer.v" @change="answer_Click" />
        {{answer.v}}
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
      courseId: this.$route.params.id
    };
  },
  computed: {
    ...mapState({
      courses: state => state.courses,
      course: function(state) {
        return state.courses.find(x => x && x.id == this.courseId);
      },
      selectedCourse: state => state.selectedCourse,
      selectedQuestion: state => state.selectedQuestion
      // above line could also be written as
      // courses: 'courses',
    })
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!

    if (isNaN(parseInt(to.params.id))) {
      next("/notfound");
    } else {
      next(vm => {
        // access to component's instance using `vm` .
        // this is done because this navigation guard is called before the component is created.
        // clear your previously populated search results.
        // re-populate search results

        var course = vm.courses.find(x => x && x.id == to.params.id);
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
      let answer = this.course.questions[0].a.find(x => x.v == ev.target.value);
      if (answer && answer.c == true) {
        this.$router.push({ name: "Home" });
        console.log("Drust Jawab");
        return;
      }
      console.log("Ghalat Jawab");
    }
  }
};
</script>

<style>
</style>
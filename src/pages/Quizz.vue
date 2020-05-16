<template>
  <div>
    <div v-for="course in courses" :key="course.id">
      <QuizzTemplate :course="course"></QuizzTemplate>
    </div>
  </div>
</template>
<script>
import QuizzTemplate from "../components/QuizzTemplate";
import { mapState } from "vuex";
export default {
  name: "Quizz",
  data: function() {
    return {};
  },
  computed: {
    ...mapState({
      courses: "courses",
    }),
  },
  components: {
    QuizzTemplate,
  },
};
</script>

<template>
  <div>
    <div v-for="course in courses" :key="course.id">
      <!-- <h1>This is Courses {{ index }}</h1> -->
      <CourseTemplate :course="course"></CourseTemplate>
    </div>
  </div>
</template>
<script>
import CourseTemplate from "../components/CourseTemplate";
import { mapState } from "vuex";
export default {
  name: "Courses",
  data: function() {
    return {};
  },
  components: {
    CourseTemplate
  },
  computed: {
    ...mapState({
      courses: "courses"
    })
  }
};
</script>

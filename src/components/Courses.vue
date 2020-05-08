<template>
  <div>
    <div v-for="course in courses" :key="course.id">
      <!-- <h1>This is Courses {{ index }}</h1> -->
      <CourseTemplate :course="course"></CourseTemplate>
    </div>
  </div>
</template>
<script>
import CourseTemplate from "./CourseTemplate";
import courses from "../data/courses.js";
export default {
  name: "Courses",
  data: function() {
    return {
      count: 5,
      data: {
        type: Object
      },
      courses: courses.map(x => {
        return { ...x, id: 0 };
      })
    };
  },
  components: {
    CourseTemplate
  }
};
</script>

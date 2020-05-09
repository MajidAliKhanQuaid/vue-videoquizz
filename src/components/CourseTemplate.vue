<template>
  <div class="course-template">
    <div class="course-image-container">
      <img class="course-image" src="../assets/logo.png" />
    </div>
    <div class="course-info-container">
      <div class="course-title-container">
        <!-- <a href="/course/1">{{course.name}}</a> -->
        <router-link :to="{ name: 'Course', params: { id: course.id }}">{{course.name}}</router-link>
      </div>
      <div class="course-description-container">{{course.desc}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CourseTemplate",
  props: {
    course: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    console.log("CourseTemplate - Mounted Event");
    console.log(this.course.name);
    console.log(this.course.desc);
  }
};
</script>
<style scoped>
div.course-template {
  display: flex;
  height: 100px;
  margin-top: 10px;
}
.course-image-container {
  width: 120px;
}
img.course-image {
  width: auto;
  height: 100%;
}
div.course-title-container {
  text-align: left;
}
div.course-title-container a {
  /* height: 40%; */
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: red;
}
div.course-description-container {
  /* height: 60%; */
  text-align: left;
  font-size: 11px;
  font-weight: bold;
}
</style>
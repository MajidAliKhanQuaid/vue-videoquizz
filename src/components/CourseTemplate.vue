<template>
  <router-link class="course-links" :to="{ name: 'Course', params: { id: course.id }}">
    <div class="course-template">
      <div class="course-image-container">
        <img class="course-image" src="../assets/logo.png" />
      </div>
      <div class="course-info-container">
        <div class="course-title">{{course.name}}</div>
        <div class="course-description">{{course.desc}}</div>
      </div>
    </div>
  </router-link>
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
.course-links {
  text-decoration: none;
  color: black;
}

div.course-template {
  display: flex;
  box-sizing: border-box;
  height: 100px;
  margin: 20px 5px;
  padding: 10px;
  border-color: #7f886d;
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
}
div.course-template:hover {
  border-color: #666;
  border-style: dotted;
}
.course-image-container {
  width: 120px;
}
img.course-image {
  width: auto;
  height: 100%;
}
div.course-title {
  text-align: left;
  font-size: 30px;
}
div.course-description {
  /* height: 60%; */
  text-align: left;
  font-size: 11px;
  font-weight: bold;
}
</style>
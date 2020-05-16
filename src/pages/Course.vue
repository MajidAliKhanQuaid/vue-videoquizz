<template>
  <div class="course">
    <!-- <h1>This is course | {{$route.params.id}}</h1> -->
    <div class="course-title">
      <h1>{{ course.name }}</h1>
    </div>
    <h1 v-if="showLoadingMessage">Video is Loading .. Wait</h1>
    <div class="course-video-container">
      <youtube
        :video-id="course.videoId"
        @ready="ready"
        @playing="playing"
        @ended="stop"
        :player-vars="{ autoplay: 1, rel: 0, mute: 1 }"
      ></youtube>
    </div>
    <div class="course-quizz-container" v-if="showQuizzButton">
      <button class="btn-start-course" @click="btnStartQuizz_Click">
        Start Quizz
      </button>
    </div>
    <div class="course-description">
      <h3>Description</h3>
      {{ course.desc }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Course",
  data: function() {
    return {
      showLoadingMessage: true,
      showQuizzButton: false,
      course: Object,
    };
  },
  mounted() {
    let courseId = this.$route.params.id;
    console.log(this.courses);
    var course = this.courses.find((x) => x && x.id == courseId);
    console.log("course Id is " + courseId);
    console.log(course);
    if (course) {
      this.course = course;
    }
  },
  methods: {
    btnStartQuizz_Click() {
      this.$router.push({
        name: "CourseQuizz",
        params: { id: this.course.id },
      });
    },
    ready(ev) {
      this.showLoadingMessage = false;
      this.player = ev.target;
    },
    playing() {
      // The player is playing a video.
      console.log("video is playing");
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.showQuizzButton = true;
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
  computed: {
    ...mapState({
      courses: "courses",
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
};
</script>
<style scoped>
div.course-video-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-start-course {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #6796bf;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.btn-start-course:hover {
  background-color: #6796bf;
}

.btn-start-course:active {
  background-color: #6796bf;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.course-title {
  text-align: center;
}
.course-description {
  text-align: left;
  padding-left: 100px;
}
</style>

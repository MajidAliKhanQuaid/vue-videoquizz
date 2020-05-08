<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <AboutMe></AboutMe> -->
    <!-- <youtube
      :video-id="videoId"
      @ready="ready"
      @playing="playing"
      @ended="stop"
      :player-vars="{ autoplay: 1, rel: 0 }"
    ></youtube>-->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

    <div id="chaning-region">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <!-- <Qa video_id="55" /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Qa from "./components/Qa.vue";
import Navbar from "./components/Navbar.vue";
// import AboutMe from "./components/AboutMe.vue";
export default {
  name: "App",
  data: function() {
    return {
      videoId: "1naFgA71F3I",
    };
  },
  components: {
    Navbar,
    // AboutMe,
    // HelloWorld,
    // Qa,
  },
  methods: {
    ready(ev) {
      this.player = ev.target;
      console.log("video is ready");
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
      console.log("video is changing");
    },
    stop() {
      this.player.stopVideo();
      console.log("video is stopping to play");
    },
    pause() {
      this.player.pauseVideo();
      console.log("video is paused");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

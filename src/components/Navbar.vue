<template>
  <div class="navbar-container">
    <div class="navbar-heading">
      <router-link to="/" class="a-navbar-heading navbar-anchors"
        >Fehm Ul Quran</router-link
      >
    </div>
    <div
      :class="{ 'navbar-pill': true, selected: $route.name == 'CourseList' }"
    >
      <router-link to="/courses" class="a-navbar-pill navbar-anchors"
        >Courses</router-link
      >
    </div>
    <div :class="{ 'navbar-pill': true, selected: $route.name == 'QuizzList' }">
      <router-link to="/quizz" class="a-navbar-pill navbar-anchors"
        >Quizzes</router-link
      >
    </div>
    <!-- <div
      :class="{
        'navbar-pill': true,
        selected: $route.name == 'CertificateList',
      }"
    >
      <router-link to="/certificates" class="a-navbar-pill navbar-anchors"
        >Certificates</router-link
      >
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
  computed: {
    ...mapState({
      count1: "count",
    }),
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.navbar-container {
  display: flex;
  flex-flow: wrap;
  background-color: #b1bfd8;
  background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
  padding: 20px;
  border-radius: 20px;
}

div.navbar-heading {
  font-weight: bold;
  margin-right: 100px;
}

div.navbar-heading a {
  font-size: 40px;
}

div.navbar-container div.navbar-pill {
  min-width: 150px;
  padding-top: 15px;
  margin: 0px 10px;
}

.navbar-pill a {
  display: block;
  height: 100%;
}

a.navbar-anchors {
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.navbar-pill:hover {
  background-color: rgb(96, 96, 96, 0.3);
  border-style: outset;
  border-width: 1px 0px;
  border-color: transparent;
  color: white;
}
.navbar-pill.selected {
  background-color: #666;
}
</style>

<template>
  <div class="navbar-container">
    <div class="navbar-heading">
      <router-link to="/" class="a-navbar-heading navbar-anchors">Fehm Ul Quran</router-link>
    </div>
    <router-link to="/courses" class="a-navbar-pill navbar-anchors">
      <div :class="$route.name == 'CourseList' ? 'navbar-pill selected' : 'navbar-pill'">Courses</div>
    </router-link>
    <router-link to="/quizz" class="a-navbar-pill navbar-anchors">
      <div :class="$route.name == 'QuizzList' ? 'navbar-pill selected' : 'navbar-pill'">Quizzes</div>
    </router-link>
    <router-link to="/certificates" class="a-navbar-pill navbar-anchors">
      <div
        :class="$route.name == 'CertificateList' ? 'navbar-pill selected' : 'navbar-pill'"
      >Certificates</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  props: {
    msg: String
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    }
  },
  computed: {
    ...mapState({
      count1: "count"
    }),
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.navbar-container {
  display: flex;
  flex-flow: wrap;
  background-color: #b1bfd8;
  background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
  /* padding: 10px; */
}

div.navbar-heading {
  font-weight: bold;
  margin-right: 100px;
}

div.navbar-heading a {
  font-size: 40px;
}

div.navbar-container div.navbar-pill {
  min-width: 200px;
}

a.navbar-anchors {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

div.selected {
  border-radius: 5%;
  background: #cad3c8;
}

div.selected a {
  color: #7f5a83;
}
</style>

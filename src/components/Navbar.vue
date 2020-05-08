<template>
  <div class="navbar-container">
    <div class="navbar-heading">
      <router-link to="/" class="a-navbar-heading">Fehm Ul Quran</router-link>
    </div>
    <div class="navbar-pill">
      <router-link to="/courses" class="a-navbar-pill">Courses</router-link>
    </div>
    <div class="navbar-pill">
      <router-link to="/quizz" class="a-navbar-pill">Quizz</router-link>
    </div>
    <div class="navbar-pill">
      <router-link to="/certificates" class="a-navbar-pill">Certificates</router-link>
    </div>
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
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.navbar-container {
  display: flex;
}
div.navbar-container div.navbar-pill {
  width: 200px;
}
</style>

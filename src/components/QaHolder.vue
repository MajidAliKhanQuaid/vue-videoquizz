<template>
  <div class="question_container">
    <Qa></Qa>
  </div>
</template>

<script>
import Qa from "./Qa";
import { mapState } from "vuex";

export default {
  name: "Qa",
  props: {
    video_id: String
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    answer_click(ev) {
      let value = ev.target.value;
      this.$store.commit("updateAnswer", { value: value });
      console.log(this.$store.state.answers);
    }
  },
  data: function() {
    return {
      qno: 0,
      count: questions.length,
      qs: questions
    };
  },
  computed: {
    ...mapState({
      count1: "count",
      answers: []
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

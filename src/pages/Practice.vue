<template>
  <div class="question_container">
    <div>
      <Product
        title="majid"
        description="hey"
        imagePath="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png"
      />
    </div>

    <button @click="increment">Increment</button>
    <span>{{ count1 }}</span>
    <div class="question_options_list">
      <div :question="qs[qno]">
        {{ qs[qno].q }}
        <div v-for="(answer, index) in qs[qno].a" id="index" :key="index">
          <span class="ans-notch-container">
            <input
              :id="index"
              type="radio"
              name="qa"
              :value="index"
              :qno="qno"
              @click="answer_click"
            />
          </span>
          <span class="ans-label-container">
            <label :for="index">{{ answer.v }}</label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questions from "../data/questions";
import Product from "@/components/Product";
import { mapState } from "vuex";

export default {
  name: "Practice",
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
  },
  components: {
    Product
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

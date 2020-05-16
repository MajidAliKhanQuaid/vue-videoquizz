<template>
  <div class="answers-container">
    <div class="answer-box" v-for="(qa, index) in questionAnswered" :key="index">
      <div class="question">{{qa.q}}</div>
      <div
        v-for="(aa, aIndex) in qa.a"
        :key="'s' + aIndex"
        :class="{'answer' : true, 'correct-answer': aa.c == true, 'wrong-answer': aa.c == false & aa.enteredAnswer == true,}"
      >{{ aa.v }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AnswerSheet",
  computed: {
    ...mapState({
      questionAnswered: state => state.questionAnswered
    })
  }
};
</script>

<style scoped>
.answers-container {
  display: flex;
  flex-flow: column;
}
.question {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  padding: 5px;
}
.answer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding: 5px;
}
.answer-box {
  box-sizing: border-box;
  margin-top: 25px;
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.correct-answer {
  color: white;
  background-color: green;
}
.wrong-answer {
  color: white;
  background-color: red;
}
</style>
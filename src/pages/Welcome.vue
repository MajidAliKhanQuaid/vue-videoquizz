<template>
  <div class="welcome-container">
    <h1 class="welcome-title">Welcome to Fehm ul Quran</h1>
    <div class="image-container">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-container {
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.welcome-title {
  font-size: 50px;
}
.image-container img {
  width: 50%;
  text-align: center;
}
</style>

<template>
  <section class="recipes">
    <router-link :to="{ name: 'CertificateList'}">
      <article class="recipe">
        <div class="thumbnail" :style="{backgroundImage: 'url(' + imagePath + ')'}"></div>
        <h1>{{title}}</h1>
        <p>{{description}}</p>
      </article>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["title", "imagePath", "description"]
};
</script>

<style scoped>
.recipes {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.recipe {
  box-sizing: border-box;
  width: 280px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
}

.thumbnail {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
}
</style>
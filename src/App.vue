<template>
  <div id="app">
    <GitView service="github" type="profile" user="jquense" payload="quiz-pro" />
  </div>
</template>

<script>
import GitView from "./components/GitView.vue";

export default {
  name: "App",
  components: {
    GitView
  }
};
</script>

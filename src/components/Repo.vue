<template>
  <div>
    <img :src="repoData.owner.avatar_url" />
    <p>repo name: {{repoData.name}}</p>
    <p>url: {{repoData.full_name}}</p>
    <p>owner: {{repoData.owner.login}}</p>
  </div>
</template>

<script>
export default {
  name: "Repo",
  props: {
    repoData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  float: left;
}
</style>
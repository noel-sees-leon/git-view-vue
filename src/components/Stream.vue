<template>
  <div>
    <div v-for="event in streamData" :key="event.id">
      <p>{{streamData.type}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stream",
  props: {
    streamData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
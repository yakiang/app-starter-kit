<template>
  <router-view :key="key" />
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.app-main {
  height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

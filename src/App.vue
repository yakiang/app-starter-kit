<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;

  #app {
    width: 100vw;
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;

    &:hover,
    &:visited {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>

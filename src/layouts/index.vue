<template>
  <div class="app-wrapper">
    <nav-bar />
    <app-main id="app-main" />
  </div>
</template>

<script>
import NavBar from "./Navbar.vue";
import AppMain from "./AppMain.vue";

export default {
  name: "LayOut",
  components: {
    NavBar,
    AppMain,
  },
};
</script>

<template>
  <el-row type="flex" align="middle" justify="space-between" id="navbar">
    <router-link to="/">联通产业互联网</router-link>
    <nav-menu />
    <div class="user">
      <el-dropdown placement="bottom" v-if="user?.name">
        <span>{{ user?.name }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <router-link to="/login" v-if="!user?.name && $route.path !== '/login'"
        >登录</router-link
      >
    </div>
  </el-row>
</template>

<script>
import NavMenu from "./Menu.vue";

export default {
  name: "NavBar",
  components: {
    NavMenu,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped lang="scss">
#navbar {
  width: 100%;
  height: 60px;
  padding: 0 48px 0 18px;
  color: #303133;
  background: skyblue;
}
.user {
  cursor: pointer;
}
</style>

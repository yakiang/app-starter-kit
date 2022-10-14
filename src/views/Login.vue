<template>
  <div class="login" v-if="!username">
    <p>登录窗口</p>
    <div class="form-area">
      <el-row class="row" type="flex" align="middle">
        <el-col span="6">用户名</el-col>
        <el-col span="18">
          <el-input v-model="name" for="name"></el-input>
        </el-col>
      </el-row>
      <el-row class="row" type="flex" align="middle">
        <el-col span="6">密码</el-col>
        <el-col span="18">
          <el-input show-password v-model="password"></el-input>
        </el-col>
      </el-row>
      <el-button @click="login" class="submit" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  updated() {
    if (this.$store.state.user.name) {
      this.$router.push("/");
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.name);
      this.name = "";
      this.password = "";
    },
  },
  props: {},
  computed: {
    username() {
      return this.$store.state.user.name;
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24vh;
}
.form-area {
  width: 18vw;
  min-width: 256px;
  height: 24vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.row {
  width: 100%;
}
.submit {
  width: 12vw;
}
</style>

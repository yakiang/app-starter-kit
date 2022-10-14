<template>
  <el-menu class="menu" text-color="#303133" mode="horizontal" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Dashbboard</template>
      <el-menu-item index="path1">选项1</el-menu-item>
      <el-menu-item index="path2">选项2</el-menu-item>
      <el-menu-item index="path3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">我的</template>
      <el-menu-item index="page4">选项4</el-menu-item>
      <el-menu-item index="page5">选项5</el-menu-item>
      <el-menu-item index="page6">选项6</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
};
</script>

<style scoped>
.menu {
  background: transparent;
}
</style>

<template>
  <div class="side-bar" :class="{ 'sidebar-collapse': isCollapse }">
    <div class="flex align-center menu-header">
      <i @click="foldMenu" class="el-icon-s-fold color-fff"></i>
      <div v-if="!isCollapse" class="font-size-14 color-fff padding-left-10">管理后台</div>
    </div>
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      :collapse="isCollapse"
      unique-opened
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="home">home</el-menu-item>
        <el-menu-item index="set">set</el-menu-item>
        <el-menu-item index="DagComponents">DagComponents</el-menu-item>
        <el-menu-item index="steps">分步骤</el-menu-item>
        <!-- <el-menu-item index="SealDrag">拉拽</el-menu-item> -->
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
        isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //折叠菜单
    foldMenu() {
        this.isCollapse = !this.isCollapse
    },
  },
  computed: {
    onRoutes () {
        return this.$route.path;
    }
  }
};
</script>

<style lang="less">
.side-bar {
  width: 220px;
  height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  background: #324157;
  transition: 0.3s ease-in-out;
  &.sidebar-collapse{
      width: 64px;
    }
}
.el-menu-vertical-demo {
  width: 100%;
}
.menu-header {
  box-sizing: border-box;
  padding: 25px;
  width: 100%;
  height: 70px;
  background: #242f42;
  border-bottom: 1px solid #101117;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
</style>

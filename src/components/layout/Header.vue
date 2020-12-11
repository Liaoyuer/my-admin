<template>
  <div class="flex align-center justify-between padding-lr-10 header">
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- <div>
      <el-breadcrumb class="color-white" separator="/">
        <el-breadcrumb-item
          v-if="breadcrumb[0]['text'] != '系统首页'"
          :to="{ path: '/' }"
          >系统首页</el-breadcrumb-item
        >
        <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">{{
          item.text
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <div class="header-right">
      <div class="flex align-center">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip
            effect="dark"
            :content="fullscreen ? `取消全屏` : `全屏`"
            placement="bottom"
          >
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="f" trigger="hover" @command="handleCommand">
          <div class="flex align-center el-dropdown-link">
            <div class="user-avator margin-left-10">
              <img src="../../assets/image/p1.png" />
            </div>
            <span class="margin-left-10">
              哈哈哈
              <i class="el-icon-caret-bottom"></i>
            </span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
            <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      fullscreen: false,
    };
  },
  //   computed: {
  //     ...mapState({
  //       userInfo: state => state.userInfo,
  //       leftMenu: state => state.userInfo.menu.left,
  //       collapse: "collapse"
  //     }),
  //     breadcrumb () {
  //       const crumb = [];
  //       this.leftMenu.map(item => {
  //         return (typeof item.list.map == "function") && item.list.map(val => {
  //           if (val.url == this.$route.path) {
  //             crumb.push([
  //               { text: item.text, path: item.url },
  //               { text: val.text, path: val.url }
  //             ]);
  //           }
  //         });
  //       });
  //       if (!crumb.length) {
  //         crumb.push({ text: this.$route.meta.title, path: this.$route.path });
  //       }
  //       return crumb.flat();
  //     }
  //   },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
        console.log("command",command)
    //   if (command == "userInfo") {
    //     this.$router.push({
    //       path: "/settings/info",
    //       query: { id: this.userInfo.admin.admin_id },
    //     });
    //   }
      //   if (command == "loginout") {
      //     this.$ajax.logout().then(res => {
      //       localStorage.removeItem("token");
      //       localStorage.removeItem("userInfo");
      //       this.$message({
      //         type: "success",
      //         message: "退出成功",
      //         duration: 500,
      //         onClose: () => {
      //           this.$router.push("/login");
      //         }
      //       });
      //     });
      //   }
    },
    // 侧边栏折叠
    collapseChage() {
    //   this.$store.commit("COLLAPSE");
    },
    // 全屏事件
    handleFullScreen() {
      const element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
  mounted() {
    if (document.body.clientWidth < 1400) {
      this.collapseChage();
    }
  },
};
</script>
<style lang="less" scoped>
.header {
  height: 70px;
  font-size: 22px;
  background: #fff;
  box-sizing: border-box;
  padding: 0 20px;
  .btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
    color: #333;
  }
  .btn-bell,
  .btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }
  .btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
  }
  .btn-bell .el-icon-bell {
    color: #fff;
  }
  .user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .el-dropdown-link {
    color: #333;
    cursor: pointer;
  }
  .el-dropdown-menu__item {
    text-align: center;
  }
}
</style>

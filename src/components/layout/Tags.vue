<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">
          {{ tag || item.title }}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"
          ><i class="el-icon-close"></i
        ></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown class="margin-top-3" @command="handleTags">
        <el-button size="small" type="primary">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data () {
    return {
      tagsList: [],
      tag: ""
    };
  },
  methods: {
    isActive (path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags (index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    },
    // 关闭全部标签
    closeAll () {
      this.tagsList = [];
      this.$router.push("/");
      this.$store.commit("TAGSLIST", this.tagsList);
    },
    // 关闭其他标签
    closeOther () {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
      this.$store.commit("TAGSLIST", this.tagsList);
    },
    // 设置标签
    setTags (route) {
      const { query, meta, name, fullPath } = route
      const isExist = this.tagsList.some(item => {
        return item.path === fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        const title = query.tag || meta.title;
        this.tagsList.push({
          title,
          meta: meta,
          path: fullPath,
          name
        });
      }
      this.$store.commit("TAGSLIST", this.tagsList);
    },
    handleTags (command) {
      command === "other" ? this.closeOther() : this.closeAll();
    }
  },
  computed: {
    showTags () {
      return this.tagsList.length > 0;
    },
    ...mapState({
      closePath: "closePath"
    })
  },
  watch: {
    $route (newValue) {
      this.setTags(newValue);
    },
    closePath (val) {
      if (val) {
        let pathIndex = 0;
        for (let i = 0; i < this.tagsList.length; i++) {
          const item = this.tagsList[i]
          if (item.path == val) {
            pathIndex = i
            break
          }
        }
        this.closeTags(pathIndex)
        this.$store.commit("COLSEPATH", "")
      }
    }
  },
  created () {
    this.setTags(this.$route);
  }
};
</script>

<style lang="less">
.tags {
  position: relative;
  height: 40px;
  background: #fff;
  padding-left: 10px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 5px 5px 2px 0;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 28px;
  line-height: 28px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 40px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>

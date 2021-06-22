<template>
  <div class="container">
    <div class="top">
      <div class="topic">{{ comList[currentComIndex].topic }}</div>
      <div class="btn-box">
        <el-button class="prev" @click="prev" v-if="currentComIndex != 0">
          上一步
        </el-button>
        <el-button class="next" @click="next" v-if="currentComIndex != 1">
          下一步
        </el-button>
        <el-button class="save" @click="save">保存</el-button>
      </div>
    </div>
    <div class="body">
      <keep-alive>
        <component
          :is="comList[currentComIndex].name"
          :ref="comList[currentComIndex].name"
          :form="form"
          @updateForm="updateForm"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    First: () => import("./components/First.vue"),
    Seconds: () => import("./components/Seconds.vue"),
  },
  data() {
    return {
      comList: [
        {
          topic: "第一步",
          name: "First",
        },
        {
          topic: "第二步",
          name: "Seconds",
        },
      ],
      currentComIndex: 0,
      form: {},
    };
  },
  methods: {
    /**
     * @example: 子组件更新form数据
     */
    updateForm(value) {
      this.form = Object.assign({}, this.form, value);
      console.log('----',this.form);
    },
    prev() {
        // this.currentComIndex--;
        // this.$refs[this.comList[this.currentComIndex].name].hideSidebar();
      this.$refs[this.comList[this.currentComIndex].name].receive().then(() => {
        this.currentComIndex--;
      });
    },
    next() {
        this.$refs[this.comList[this.currentComIndex].name].receive().then(() => {
          this.currentComIndex++;
        });
    },
    save() {},
  },
};
</script>
<style scoped lang="less">
.container {
  .top {
    margin-top: 20px;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;
    background: #fff;
    .topic {
      font-size: 24px;
      font-weight: bold;
      color: #303133;
      line-height: 1;
    }
    .btn-box {
      button {
        width: 109px;
        height: 40px;
        padding: 0;
        margin: 0 0 0 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        color: #ffffff;
        line-height: 40px;
        box-sizing: border-box;
      }
      .prev {
        border: 1px solid #247257;
        background: #fff;
        color: #247257;
        line-height: 38px;
      }
      .next {
        background: #ffa02a;
      }
      .save {
        background: #247257;
      }
    }
  }
  .body {
    display: flex;
    flex: 1;
    // height: 0;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
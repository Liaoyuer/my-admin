<template>
  <div class="grand-child">
    我是孙组件===
    我是祖父组件传过来的消息:{{parentMsg}},{{isShow}}
    <el-button @click="grandBtn">我是孙按钮</el-button>
  </div>
</template>
<script>
export default {
  // 不想继承所有父组件的内容,同时也不在组件根元素dom上显示属性
  inheritAttrs: false,
  // 在本组件中需要接收从父组件传递过来的数据，注意props里的参数名称不能改变，必须和父组件传递过来的是一样的
  props: {
    parentMsg: {
      type: String,
      dedault: "",
    },
    isShow: {
      type: Boolean,
      dedault: false,
    }
  },
  data() {
    return {};
  },
  methods:{
      grandBtn(){
          this.$emit("grand","hhh")
          console.log('grans :>> ', 111);
      }
  }
};
</script>
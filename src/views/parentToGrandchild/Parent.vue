<template>
  <div class="parent">
    我是父组件=={{ parentMsg }}
    <child :parentMsg="parentMsg" :isShow="isShow" @grand="fromGrand"></child>
    <el-button @click="changeParent">改变父组件数据</el-button>
  </div>
</template>
<script>
import Child from "./Child";
export default {
  components: {
    Child,
  },
  data() {
    return {
      parentMsg: "我是来自父组件的消息",
      isShow: true
    };
  },
  methods:{
      changeParent(){
          this.parentMsg = "改变来自父组件的消息，嘿嘿"
          this.isShow = false
      },
      fromGrand(e){
          console.log('e :>> ', e);
      }
  }
};
</script>
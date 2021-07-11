<template>
  <div class="child">
    我是子组件=={{ ChildMsg }}
    <grand-child v-bind="$attrs" v-on="$listeners"></grand-child>
  </div>
</template>
<script>
import GrandChild from "./GrandChild";
export default {
  // 继承所有父组件的内容
  inheritAttrs: true,
  components: {
    GrandChild,
  },
  data() {
    return {
      ChildMsg: "我是来自子组件的消息",
    };
  },
};
</script>